import React from 'react';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const HomePageCard = () => {
  return (
    <div className="homePageCardDiv">
      <Card
        sx={{ minWidth: 275 }}
        className="homePageCard homePageCardcolorPink"
      >
        <CardContent>
          <Typography className="cardTitle">About MITS</Typography>
          <Typography>
            Madanapalle Institute of Technology & Science is established in 1998
            in the picturesque and pleasant environs of Madanapalle and is
            ideally located on a sprawling 26.17 acre campus on Madanapalle -
            Anantapur Highway (NH-205) near Angallu, about 10km away from
            Madanapalle. <br /> <br />
            MITS, originated under the auspices of Ratakonda Ranga Reddy
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
      <Card
        sx={{ minWidth: 275 }}
        className="homePageCard homePageCardcolorBule"
      >
        <CardContent>
          <Typography className="cardTitle">About Department</Typography>
          <Typography>
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
          <Typography>
            Madanapalle Institute of Technology & Science is established in 1998
            in the picturesque and pleasant environs of Madanapalle and is
            ideally located on a sprawling 26.17 acre campus on Madanapalle -
            Anantapur Highway (NH-205) near Angallu, about 10km away from
            Madanapalle. <br /> <br />
            MITS, originated under the auspices of Ratakonda Ranga Reddy
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