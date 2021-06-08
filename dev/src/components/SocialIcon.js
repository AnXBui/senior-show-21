import React from "react";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { HiMailOpen } from "@react-icons/all-files/hi/HiMailOpen";
import { FaBehanceSquare } from "@react-icons/all-files/fa/FaBehanceSquare";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { FaDribbbleSquare } from "@react-icons/all-files/fa/FaDribbbleSquare";
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

      case "dribble":
        svg = <FaDribbbleSquare />;
        break;

      default:
        svg = <BiLinkAlt />;
    }
    return svg;
  };

  return (
    <a className={'profileSocialIcon'} href={link} target="_blank">
      {socialSvg()}
    </a>
  );
};

export default SocialIcon;
