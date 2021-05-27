import React, { useCallback, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import { FiZoomIn } from "@react-icons/all-files/fi/FiZoomIn";
import "react-medium-image-zoom/dist/styles.css";
import * as styles from "./ProjectImage.module.scss"

const ProjectImage = ({ url, alt }) => {
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
        <GatsbyImage onLoad={() => {setLoaded()}} className={`${loaded ?  null : styles.blurred}`} image={url} alt={alt} />
      </ControlledZoom>
      <button className="zoomButton" onClick={handleImgLoad}>
        <FiZoomIn />
      </button>
    </div>
  );
};

export default ProjectImage;
