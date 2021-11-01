import React from "react";
import styled from "styled-components";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Badge, IconButton } from "@material-ui/core";
import { Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

const TopBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1020;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const TopbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0px 20px;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 30px;

  cursor: pointer;
  a {
    color: darkblue;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TopbarIcons = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    height: 40px;
    border-radius: 50%;
    width: 40px;
    object-fit: cover;
  }
`;

const Topbar = () => {
  return (
    <TopBar>
      <TopbarWrapper>
        <div>
          <Logo>
            <Link to="/" exact>
              Saif dashboard
            </Link>
          </Logo>
        </div>
        <div>
          <TopbarIcons>
            <div>
              <IconButton>
                <Badge badgeContent={3} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
            </div>
            <div>
              <IconButton>
                <Settings />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <Language />
              </IconButton>
            </div>
            <div style={{ paddingLeft: "5px" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU"
                alt="avatar"
              />
            </div>
          </TopbarIcons>
        </div>
      </TopbarWrapper>
    </TopBar>
  );
};

export default Topbar;
