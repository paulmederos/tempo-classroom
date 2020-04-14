import React from 'react'
import './PlayerNotes.css'

interface Props {
  courseTitle: string,
  classTitle: string,
  noteText: string | null,
  noteTime: string | null
}

let PlayerNotes = (props: Props) => {
  return (
    <div className="PlayerNotes">
      <p>
        <b>{props.courseTitle}</b><br />
        {props.classTitle}
      </p>
      { props.noteText  &&
        <p>
          <u>Teacher note at { props.noteTime }</u>:&nbsp;
          { props.noteText }
        </p>
      }
    </div>
  )
}

export default PlayerNotes
