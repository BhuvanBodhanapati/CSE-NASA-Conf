import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import mits from "../../assets/mits.jpg";
import mits2 from "../../assets/mits2.jpg";
import mits3 from "../../assets/mits3.jpg";
import mits4 from "../../assets/mits4.jpg";
import mits5 from "../../assets/mits5.jpg";

const Images = () => {
  return (
    <Carousel autoPlay={true} swipe={true} duration={50}>
      <div>
        <img className="mitsImg" src={mits}></img>
      </div>
      <div>
        <img className="mitsImg" src={mits2}></img>
      </div>
      <div>
        <img className="mitsImg" src={mits3}></img>
      </div>
      <div>
        <img className="mitsImg" src={mits4}></img>
      </div>
      <div>
        <img className="mitsImg" src={mits5}></img>
      </div>
    </Carousel>
  );
}

export default Images;