import React, { useRef, useEffect } from "react";
import "plyr-react/dist/plyr.css";

const VideoProject = ({ data }) => {

  const { title, project_tag, video } = data;

  const tags = project_tag.map((item, index) => {
    return (
      <li key={index}>
        <p>{item.tag}</p>
      </li>
    );
  });

  const videoTarget = useRef(null);
  let plyrPlayer = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const Plyr = require("plyr");
      plyrPlayer = new Plyr(videoTarget.current, {
        // controls: ['play-large', 'play', 'progress', 'mute', 'fullscreen'],
        resetOnEnd: true,
        hideControls: true,
      });
    }

    return () => {
      if (plyrPlayer.current !== null){
        plyrPlayer.destroy();
        plyrPlayer = null;
      }  
    }
  }, []);

  return (
    <div className="videoProject">
      {/* <h1>Video Project</h1> */}

      <div className="videoProjectImage">
        {/* <ReactPlayer playsinline={true}  light={true} url={video} /> */}
        <div
          ref={videoTarget}
          data-plyr-provider="vimeo"
          data-plyr-embed-id={video}
        ></div>
      </div>

      <div className="projectInfo">
        <h3>{title}</h3>
        <ul>{tags}</ul>
      </div>
    </div>
  );
};

export default VideoProject;
