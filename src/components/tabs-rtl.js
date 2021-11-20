import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccordionRtl from "./accordion-rtl";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/tabs-rtl.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="tabs-rtl"
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-rtl">
      {" "}
      <div className="row mb-3 mt-4">
        {" "}
        <div className="col">
          {" "}
          <h3 className="page-title text-center">وضع الطلب</h3>
        </div>{" "}
        <div className="col-1">
          <Link to="/home-rtl/menu-rtl" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-4" />
          </Link>
        </div>
      </div>
      <Box sx={{ width: "100%" }} className="min-vh-100">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="accordion-rtl"
          >
            {" "}
            <Tab label="إستلام بالسيارة" {...a11yProps(0)}  className="box"/>
            <Tab label="التوصيل" {...a11yProps(1)}  className="box"/>
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <input
            type="search"
            className="form-control search mb-3"
            placeholder="بحث"
          />
          <AccordionRtl />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p className="tab-info ">
            <b>حوالى</b>
          </p>
          <p className="text-secondary p">
            {" "}
            حولي شارع المثنى مجمع ضارعة مقابل مجمع المعلب
          </p>
        </TabPanel>
      </Box>
    </div>
  );
}
