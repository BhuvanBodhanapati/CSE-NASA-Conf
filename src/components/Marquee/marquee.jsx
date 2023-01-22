import React from 'react'
import Marquee from "react-fast-marquee";
import './marquee.css'

const Information = [
    "Department of CSE, Madanapalle Institute of Technology and Science is Organizing Two days National Conference On “Recent Advancements in Computing, Communication & Societal Applications” (NASA’23) on 19.04.2023 & 20.04.2023"
]

const MarqueeText = () => {
  return (
    <div className="marqueeDiv">
      <Marquee pauseOnHover={true} speed={40}>
        {Information.map((info, index) => (
          <div className="marqueeList">
            <p key={index}>{info}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeText;