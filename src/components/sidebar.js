import React from "react"

import { Link } from "gatsby"

const SideBar = () => (
  <aside className="sidebar">
    <ul style={{
      marginLeft: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <li><Link to="/bridge-blvd/">Bridge-Blvd (App)</Link></li>
      <li><Link to="/recent-paintings/">Recent Paintings</Link></li>
      <li><Link to="/past-paintings/">Past Paintings</Link></li>
      <li><Link to="/not-photography/">Not Photograpy</Link></li>
      <li><Link to="/statement/">Statement</Link></li>
      <li><Link to="/resources/">Resources</Link></li>
    </ul>
  </aside>
);

export default SideBar;
