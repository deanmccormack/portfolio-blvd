import React, { useState } from "react"

import { getIsFullScreenLayout, getIsPortrait } from "./layout"

import Img from "gatsby-image"

const SlideCounter = function SlideCounter({index, slideCount}) {
  return (
    <span className="slide-nav__counter"> {`${index} / ${slideCount}`} </span>
  )
}

const SlideNavTop = function SlideNavTop(props) {
  return (
    <nav style={{
      display:'flex',
      justifyContent: 'flex-end',
      marginBottom: '.5rem',
    }} >
      <div>
        <PrevButton {...props} />
        <SlideCounter {...props} />
        <NextButton {...props} />
      </div>
    </nav>
  )
}

const PrevButton = function PrevButton(props) {
  return (
    <button className="nav__button" onClick={() => props.handlePrevious()}>
      <span title="previous" className="prev-arrow slide-nav__arrow"></span></button>
  )
}

const NextButton = function NextButton(props) {
  return (
    <button title="next" className="nav__button" onClick={() => props.handleNext()}>
      <span aria-label="Next" className="next-arrow slide-nav__arrow"></span></button>
  )
}

const CloseButton = function CloseButton(props) {
  return (
    <button title="close" className="nav__button" onClick={() => props.handleClose()}>
      <span aria-label="Close" className="icon-close"></span>
    </button>
  )
}

const ImageContainer = function ImageContainer(props) {

  return (
    <div>
      <div style={{
          cursor: 'pointer',
          marginBottom: '.5em',
        }}
        onClick={() => props.handleImageClick()}
        >
        <Img
          fluid={props.node.childImageSharp.fluid}
          key={props.node.id}
          alt={props.node.name.replace(/-/g, ' ').substring(2)}
        />
      </div>
      <div style={{
          fontSize: '60%',
          marginBottom: '.5em',
        }}>
        {props.node.name}
      </div>
    </div>
  )
}

const SmallLightBoxGallery = function SmallLightBoxGallery(props) {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '8%',
        }}>
        <div><CloseButton handleClose={props.closeLightBox}/></div>
        <div>
          <SlideCounter
            index={props.index}
            slideCount={props.slideCount} />
        </div>
        <div>
          <PrevButton {...props} />
          <NextButton {...props} />
        </div>
      </div>
      <div style={{
        maxWidth: '80%',
        maxHeight: '60%',
        margin: '1em auto'
        }}>
        <LightBoxImageContainer {...props} />
      </div>
    </>
  )
}

const  LargeLightBoxGallery = function LargeLightBoxGallery(props) {
  const flexEnd = {
    display:'flex',
    justifyContent: 'flex-end',
    margin: '1% 2%',
  }

  const flexBegin = {
    display:'flex',
    justifyContent: 'flex-begin',
    margin: '1% 2%',
  }

  const getFlexBasis = () => {
    const { aspectRatio } = props.node
      ? props.node.childImageSharp.fluid
      : props.childImageSharp.fluid

    return getIsPortrait()
      ? '74%' : aspectRatio > 1.3
        ? '54%' : aspectRatio > .95
          ? '40%' : aspectRatio > .7
            ? '33%' : '26%'
  }

  return (
    <>
      <div style={flexEnd}><CloseButton handleClose={props.closeLightBox}/></div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        }}>
        <div style={flexBegin}>
          <PrevButton {...props} />
        </div>
        <div style={{flexBasis: getFlexBasis()  }}>
          <LightBoxImageContainer {...props} />
        </div>
        <div style={flexEnd}>
          <NextButton {...props} />
        </div>
      </div>
      <div style={flexEnd}>
        <SlideCounter
          index={props.index}
          slideCount={props.slideCount} />
      </div>
    </>
  )
}

const LightBoxGallery = function LightBoxGallery(props) {
  if (getIsFullScreenLayout()) {
    return (
      <LargeLightBoxGallery {...props} />
    )
  }

  return (
    <SmallLightBoxGallery {...props} />
  )

}

const LightBoxImageContainer = function LightBox(props) {
  return (
    <div>
      <ImageContainer
        node={props.node}
        handleImageClick={props.handleImageClick} />
    </div>
  )
}

const SlideShow = function SlideShow(props) {
  const [index, setIndex] = useState(1)

  const handleNext = () =>
    index === slideCount? setIndex(1) : setIndex(index + 1)

  const handlePrevious = () =>
    index === 1 ? setIndex(slideCount) : setIndex(index - 1)

  const slideCount = props.allFile.edges.length

  const { node } = props.allFile.edges[index - 1]

  return (
    <>
     {props.isLightBoxVisible ?
      <LightBoxGallery
        index={index}
        slideCount={slideCount}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        node={node}
        handleImageClick={handleNext}
        closeLightBox={props.closeLightBox}
        />
      :
      <>
      <SlideNavTop
        index={index}
        slideCount={slideCount}
        handlePrevious={handlePrevious}
        handleNext={handleNext} />

      <ImageContainer
        node={node}
        handleImageClick={props.openLightBox} />
      </>
     }
    </>
  )
}

export default SlideShow
