import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CommiteChair = (props) => {
    return (
      <div>
        <Accordion
          className="accordionDiv"
          defaultExpanded={props.defaultExpanded}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="committeeTitle">{props.label}</Typography>
          </AccordionSummary>

          <AccordionDetails className="accordionBody">
            {props.list.map((name, index) => (
              <Typography key={index} className="committeeMember">
                <ArrowRightAltIcon />
                {name}
              </Typography>
            ))}
          </AccordionDetails>
          
        </Accordion>
      </div>
    );
}
 
export default CommiteChair;