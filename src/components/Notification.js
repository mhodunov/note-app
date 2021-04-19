import React from "react";

const Notification = ({message}) => {
  
  if (!message) return null;
  
  return (
  <div className={`alert alert-${message.type || 'warning'} alert-dismissible fade show`}>
  <p>{message.text}</p>
  <button type="button" className="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}

export default Notification;