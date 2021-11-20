import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "./accordion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/tabs.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
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
    <div className="order-mode">
      {" "}
      <div className="row mb-3 mt-4 ">
        {" "}
        <div className="col-1 ">
          <Link to="/" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-4" />
          </Link>
        </div>
        <div className="col">
          {" "}
          <h3 className="page-title text-center">order mode</h3>
        </div>
      </div>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Delivery" {...a11yProps(0)} className="title" />
            <Tab label="Car Pickup" {...a11yProps(1)} className="title" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <input
            type="search"
            className="form-control search mb-3"
            placeholder="search"
          />
          <Accordion />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p className="tab-info">
            <b>Hawally</b>
          </p>
          <p className="text-secondary">
            {" "}
            Hawaaly, Al Muthana Street, Darea Complex, Opposite Muhallab mall
          </p>
        </TabPanel>
      </Box>
    </div>
  );
}
