import React from 'react';
import './styles.scss'

const footer = () => {
  const currentDate= new Date();
  const currentYear = currentDate.getFullYear();
  
  return (
    <div className="footer-component__main-container">
      &copy; {currentYear} NYT
    </div>
  )
}

export default footer