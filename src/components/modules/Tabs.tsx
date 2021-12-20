import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ env }: any) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const domainPortal = (() => {
    switch (env) {
      case "develop":
        return "http://d.portal.jp";
      case "test":
        return "http://t.portal.jp";
      case "production":
        return "https://portal.jp";
      default:
        return "http://d.portal.jp";
    }
  })();

  const domainPartner = (() => {
    switch (env) {
      case "develop":
        return "http://d.partner.jp";
      case "test":
        return "http://t.partner.jp";
      case "production":
        return "https://partner.jp";
      default:
        return "http://d.partner.jp";
    }
  })();

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Task01" {...a11yProps(0)} />
          <Tab label="Task02" {...a11yProps(1)} />
          <Tab label="Task03" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <span className="listItem">
          <a target="_blank" rel="noreferrer" href={domainPortal + "/aaa/"}>
            {domainPortal}/aaa/
          </a>
        </span>
        <span className="listItem">
          <a target="_blank" rel="noreferrer" href={domainPortal + "/bbb/"}>
            {domainPortal}/bbb/
          </a>
        </span>
        <span className="listItem">
          <a target="_blank" rel="noreferrer" href={domainPartner + "/bbb/"}>
            {domainPartner}/aaa/
          </a>
        </span>
        <span className="listItem">
          <a target="_blank" rel="noreferrer" href={domainPartner + "/bbb/"}>
            {domainPartner}/bbb/
          </a>
        </span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span className="listItem">
          <a target="_blank" rel="noreferrer" href={domainPortal + "/aaa/"}>
            {domainPortal}/aaa/
          </a>
        </span>
        <span className="listItem">
          <a target="_blank" rel="noreferrer" href={domainPortal + "/bbb/"}>
            {domainPortal}/bbb/
          </a>
        </span>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <span className="listItem">
          <a target="_blank" rel="noreferrer" href={domainPortal + "/aaa/"}>
            {domainPortal}/aaa/
          </a>
        </span>
        <span className="listItem">
          <a target="_blank" rel="noreferrer" href={domainPortal + "/bbb/"}>
            {domainPortal}/bbb/
          </a>
        </span>
      </TabPanel>
    </Box>
  );
}
