import React from 'react';

function BackgroundVideo({ sources, className }) {
  return (
    <video className={className} autoPlay muted loop>
      {sources.map((src, index) => (
        <source src={src} key={index} />
      ))}
    </video>
  );
}

export default BackgroundVideo;
