import React from 'react'
import CommiteChair from './commitechair'
import PageTitle from '../../components/pageTitle/pageTitle'
import './commite.css'

const general_chair = ["Anil kumar", "Bhuvan Kumar"];
const session_chair = ["Anil kumar", "Bhuvan Kumar"];
const programme_chair = ["Anil kumar", "Bhuvan Kumar"];

const CommitePage = () => {
  return (
    <div className="commitePageDiv">
      <PageTitle label="Committee" />
      <CommiteChair
        label="General Chair"
        list={general_chair}
      />
      <CommiteChair label="Session Chair" list={session_chair} />
      <CommiteChair label="Programme Chair" list={programme_chair} />
    </div>
  );
}

export default CommitePage