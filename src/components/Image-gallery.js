import React from "react"

import SlideShow from "./slide-show"

export const getImageGallery = (allFile, isLightBoxVisible, setLightboxVisible) => (
  <ImageGallery
    isLightBoxVisible={isLightBoxVisible}
    setLightboxVisible={setLightboxVisible}
    allFile={allFile} />
)

const PaintingSlideShow = function PaintingSlideShow (props) {
  return (
    <SlideShow {...props} />
  )
}

const ImageGallery = function ImageGallery ({allFile, isLightBoxVisible, setLightboxVisible}) {

  const openLightBox = function openLightBox() {
    setLightboxVisible(true)
  }

  const closeLightBox = function closeLightBox() {
    setLightboxVisible(false)
  }

  return (
    <PaintingSlideShow
      isLightBoxVisible={isLightBoxVisible}
      openLightBox={openLightBox}
      closeLightBox={closeLightBox}
      allFile={allFile} />)
}

export default ImageGallery
