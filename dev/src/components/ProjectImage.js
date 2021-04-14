import React, { useCallback, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import { FiZoomIn } from "@react-icons/all-files/fi/FiZoomIn";
import "react-medium-image-zoom/dist/styles.css";

const ProjectImage = ({ url, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true);
  }, []);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <div className="zoomableImage">
      <ControlledZoom
        isZoomed={isZoomed}
        onZoomChange={handleZoomChange}
        zoomMargin={50}
      >
        <GatsbyImage image={url} alt={alt} />
      </ControlledZoom>
      <button className="zoomButton" onClick={handleImgLoad}>
        <FiZoomIn />
      </button>
    </div>
  );
};

export default ProjectImage;
