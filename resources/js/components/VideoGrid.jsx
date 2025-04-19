import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  {
    id: 1,
    title: 'React Basics Tutorial',
    channel: 'CodeLab',
    thumbnail: 'https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg'
  },
  {
    id: 2,
    title: 'Learn Laravel with Projects',
    channel: 'LaravelPro',
    thumbnail: 'https://i.ytimg.com/vi/ImtZ5yENzgE/hqdefault.jpg'
  },
  {
    id: 3,
    title: 'Build YouTube Clone with React',
    channel: 'FrontendFun',
    thumbnail: 'https://i.ytimg.com/vi/UjHTNRXDfKk/hqdefault.jpg'
  }
];

function VideoGrid() {
  return (
    <div style={gridStyle}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          channel={video.channel}
          thumbnail={video.thumbnail}
        />
      ))}
    </div>
  );
}

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh'
};

export default VideoGrid;
