import React from 'react'
import "./footer.css"
const Footer = () => {
  const list = []

  for (let i = 0; i < 225; i++) {
    list.push(<div id='verticle-line'></div>)
  }
  for (let i = 0; i < 134; i++) {
    list.push(<div id='horizontal-line'></div>)
  }
  return (
    <footer>
      <div className='footer-header-css'></div>
      <div className='footer-relative'>
            {list}
          </div>
    </footer>
  )
}

export default Footer