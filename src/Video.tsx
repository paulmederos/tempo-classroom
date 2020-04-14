import React from 'react';

class Video extends React.Component {
  render() {
    return (
      <video controls autoPlay={true}>
        <source src="/example-video.mp4" type="video/mp4"/>
      </video>
    );
  }
}

export default Video;
