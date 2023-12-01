import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Logo from "../asserts/imgs/logo.png";
import profile from "../asserts/imgs/profile.png";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CasesIcon from "@mui/icons-material/Cases";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ReportIcon from "@mui/icons-material/Report";
import LogoutIcon from "@mui/icons-material/Logout";
const drawerWidth = 240;

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
}

const tabs = [
  { text: "Panel", icon: <InboxIcon />, path: "/dashboard" },
  {
    text: "Products",
    icon: <ProductionQuantityLimitsIcon />,
    path: "/products",
  },
  { text: "Options", icon: <ArticleIcon />, path: "/option" },
  { text: "Category", icon: <CategoryIcon />, path: "/category" },
  { text: "Section", icon: <BorderAllIcon />, path: "/section" },
  { text: "Cases", icon: <CasesIcon />, path: "/cases" },
  { text: "Users", icon: <RecentActorsIcon />, path: "/users" },
  {
    text: "Reports",
    icon: <ReportIcon />,
    path: "/reports",
    dropdownItems: [
      { text: "Product", path: "/report-product" },
      { text: "Categroy", path: "/report-category" },
      { text: "Order type", path: "/report-order-type" },
      { text: "Payment type", path: "/report-payment" },
      { text: "Worker", path: "/report-worker" },
      { text: "Cases", path: "/report-cases" },
    ],
  },
  {
    text: "Integration",
    icon: <ReportIcon />,
    path: "/integration",
    dropdownItems: [
      { text: "Match Product", path: "/match-product" },
      { text: "Match Option", path: "/match-option" },
      { text: "Hugin Integration", path: "/hugin-integration" },
  ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, setMobileOpen }) => {

  const [isReportsDropdownOpen, setIsReportsDropdownOpen] = useState(false);
  const [isIntegrationDropdownOpen, setIsIntegrationDropdownOpen] = useState(false);
  const [isNewTabOpen, setIsNewTabOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleReportsDropdown = () => {
    setIsReportsDropdownOpen(!isReportsDropdownOpen);
  };

  const closeReportsDropdown = () => {
    setIsReportsDropdownOpen(false);
  };

  const toggleIntegrationDropdown = () => {
    setIsIntegrationDropdownOpen(!isIntegrationDropdownOpen);
  };

  const closeIntegrationDropdown = () => {
    setIsIntegrationDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const location = useLocation();

  const drawer = (
    <div>
      <div className="logo_cont">
        <div className="logo-header">
          <img src={Logo} alt="" className="logo_img" />
          <img src={profile} alt="" className="profile_img" />

          <h6 className="email_adress">digigarsontest@gmail.com</h6>
        </div>
      </div>
      <Divider />

      <List>
        {tabs.map((tab) => (
          <div key={tab.text}>
            {tab.dropdownItems ? (
              <div
                className={`dropdown ${
                  tab.path === "/newtab" && isDropdownOpen ? "open" : ""
                }`}
              >
                <ListItem disablePadding>
                  <ListItemButton
                   onClick={() => {
                    if (tab.path === '/reports') {
                      toggleReportsDropdown();
                      closeIntegrationDropdown();
                    } else if (tab.path === '/integration') {
                      toggleIntegrationDropdown();
                      closeReportsDropdown();
                    }
                  }}
                    sx={{
                      backgroundColor:
                        location.pathname === tab.path
                          ? "#e3192780"
                          : "transparent",
                      borderRadius: "15px",
                      color:
                        location.pathname === tab.path ? "white" : "#1E1E1E",
                      "&:hover": {
                        backgroundColor:
                          location.pathname === tab.path
                            ? "#e3192780"
                            : "transparent",
                      },
                    }}
                    className={`tabBtnList ${
                      tab.path === "/newtab" && isDropdownOpen ? "open" : ""
                    }`}
                  >
                    <ListItemText primary={<span>{tab.text}</span>} />
                    <ListItemIcon className="iconsTabs">
                      {tab.icon}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                {tab.path === '/reports' && isReportsDropdownOpen && (
                  <ul className={`dropdown ${tab.path === '/reports' && isReportsDropdownOpen ? 'open' : ''}`}>
            {tab.dropdownItems.map((item) => (
                      <Link
                        to={item.path}
                        key={item.text}
                        style={{
                          textDecoration: "none",
                          color:
                            location.pathname === item.path ? "white" : "black",
                          backgroundColor:
                            location.pathname === item.path
                              ? "#ff6e6e"
                              : "White",
                        }}
                        className="tabBtnList"
                        onClick={() => {
                          setMobileOpen(false);
                        }}
                      >
                        <li>{item.text}</li>
                      </Link>
                    ))}
                  </ul>
                )}



{tab.path === '/integration' && isIntegrationDropdownOpen && (
                  <ul className={`dropdown ${tab.path === '/integration' && isIntegrationDropdownOpen ? 'open' : ''}`}>
            {tab.dropdownItems.map((item) => (
   <Link
   to={item.path}
   key={item.text}
   style={{
     textDecoration: "none",
     color:
       location.pathname === item.path ? "white" : "black",
     backgroundColor:
       location.pathname === item.path
         ? "#ff6e6e"
         : "White",
   }}
   className="tabBtnList"
   onClick={() => {
     setMobileOpen(false);
   }}
 >
   <li>{item.text}</li>
 </Link>            ))}
          </ul>
        )}
              </div>
            ) : (
              // ...
              <Link
                to={tab.path}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    sx={
                      location.pathname === tab.path
                        ? {
                            backgroundColor: "#e3192780",
                            borderRadius: "15px",
                            color: "white",
                          }
                        : {
                            borderRadius: "15px",
                            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                            backgroundColor: "white",
                          }
                    }
                    className={`tabBtnList ${
                      tab.path === "/newtab" &&
                      (isNewTabOpen || location.pathname.startsWith("/report"))
                        ? "open"
                        : ""
                    }`}
                  >
                    <ListItemText
                      primary={
                        <span
                          style={{
                            color:
                              location.pathname === tab.path
                                ? "white"
                                : "#1E1E1E",
                          }}
                        >
                          {tab.text}
                        </span>
                      }
                    />
                    <ListItemIcon
                      className="iconsTabs"
                      sx={
                        location.pathname === tab.path
                          ? { color: "white" }
                          : { color: "#757575" }
                      }
                    >
                      {tab.icon}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Link>
              // ...
            )}
          </div>
        ))}
      </List>

      <button className="logout_btn">
        Logout
        <span className="svg_cont">
          {/* ... Logout SVG icon ... */}
          <LogoutIcon />
        </span>
      </button>
    </div>
  );

  return (
    <>
      <Drawer
        container={undefined}
        variant="temporary"
        open={mobileOpen}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
