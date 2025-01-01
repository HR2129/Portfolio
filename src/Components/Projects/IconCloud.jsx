// src/IconCloud.js
import React, { useEffect, useRef } from 'react';
// import './IconCloud.css'; // This file will contain any custom styling you might want to add

const IconCloud = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.TagCanvas) {
      try {
        window.TagCanvas.Start('myCanvas', 'tags', {
          textColour: 'white',
          outlineColour: '#180202',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          minSpeed: 0.01,
          wheelZoom: false,
        });
      } catch (e) {
        console.log('Canvas error:', e);
      }
    }
  }, []);

  return (
    <div className="tag-cloud-container m-10">
      <canvas ref={canvasRef} id="myCanvas" width="500" height="500" ></canvas>
      <div id="tags">
        <ul >
          <li><a href="#" >HTML5</a></li>
          <li><a href="#">CSS3</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">React</a></li>
          <li><a href="#">Node.js</a></li>
          <li><a href="#">Express</a></li>
          <li><a href="#">MongoDB</a></li>
          <li><a href="#">GSAP</a></li>
        </ul>
      </div>
    </div>
  );
};

export default IconCloud;