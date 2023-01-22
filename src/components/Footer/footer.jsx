import React from 'react'
import { Link } from "react-router-dom";
import './footer.css'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../assets/mitsLogo.jpeg";

const Footer = () => {
  return (
    <div className="footerBody">
      <div className="footerDiv">
        <div className="foortItem">
          <p>QUICK LINKS</p>
          <a
            target="_blank"
            href={"https://careers.mits.ac.in/positionsoffered.html"}
            className="footerLink"
          >
            <ArrowRightIcon />
            <span>Jobs</span>
          </a>
          <a
            target="_blank"
            href={"https://mits.ac.in/placement2.html"}
            className="footerLink"
          >
            <ArrowRightIcon />
            <span>Placements</span>
          </a>
          <a
            target="_blank"
            href={"https://mits.ac.in/photos-1.html"}
            className="footerLink"
          >
            <ArrowRightIcon />
            <span>Gallery</span>
          </a>
        </div>
        <div className="foortItem">
          <p>MITS</p>
          <a
            target="_blank"
            href={"https://mits.ac.in/"}
            className="footerLink"
          >
            <ArrowRightIcon />
            <span>Home</span>
          </a>
          <a
            target="_blank"
            href={"https://mits.ac.in/courses.html"}
            className="footerLink"
          >
            <ArrowRightIcon />
            <span>Courses</span>
          </a>
          <a
            target="_blank"
            href={"https://mits.ac.in/admission.html"}
            className="footerLink"
          >
            <ArrowRightIcon />
            <span>Admission</span>
          </a>
        </div>
        <div className="foortItem1">
          <p>Address</p>
          <label>
            Madanapalle Institute of Technology & Science <br />
            Post Box No: 14, Kadiri <br />
            Road Angallu (Village), Madanapalle-517325 <br />
            Chittoor District,Andhra Pradesh, India
          </label>
          <div>
            <span>Phone : </span> <label>+91-8571-280255;280706</label>
            <br />
            <span>Landline : </span> <label>08571-280433</label>
          </div>
          <a
            target="_blank"
            href={
              "https://www.google.com/maps/place/Madanapalle+institute+of+technology+and+Science/@13.6396971,78.4857839,14.44z/data=!4m5!3m4!1s0x3bb2677c83886ad7:0xad73159e2bddda33"
            }
            className="footerLink1"
          >
            <ArrowRightIcon />
            <i> Find us in map</i>
          </a>
        </div>
      </div>
      <div className="footerDivider"></div>
      <div className="foorterSMIDiv">
        <p>Connect MITS @</p>
        <div className="foorterIcons">
          <a href="https://twitter.com/MITS_College" className="foorterSMI">
            <TwitterIcon />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/mits_mpl/?hl=en"
            className="foorterSMI"
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/c/MadanapalleInstituteofTechnologyScience"
            className="foorterSMI"
          >
            <YouTubeIcon />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/school/madanapalle-institute-of-technology-&-science/"
            className="foorterSMI"
          >
            <LinkedInIcon />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/MITSCOLLEGEMPL"
            className="foorterSMI"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer