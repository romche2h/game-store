import React from 'react';

function BackgroundVideo({ sources, className }) {
  return (
    <video className={className} autoPlay muted loop>
      {sources.map((src, index) => (
        <source key={index} src={src} />
      ))}
    </video>
  );
}

export default BackgroundVideo;
