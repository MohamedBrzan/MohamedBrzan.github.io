import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "../css/accordion.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 1)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AccordionEng() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            <b>Jahra</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <b>Mubarak Al Kabir</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            <b>Ahmadi</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            <b>Farwaniya</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            <b>Kuwait City</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            <b>Hawally</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function AccordionRtl() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="accordion-rtl"
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            <b>Jahra</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="accordion-rtl"
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <b>Mubarak Al Kabir</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="accordion-rtl"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            <b>Ahmadi</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="accordion-rtl"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            <b>Farwaniya</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className="accordion-rtl"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            <b>Kuwait City</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="accordion-rtl"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            <b>Hawally</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">abdullah al salem</li>
              <li className="p-2 border-bottom">adailiya</li>
              <li className="p-2 border-bottom">bneid al qar</li>
              <li className="p-2 border-bottom">daiya</li>
              <li className="p-2 border-bottom">dasma</li>
              <li className="p-2 border-bottom">dasman</li>
              <li className="p-2 border-bottom">doha</li>
              <li className="p-2 border-bottom">faiha</li>
              <li className="p-2 border-bottom">ghornata</li>
              <li className="p-2 border-bottom">kaifan</li>
              <li className="p-2 border-bottom">khaldiya</li>
              <li className="p-2 border-bottom">kuwait city</li>
              <li className="p-2 border-bottom">mansouriya</li>
              <li className="p-2 border-bottom">mirqab</li>
              <li className="p-2">mubarakiya camps</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
