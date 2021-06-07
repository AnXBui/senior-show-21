import React, { useCallback, useState } from "react";
import { GatsbyImage} from "gatsby-plugin-image";
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
    <div className={`zoomableImage ${styles.image} ${loaded ? null : styles.loading}`}>
      <ControlledZoom
        isZoomed={isZoomed}
        onZoomChange={handleZoomChange}
        zoomMargin={50}
      >
        <GatsbyImage sizes={'(min-width: 768px) 40w, 90w'} critical={first ? true : false} loading={first ? 'eager' : 'lazy'} onLoad={() => {setLoaded()}} className={`${loaded ?  null : styles.blurred}`} image={url} alt={alt} />


        {isZoomed ? <img className={styles.zoomedImage} srcset={url.images.fallback.srcSet} sizes='90w' alt={alt}/> : null}
        

        

      </ControlledZoom>
      <button className={`zoomButton ${loaded ? null : styles.buttonHide}`} onClick={handleImgLoad}>
        <FiZoomIn />
      </button>
    </div>
  );
};

export default ProjectImage;
