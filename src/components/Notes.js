import React from "react";

const Notes = ({notes}) => {
  return (
<ul className="list-group list-group-flush">
  {notes.map(note => 
    (<li 
    className="list-group-item note"
    key={note.id}>
    <div>
    {note.text}
    <span className="badge badge-secondary">{new Date().toLocaleDateString()}</span>
    </div>
    <button type="button" className="btn btn-success btn-sm">Done</button>
    </li>
    
    ))}
</ul>
  )
}

export default Notes;