import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
  return(
    <header style={headerStyle}>
      <h1 style={{fontFamily: 'Satisfy'}}>Ashley's Todo List</h1>
      <Link  style={linkStlye} to="/">Home</Link> |  <Link style={linkStlye} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#8BD8C6',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
}

const linkStlye = {
  color: '#fff',
  textDecoration: 'none',
  fontFamily: 'sans-serif'
}

export default Header;