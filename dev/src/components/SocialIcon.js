import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Title from "./Title";
import PropTypes from "prop-types";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { HiMailOpen } from "@react-icons/all-files/hi/HiMailOpen";
import { FaBehanceSquare } from "@react-icons/all-files/fa/FaBehanceSquare";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { BiLinkAlt } from "@react-icons/all-files/bi/BiLinkAlt";

const SocialIcon = ({ type, link }) => {
  const socialSvg = () => {
    let svg;
    switch (type) {
      case "facebook":
        svg = <FaFacebookSquare />;
        break;

      case "instagram":
        svg = <FaInstagramSquare />;
        break;

      case "behance":
        svg = <FaBehanceSquare />;
        break;

      case "linkedin":
        svg = <SiLinkedin />;
        break;

      case "email":
        svg = <HiMailOpen />;
        break;

      default:
        svg = <BiLinkAlt />;
    }
    return svg;
  };

  return (
    <a href={"https://" + link} target="_blank" rel="noopener noreferrer">
      {socialSvg()}
    </a>
  );
};

export default SocialIcon;
