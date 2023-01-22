import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import profile from "../../assets/teacherprofile.jpg";
import PageTitle from "../../components/pageTitle/pageTitle";
import Avatar from "@mui/material/Avatar";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import './contactUs.css'

const ContactUsPage = () => {
  const contacts =[
    {
      name : "",
      desg : "",
      phNo : "",
      mailId : ""
    }
  ]
  return (
    <div className="contactUsDiv">
      <PageTitle label="Contact Us" />
      <div className="contactUsCards">
        <div className='contactUsCard'>
          <CardContent className="contactUsBody">
            {/* <div>
              <Avatar
                alt="profile pic"
                src={profile}
                style={{ width: 100, height: 100 }}
              />
            </div> */}
              <Typography><strong>Dr R Nidhya</strong></Typography>
              <Typography>Professor, CSE</Typography>
              <Typography>
                Madanapalle institute of technology and Science
              </Typography>
              <Typography>Madanapalle, AP</Typography>
              <Typography>India,</Typography>
              <div className="contactUsDetailsDiv">
                <Typography className="contactUsDetails">
                  <CallIcon />
                  9894780297
                </Typography>
                <Typography className="contactUsDetails">
                  <MailIcon />
                  csecon@mits.ac.in
                </Typography>
              </div>
          </CardContent>
        </div>

        <div className='contactUsCard'>
          <CardContent className="contactUsBody">
            {/* <div>
              <Avatar
                alt="profile pic"
                src={profile}
                style={{ width: 100, height: 100 }}
              />
            </div> */}
              <Typography><strong>Dr G N Vivekananda</strong>  </Typography>
              <Typography>Associate Professor, CSE</Typography>
              <Typography>
                Madanapalle institute of technology and Science
              </Typography>
              <Typography>Madanapalle, AP</Typography>
              <Typography>India,</Typography>
              <div className="contactUsDetailsDiv">
                <Typography className="contactUsDetails">
                  <CallIcon />
                  9052307088
                </Typography>
                <Typography className="contactUsDetails">
                  <MailIcon />
                  csecon@mits.ac.in
                </Typography>
              </div>
          </CardContent>
        </div>
        {/* <Card sx={{ maxWidth: 400 }}>
          <CardContent className="contactUsBody">
            <div>
              <Avatar
                alt="profile pic"
                src={profile}
                style={{ width: 100, height: 100 }}
              />
            </div>
            <div>
              <Typography>Dr.k.Geetha,</Typography>
              <Typography>Dean Academics and Research,,</Typography>
              <Typography>
                Madanapalle institute of technology and Science,
              </Typography>
              <Typography>Madanapalle, AP,</Typography>
              <Typography>India,</Typography>
              <div className="contactUsDetailsDiv">
                <Typography className="contactUsDetails">
                  <MailIcon />
                  csecon@mits.ac.in
                </Typography>
                <Typography className="contactUsDetails">
                  <CallIcon />
                  7337280102
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}

export default ContactUsPage