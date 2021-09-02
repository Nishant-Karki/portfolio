import { useState } from "react";
import { Menu } from "antd";
import Layout, { Footer, Header, Content } from "antd/lib/layout/layout";
import "../sass/nav.scss";
import useWindowsScrollPosition from "@rehooks/window-scroll-position";

function Navbar() {
  const [change, setChange] = useState(false);
  const changePosition = 755;
  const secondPosition = 1515;

  let position = useWindowsScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }
  if (position.y <= changePosition && change) {
    setChange(false);
  }

  const headerStyle = {
    // backgroundColor: change ? "whitesmoke" : "#1F1E1D",
    backgroundColor: "transparent",
    zIndex: 999,
    position: "fixed",
    width: "100%",
    transition: "0.5s ease-in-out",
    maxWidth: "85rem",
  };

  const appStyle = {
    border: "none",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    // backgroundColor: !change ? "#1F1E1D" : "whitesmoke",
    color: !change ? "whitesmoke" : "black",
    transition: "0.2s ease-in-out",
  };

  return (
    <Header style={headerStyle}>
      <Menu mode="horizontal" style={appStyle}>
        {/* <Menu.Item key="skill">Skills .</Menu.Item>
        <Menu.Item key="contact">Contact .</Menu.Item> */}
        <Menu.Item key="contact" style={{ fontSize: "16px" }}>
          Let's Talk .
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
