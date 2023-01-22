import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import './registration.css'

const RegistrationPage = () => {
  return (
    <div className="registrationPage">
      <PageTitle label="Registration Guidelines" />
      <div className="note">
        <p>Anyone of the authors of the accepted paper should be registered to the conference.</p> <br/><br/>
        <p>The Conference registration fee includes virtual admission to all technical and paper presentation sessions, conference kit and e-certificate(s). The corresponding author’s email address will be used to provide authors with information about the publication.</p>
      </div>
      <h3 className="feeTitle">Registration Fee</h3>
      <table className="feeTable">
          <tr>
            <th></th>
            <th>Student/Research Scholar</th>
            <th>Faculty</th>
            <th>Industry Person</th>
          </tr>
          <tr>
            <th>Indian</th>
            <td>INR 500</td>
            <td>INR 750</td>
            <td>INR 1000</td>
          </tr>
          <tr>
            <th>Foreigner</th>
            <td>$25</td>
            <td>$25</td>
            <td>$25</td>
          </tr>
      </table>
      <h3 className="paymentTitle">Payment Details</h3>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfh8Kdzijse4TVBWsqUc81SiVJCQD6ItaK0Ez0qOCN0wpm8sg/viewform?usp=share_link">
        <div className="registerBtn">
          Register
          </div>
        </a>
      
    </div>
  );
};

export default RegistrationPage;
