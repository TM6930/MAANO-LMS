import React, { useState } from 'react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="video-player" className="video-player">
      <h2>Interactive Video: Math 101</h2>
      <video width="600" controls onPlay={togglePlay} onPause={togglePlay}>
        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Status: {isPlaying ? 'Playing' : 'Paused'}</p>
    </section>
  );
};

export default VideoPlayer;
