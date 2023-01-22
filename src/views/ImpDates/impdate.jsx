import React from 'react'
import PageTitle from "../../components/pageTitle/pageTitle";
import './impDates.css'

const ImpDates = [
  {
    name: "Paper Submission",
    date: " 15.03.23",
  },
  {
    name: "Paper Review Result",
    date: " 31.03.23",
  },
  {
    name: "Registration ",
    date: " 10.04.23",
  },
  {
    name: "Camera Ready Paper Submission",
    date: " 10.04.23",
  },
];

const ImpdatePage = () => {
  return (
    <div className='impDatesPage'>
      <PageTitle label="Important Dates" />
      <div  className='impDates'>
        <table className='datesTable'>
          <tr>
            <th>Procedures</th>
            <th>Deadline</th>
          </tr>
          {ImpDates.map((ImpDates, index) => (
            <tr key={index} className="impDatesList">
              <td>{ImpDates.name}</td>
              <td> {ImpDates.date}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default ImpdatePage
