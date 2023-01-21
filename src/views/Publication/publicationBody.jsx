import React from 'react'
import logo from "../../assets/mitsLogo.jpeg";

const PublicationBody = () => {
  return (
    <div className="publicationBody">
      <div>
        <img src={logo} alt="mitsLogo" className="publicationlogo"></img>
      </div>
      <div>
        <b>Conference ISBN: </b>
        <label>4984-34545-452</label>
      </div>
      <div>
        The proceedings of the conference will be submitted to Xplore and CSDL
        for possible publication.
      </div>
      <div>
        <a href={"https://www.computer.org/conferences/cps"} target="_blank">
          <span>https://www.computer.org/conferences/cps</span>
        </a>
      </div>
      <div>
        There can be no guarantee of indexing. The IEEE does not guarantee that
        any particular abstract or index entry will be included in Ei Compendex
        or any other indexing service. IEEE makes its best efforts to ensure
        indexing, but the indexing services are independent organizations not
        subject to IEEE control.
      </div>
      <div>
        <p>Indexing</p>
        Content will be submitted to the indexing companies for possible
        indexing. Indexing services are independent organizations, and CPS
        cannot guarantee that any particular abstract or index entry will be
        included in Ei Compendex or any other indexing service.
      </div>
      <div>
        <p>CPS indexing</p>
        Upon acceptance to IEEE Xplore, content will be made available to the
        appropriate indexing partners. Please see this
        <a
          target="_blank"
          href={
            "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/ieee_indexing_agreements.pdf"
          }
        >
          <span>
            {" "}
            PDF overview of abstract, indexing, and web discovery services{" "}
          </span>
        </a>
        for more information.
      </div>
      <div>
        <p>Elsevier’s Ei Compendex</p>
        Upon acceptance, an abstract and index entry for your submission will be
        included in Elsevier’s Ei Compendex database if your submission is
        available in full-text PDF format and your submission includes an
        author-submitted abstract. If your submission is available in full-text
        PDF but does not include an abstract, only bibliographic information
        will be included in Ei Compendex.
      </div>
    </div>
  );
}

export default PublicationBody;