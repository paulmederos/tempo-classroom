import React from 'react';
import ReactPlayer from 'react-player'
import './Player.css';

interface Props {}

interface State {
  currentNoteText: string | null;
  currentNoteTime: string | null;
};

interface PlayerProgress {
  playedSeconds: number;
};

interface Note {
  time: string;
  text: string;
};

class Player extends React.Component<Props, State> {
  notes: Note[] = [
    { time: "0:00", text: "The digital universe will grow from 3.2 zettabytes to 40 zettabytes in only six years." },
    { time: "0:10", text:  "Every day, we create 2.5 quintillion bytes of data — so much that 90% of the data in the world today has been created in the last two years alone." },
    { time: "0:45", text:  "The volume of data created by U.S. companies alone each year is enough to fill ten thousand Libraries of Congress." },
    { time: "1:45", text:  "Facebook puts up over 10 million photographs every hour and around 3 billion ‘like’ buttons are pushed everyday" },
    { time: "2:00", text:  "48 hours of video are uploaded to YouTube every minute" },
    { time: "2:35", text:  "By 2015, 4.4 million IT jobs globally will be created to support big data, generating 1.9 million IT jobs in the United States." }
  ]

  state: State = { currentNoteText: null, currentNoteTime: null };
  player: any;
  noteTimeout: number = 5000; // 5 seconds

  constructor(props: any) {
    super(props);
    this.player = React.createRef();
    this.handleVideoPlaying = this.handleVideoPlaying.bind(this)
  }

  handleVideoPlaying(progress: PlayerProgress){
    if (progress.playedSeconds) {
      let secondsPlayed = progress.playedSeconds
      let formattedTime = new Date(progress.playedSeconds * 1000).toISOString().substr(15, 4)
      let note = this.notes.filter(item => item.time.includes(formattedTime))[0]

      if (note) {
        this.setState({
          currentNoteText: note.text,
          currentNoteTime: note.time
        }, ()=> {
          setTimeout(() => {
            this.setState({ currentNoteText: null, currentNoteTime: null })
          }, this.noteTimeout);
        });
      }
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
          width="100%"
        />

        <div className="Notes">
          <p>
            <b>Data Analysis</b><br />
            Class 2: Lorem Ipsum
          </p>
          { this.state.currentNoteText  &&
            <p>
              <b>Teacher note at { this.state.currentNoteTime }:</b>&nbsp;
              { this.state.currentNoteText }
            </p>
          }
        </div>
      </div>
    );
  }

}

export default Player;
