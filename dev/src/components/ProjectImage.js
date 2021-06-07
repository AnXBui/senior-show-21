import React, { useCallback, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import { FiZoomIn } from "@react-icons/all-files/fi/FiZoomIn";
import "react-medium-image-zoom/dist/styles.css";
import * as styles from "./ProjectImage.module.scss"

const ProjectImage = ({ url, alt, first=false }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [loaded, setLoad] = useState(false);

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true);
  }, []);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  const setLoaded = useCallback(() => {
    if (!loaded){
      setLoad(true);
    }
  })


  return (
    <div className={`zoomableImage ${styles.image}`}>
      <ControlledZoom
        isZoomed={isZoomed}
        onZoomChange={handleZoomChange}
        zoomMargin={50}
      >
        <GatsbyImage sizes={isZoomed ? '90w' : '(min-width: 768px) 40w, 90w'} critical={first} loading={first ? 'eager' : 'lazy'} onLoad={() => {setLoaded()}} className={`${loaded ?  null : styles.blurred}`} image={url} alt={alt} />

      </ControlledZoom>
      <button className={`zoomButton ${loaded ? null : styles.buttonHide}`} onClick={handleImgLoad}>
        <FiZoomIn />
      </button>
    </div>
  );
};

export default ProjectImage;
