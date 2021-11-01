import {
  BarChart,
  Email,
  Launch,
  LineStyle,
  Message,
  PermIdentityOutlined,
  Timeline,
  TrendingUp,
  WorkOutline,
  Info,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Link from "react-router-dom/Link";
import ListItem from "@material-ui/core/ListItem";

const SideBar = styled.aside`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: rgba(251, 251, 255);
  position: sticky;
  top: 50px;
  left: 0;

  .sidebarWrapper {
    padding: 20px;
    color: #555;

    .sidebarMenu {
      margin-bottom: 10px;
      h3 {
        font-size: 13px;
        color: rgba(187, 186, 186);
      }

      .sidebarList {
        list-style: none;
        padding: 5px;
        a {
          color: #555;
        }
        .sidebarItems {
          cursor: pointer;
          display: flex;
          align-items: center;
          border-radius: 10px;
          padding: 5px;
          margin-bottom: 5px;
          span {
            margin-left: 5px;
          }
          &.active,
          &:hover {
            background-color: rgba(240, 240, 255);
          }
        }
      }
    }
  }
`;

const Sidebar = () => {
  return (
    <SideBar>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3>Dashboard</h3>
          <ul className="sidebarList">
            <li>
              <ListItem
                to="/"
                component={Link}
                exact
                className="sidebarItems active"
              >
                <LineStyle />
                <span to="/">Home</span>
              </ListItem>
            </li>
            <li className="sidebarItems">
              <Timeline />
              <span>Analytics</span>
            </li>
            <li className="sidebarItems">
              <TrendingUp />
              <span>Sales</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3>Quick Menu</h3>
          <ul className="sidebarList">
            <li>
              <ListItem
                exact
                to="/userlist"
                component={Link}
                className="sidebarItems"
              >
                <PermIdentityOutlined />
                <span>Users</span>
              </ListItem>
            </li>
            <li className="sidebarItems">
              <WorkOutline />
              <span>Product</span>
            </li>
            <li className="sidebarItems">
              <BarChart />
              <span>Reports</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3>Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <Email />
              <span>Mail</span>
            </li>
            <li className="sidebarItems">
              <Launch />
              <span>Feedback</span>
            </li>
            <li className="sidebarItems">
              <Message />
              <span>Messages</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3>Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <WorkOutline />
              <span>Manage</span>
            </li>
            <li className="sidebarItems">
              <Timeline />
              <span>Analytics</span>
            </li>
            <li className="sidebarItems">
              <Info />
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </SideBar>
  );
};

export default Sidebar;
