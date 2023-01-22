import React from 'react'
import PageTitle from "../../components/pageTitle/pageTitle";
import './publication.css'

const Publication = () => {
  return (
    <div className="publicationDiv">
      <PageTitle label="Publication" />
      <div className='note'>
        <p>All participants willl be provided with the soft copy of proceedings of the conference and hard copy of the certificate.</p>
        <br />   
        <p>The list of possible journals for further publication : </p>
      </div>
    </div>
  );
}

export default Publication