import React from 'react'
import './pageTitle.css'

const PageTitle = (props) => {
  return (
    <div className="pageHeader">
      <p>{props.label}</p>
    </div>
  );
}

export default PageTitle