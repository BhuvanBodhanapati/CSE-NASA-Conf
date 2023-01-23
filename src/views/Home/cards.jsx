import React from 'react';
import { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
const HomePageCard = () => {
  const [isRead, setIsRead] = useState(false);

  function changeRead() {
    setIsRead(!isRead);
  }

  const topics =[
    "Big Data",
    "Batteries",
    "Data Mining",
    "Computer Vision",
    "Cloud Computing",
    "Machine Learning",
    "Power Electronics",
    "Solar  Technology",
    "Computer Networks",
    "Unmanned Vehicles",
    "Micro Mechatronics",
    "Electrical Machines",
    "Electrical Vehicles",
    "Intelligent Control",
    "Advanced Manufacturing",
    "Mathematical Modelling",
    "IoT and sensor networks",
    "Artificial Intelligence",    
    "Robotics and automation",
    "Wireless Sensor Networks",
    "Renewable Energy Systems",
    "Mechatronics Engineering",
    "High Voltage Engineering",
    "Telecommunication Systems",
    "Fiber-optic Communication",
    "Blockchain and Informatics",
    "Digital Communication Systems",
    "Mechatronics in Energy Systems",
    "Engineering applications supporting SDGs",
    "Signal Modelling for Audio-Visual Communication",
    "Fault Detection and Diagnosis in Mechatronics Systems",
    "Electrical Energy Generation, Transmission and Distribution",
  ]
 
  return (
    <div className="homePageCardDiv">
      <Card
        sx={{ minWidth: 275 }}
        className="homePageCard homePageCardcolorPink"
      >
        <CardContent>
          <Typography className="cardTitle">About NASA Committee</Typography>
          <Typography className='cardContent'>
            The National Conference on Recent Advancements in Computing, Communication & Societal Applications (NASA’ 23) will be organized by Madanapalle Institute of Technology & Science, Department of Computer Science & Engineering, Madanapalle, Andhra Pradesh, India during 19th to 20th, April 2023. <br/><br/>
            NASA’ 23 aims to offer a great opportunity to bring together Faculty, researchers and scholars around the globe as a great platform to deliver the latest innovative research results and the most recent developments and trends in different societal applications.
            The conference will feature talks from eminent personalities. The conference will provide an excellent forum for dissemination of original research results and innovative solutions on interdisciplinary approaches, frameworks, theories and standards used as innovation to help technology management.<br/><br/>
            The vision of NASA’ 23 is to promote foster communication among researchers and practitioners working in a wide variety in Engineering, Innovation, Technology, Management and Humanity.
            Potential number of participants gather at NASA’ 23 to present research results, share visions and ideas, obtain updates on latest technologies and expand professional and social networking. The conference will be held in Online Mode. The softcopy of the proceedings will be sent to the registered participants and hard copy of the certificates will be sent to the authors corresponding address. <br/><br/>
            
            {/* <strong>Topics of interest for submission include, but are not only limited to  </strong><br/> */}
            {/* <ul className='topics'>
              {
                topics.map( topic => {
                  return (
                    <div className='listItem'>
                      <ArrowRightRoundedIcon className='listIcon'/>
                      <li>{topic}</li><br/>
                    </div>
                  )
                })
              }
            </ul> */}
            {
              isRead 
                ? (
                    <div className=''>
                    <strong>Topics of interest for submission include, but are not only limited to  </strong>
                      <ul className='topics'>
                        {
                          topics.map( topic => {
                            return (
                              <div className='listItem'>
                                <ArrowRightRoundedIcon className='listIcon'/>
                                <li>{topic}</li><br/>
                              </div>
                            )
                          })
                        }
                      </ul>
                      <strong><a className='changeRead' onClick={changeRead}>Read less
                      <ExpandLessRoundedIcon className='readIcon' /></a></strong>
                    </div>
                  )
                : (
                    <strong>
                      <a className='changeRead' onClick={changeRead}>Read more about  topics &nbsp;
                      <ExpandMoreRoundedIcon className='readIcon' />
                      </a>
                      
                    </strong>
                  )
            }
            
            
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{ minWidth: 275 }}
        className="homePageCard homePageCardcolorBule"
      >
        <CardContent>
          <Typography className="cardTitle">About Department</Typography>
          <Typography className='cardContent'>
            The Department of Computer Science & Engineering offers 4 year
            degree, which is established in the year 1998. The course is
            flexible and has been structured to meet the evolving needs of the
            IT industry. The Department is offering M.Tech - (C.S.E) from the
            academic year 2007 - 2008. <br /> <br />
            The Department has obtained UGC-Autonomous Status in the year 2014
            and is running the Programmes successfully meeting all the
            requirements. The College Academic Council, Board of Studies of the
            department strive to provide quality education and most advanced
            curriculum and syllabus to make the students industry ready and
            excel in the contemporary business world. <br /> <br /> The B.Tech.
            Programme under Department of Computer Science & Engineering was
            Accredited by the National Board of Accreditation (NBA) of All India
            Council for Technical Education (AICTE)
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{ minWidth: 275 }}
        className="homePageCard homePageCardcolorGreen"
      >
        <CardContent>
          <Typography className="cardTitle">About MITS</Typography>
          <Typography className='cardContent'>
            Madanapalle Institute of Technology & Science is established in 1998
            in the picturesque and pleasant environs of Madanapalle and is
            ideally located on a sprawling 26.17 acre campus on Madanapalle -
            Anantapur Highway (NH-205) near Angallu, about 10km away from
            Madanapalle. <br /> <br />
            MITS originated under the auspices of Ratakonda Ranga Reddy
            Educational Academy under the proactive leadership of Late Sri. N.
            Krishna Kumar M.S. (U.S.A), the then President and Dr. N. Vijaya
            Bhaskar Choudary, Ph.D., Secretary & Correspondent of the Academy.
            MITS is governed by a progressive management that never rests on
            laurels and has been striving conscientiously to develop it as one
            of the best centers of Academic Excellence in India. The
            Institution's profile is firmly based on strategies and action plans
            that match changing demands of the nation and the students
            fraternity. MITS enjoys constant support and patronage of NRI's with
            distinguished academic traditions and vast experience in Engineering
            & Technology.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePageCard