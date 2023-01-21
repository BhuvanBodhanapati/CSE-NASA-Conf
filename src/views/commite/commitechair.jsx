import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CommiteChair = (props) => {
  const bgColor = props.bgcolor;
  console.log(bgColor)
    return (
      <div>
        <Accordion
          className="accordionDiv"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{props.label}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionBody">
            {props.list.map((name, index) => (
              <Typography key={index}>{name}</Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    );
}
 
export default CommiteChair;