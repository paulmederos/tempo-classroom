import React from 'react';
import ReactPlayer from 'react-player'

interface Props {}

interface State {
  currentTime: string;
  currentNote: string | null;
};

interface PlayerProgress {
  playedSeconds: number;
};

interface StringMap { [key: string]: string; }

class Player extends React.Component<Props, State> {
  timestamps: StringMap = {
    "0:00": "The digital universe will grow from 3.2 zettabytes to 40 zettabytes in only six years.",
    "0:10": "Every day, we create 2.5 quintillion bytes of data — so much that 90% of the data in the world today has been created in the last two years alone.",
    "0:45": "The volume of data created by U.S. companies alone each year is enough to fill ten thousand Libraries of Congress.",
    "1:45": "Facebook puts up over 10 million photographs every hour and around 3 billion ‘like’ buttons are pushed everyday",
    "2:00": "48 hours of video are uploaded to YouTube every minute",
    "2:35": "By 2015, 4.4 million IT jobs globally will be created to support big data, generating 1.9 million IT jobs in the United States."
  }

  state: State = { currentTime: "00:00", currentNote: null };
  player: any;

  constructor(props: any) {
    super(props);
    this.player = React.createRef();
    this.handleVideoPlaying = this.handleVideoPlaying.bind(this)
  }

  componentDidMount() {
    // instantiate the ref?
    let test = this.player.current
  }

  handleVideoPlaying(progress: PlayerProgress){
    if (progress.playedSeconds) {
      let secondsPlayed = progress.playedSeconds
      let formattedTime = new Date(progress.playedSeconds * 1000).toISOString().substr(15, 4);
      let note = this.timestamps[this.state.currentTime] || this.state.currentNote

      this.setState({
        currentTime: formattedTime,
        currentNote: note
      })
    }
  }

  render() {
    return (
      <div className="Player">
        <ReactPlayer
          url="/example-video.mp4"
          controls
          autoPlay
          ref={this.player}
          onProgress={this.handleVideoPlaying}
        />

        <div className="Notes">
          <h2>
            { this.state.currentNote }<br />
            Time - { this.state.currentTime }
          </h2>
        </div>
      </div>
    );
  }

}

export default Player;
