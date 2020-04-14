import React from 'react'
import ReactPlayer from 'react-player'
import PlayerNotes from './PlayerNotes'
import { notes } from '../store/stubbedData.js'
import './Player.css'

interface Props {}

interface State {
  currentNoteText: string | null
  currentNoteTime: string | null
}

class Player extends React.Component<Props, State> {
  noteTimeout: number = 5000 // 5 seconds
  player: any
  state: State = { currentNoteText: null, currentNoteTime: null }


  constructor(props: any) {
    super(props)
    this.player = React.createRef()
    this.handleVideoPlaying = this.handleVideoPlaying.bind(this)
  }

  handleVideoPlaying(progress: { playedSeconds: number } ){
    if (progress.playedSeconds) {
      let formattedTime = new Date(progress.playedSeconds * 1000).toISOString().substr(15, 4)
      let note = notes.filter(item => item.time.includes(formattedTime))[0]

      if (note) {
        this.setState({
          currentNoteText: note.text,
          currentNoteTime: note.time
        }, ()=> {
          setTimeout(() => {
            this.setState({ currentNoteText: null, currentNoteTime: null })
          }, this.noteTimeout)
        })
      }
    }
  }

  render() {
    return (
      <div className="Player">
        <div className="Player__video-container">
          <ReactPlayer
            url="/example-video.mp4"
            controls
            autoPlay
            ref={this.player}
            onProgress={this.handleVideoPlaying}
            width="100%"
            height="100%"
          />
        </div>

        <PlayerNotes
          courseTitle={"Data Analysis"}
          classTitle={"Class 2: Lorem Ipsum"}
          noteText={this.state.currentNoteText}
          noteTime={this.state.currentNoteTime}
        />
      </div>
    )
  }

}

export default Player
