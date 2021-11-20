import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "../css/accordion-rtl.css";

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

export default function AccordionRtl() {
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
          <Typography className="title">
            <b>الجاهره</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">عبدالله السالم</li>
              <li className="p-2 border-bottom">العديلية</li>
              <li className="p-2 border-bottom">بنيد القار</li>
              <li className="p-2 border-bottom">الدعية</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدوحة</li>
              <li className="p-2 border-bottom">الفيحاء</li>
              <li className="p-2 border-bottom">غرناطة</li>
              <li className="p-2 border-bottom">الكيفان</li>
              <li className="p-2 border-bottom">الخالدية</li>
              <li className="p-2 border-bottom">مدينة الكويت</li>
              <li className="p-2 border-bottom">المنصورية</li>
              <li className="p-2 border-bottom">مراقب</li>
              <li className="p-2">مخيمات المباركية</li>
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
          <Typography className="title">
            <b>مبارك الخبير</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">عبدالله السالم</li>
              <li className="p-2 border-bottom">العديلية</li>
              <li className="p-2 border-bottom">بنيد القار</li>
              <li className="p-2 border-bottom">الدعية</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدوحة</li>
              <li className="p-2 border-bottom">الفيحاء</li>
              <li className="p-2 border-bottom">غرناطة</li>
              <li className="p-2 border-bottom">الكيفان</li>
              <li className="p-2 border-bottom">الخالدية</li>
              <li className="p-2 border-bottom">مدينة الكويت</li>
              <li className="p-2 border-bottom">المنصورية</li>
              <li className="p-2 border-bottom">مراقب</li>
              <li className="p-2">مخيمات المباركية</li>
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
          <Typography className="title">
            {" "}
            <b>أحمدى</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">عبدالله السالم</li>
              <li className="p-2 border-bottom">العديلية</li>
              <li className="p-2 border-bottom">بنيد القار</li>
              <li className="p-2 border-bottom">الدعية</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدوحة</li>
              <li className="p-2 border-bottom">الفيحاء</li>
              <li className="p-2 border-bottom">غرناطة</li>
              <li className="p-2 border-bottom">الكيفان</li>
              <li className="p-2 border-bottom">الخالدية</li>
              <li className="p-2 border-bottom">مدينة الكويت</li>
              <li className="p-2 border-bottom">المنصورية</li>
              <li className="p-2 border-bottom">مراقب</li>
              <li className="p-2">مخيمات المباركية</li>
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
          <Typography className="title">
            {" "}
            <b>فرونيه</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">عبدالله السالم</li>
              <li className="p-2 border-bottom">العديلية</li>
              <li className="p-2 border-bottom">بنيد القار</li>
              <li className="p-2 border-bottom">الدعية</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدوحة</li>
              <li className="p-2 border-bottom">الفيحاء</li>
              <li className="p-2 border-bottom">غرناطة</li>
              <li className="p-2 border-bottom">الكيفان</li>
              <li className="p-2 border-bottom">الخالدية</li>
              <li className="p-2 border-bottom">مدينة الكويت</li>
              <li className="p-2 border-bottom">المنصورية</li>
              <li className="p-2 border-bottom">مراقب</li>
              <li className="p-2">مخيمات المباركية</li>
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
          <Typography className="title">
            {" "}
            <b>مدينة الكويت</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">عبدالله السالم</li>
              <li className="p-2 border-bottom">العديلية</li>
              <li className="p-2 border-bottom">بنيد القار</li>
              <li className="p-2 border-bottom">الدعية</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدوحة</li>
              <li className="p-2 border-bottom">الفيحاء</li>
              <li className="p-2 border-bottom">غرناطة</li>
              <li className="p-2 border-bottom">الكيفان</li>
              <li className="p-2 border-bottom">الخالدية</li>
              <li className="p-2 border-bottom">مدينة الكويت</li>
              <li className="p-2 border-bottom">المنصورية</li>
              <li className="p-2 border-bottom">مراقب</li>
              <li className="p-2">مخيمات المباركية</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className="accordion-rtl"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="title">
            {" "}
            <b>حوالى</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">
            <ul className="list-unstyled text-capitalize bg-white">
              <li className="p-2 border-bottom">عبدالله السالم</li>
              <li className="p-2 border-bottom">العديلية</li>
              <li className="p-2 border-bottom">بنيد القار</li>
              <li className="p-2 border-bottom">الدعية</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدسمة</li>
              <li className="p-2 border-bottom">الدوحة</li>
              <li className="p-2 border-bottom">الفيحاء</li>
              <li className="p-2 border-bottom">غرناطة</li>
              <li className="p-2 border-bottom">الكيفان</li>
              <li className="p-2 border-bottom">الخالدية</li>
              <li className="p-2 border-bottom">مدينة الكويت</li>
              <li className="p-2 border-bottom">المنصورية</li>
              <li className="p-2 border-bottom">مراقب</li>
              <li className="p-2">مخيمات المباركية</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
