import React from 'react'
import './footer.css'
import PlaceIcon from '@mui/icons-material/Place';import YouTubeIcon from "@mui/icons-material/YouTube";
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
        {/* <div className="foortItem">
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
        </div> */}
        {/* <div className="foortItem">
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
        </div> */}
        <div className="footItem1">
          <p>MITS&nbsp; College&nbsp; Address</p>
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
              "https://goo.gl/maps/gxLV6tEDSaKRSYPK9"
            }
            className="footerLink1"
          >
            <PlaceIcon   />
            <i> Find us on map</i>
          </a>
        </div>
      </div>
      <div className="footerDivider"></div>
      <div className="footerSMIDiv">
        <p>Connect MITS @</p>
        <div className="footerIcons">
          <a href="https://twitter.com/MITS_College" className="footerSMI">
            <TwitterIcon />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/mits_mpl/?hl=en"
            className="footerSMI"
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/c/MadanapalleInstituteofTechnologyScience"
            className="footerSMI"
          >
            <YouTubeIcon />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/school/madanapalle-institute-of-technology-&-science/"
            className="footerSMI"
          >
            <LinkedInIcon />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/MITSCOLLEGEMPL"
            className="footerSMI"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer