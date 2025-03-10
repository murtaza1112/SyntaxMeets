import React from "react";
import localclasses from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import GithubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GroupIcon from "@material-ui/icons/Group";
import { Redirect } from "react-router-dom";
import logo from "./navlogo.png";
export default function Footer() {
  const viewAboutUs = () => {
    return <Redirect to="/about" />;
  };
  return (
    <div>
      <div className={localclasses.footer}>
        <Row className={localclasses.footer_content}>
          <Col md="8">
            <img src={logo} style={{ width: "100px", height: "100px" }} />
            <p>
              <span
                style={{
                  color: "#F3F7F7",
                  fontWeight: "700",
                  fontSize: "2.5em",
                }}
              >
                Syntax
              </span>
              <span
                style={{
                  color: "#FFD500",
                  fontWeight: "700",
                  fontSize: "2.5em",
                }}
              >
                Meets
              </span>
            </p>
            SyntaxMeets is a real-time, collaborative coding platform to group
            with other members and code. A user can create/join a room. A code
            editor with 19 language support and 10+ themes, code compiler,
            Drawing pad to design algorithm, Chat Box to discuss and code.
          </Col>

          <Col md="4" style={{ marginTop: "90px" }}>
            <div className="text-center">
              <a
                href="https://www.producthunt.com/posts/syntaxmeets?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-syntaxmeets"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=276565&theme=light"
                  alt="SyntaxMeets - Create rooms, call friends and code together simultaneously | Product Hunt"
                  style={{ width: "220px", height: "50px" }}
                />
              </a>
            </div>
            <div className="text-center">
              <br />
            </div>

            <div className="text-center">
              <a
                href="/about"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={viewAboutUs}
                  type="button"
                  variant="contained"
                  color="secondary"
                  style={{
                    width: "150px",
                    fontWeight: "600",
                    color: "#000A29",
                  }}
                >
                  About Us &nbsp;
                  <GroupIcon />
                </Button>
              </a>

              <a
                className={localclasses.iconGit}
                href="https://github.com/kothariji/SyntaxMeets"
                target="_blank"
              >
                <GithubIcon
                  className={localclasses.iconGit}
                  alt="github"
                  style={{ width: "65px", height: "37px", color: "white" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>

      <div className={localclasses.base}>
        <p className="text-center">
          Made with
          <FavoriteIcon style={{ color: "#FFD500" }} /> by &nbsp;
          <a
            href="https://github.com/kothariji/SyntaxMeets"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <span className={localclasses.bgblock}>
              <span style={{ color: "white", fontWeight: "600" }}>
                &nbsp; Syntax
              </span>
              <span style={{ color: "#FFD500", fontWeight: "600" }}>
                Meets &nbsp;
              </span>
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
