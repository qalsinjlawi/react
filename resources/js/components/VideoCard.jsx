import React from 'react';

function VideoCard({ title, channel, thumbnail }) {
  return (
    <div style={cardStyle}>
      <img src={thumbnail} alt={title} style={imageStyle} />
      <div>
        <h4 style={titleStyle}>{title}</h4>
        <p style={channelStyle}>{channel}</p>
      </div>
    </div>
  );
}

const cardStyle = {
  width: '280px',
  margin: '10px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  fontFamily: 'Arial',
  backgroundColor: '#fff'
};

const imageStyle = {
  width: '100%',
  height: '160px',
  objectFit: 'cover'
};

const titleStyle = {
  margin: '10px',
  fontSize: '16px',
  fontWeight: 'bold'
};

const channelStyle = {
  margin: '0 10px 10px',
  fontSize: '14px',
  color: '#555'
};

export default VideoCard;
