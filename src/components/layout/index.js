import React from 'react';
import Header from './header';
import Footer from './footer';
import './styles.scss'

const layout = (props) => {
  return (
    <div className="layout-component">
      <Header />
      <div className="layout-component__children-container">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default layout