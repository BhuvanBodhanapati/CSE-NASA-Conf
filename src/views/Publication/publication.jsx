import React from 'react'
import PageTitle from "../../components/pageTitle/pageTitle";
import PublicationBody from './publicationBody'
import './publication.css'

const Publication = () => {
  return (
    <div className="publicationDiv">
      <PageTitle label="Publication" />
      <PublicationBody/>
    </div>
  );
}

export default Publication