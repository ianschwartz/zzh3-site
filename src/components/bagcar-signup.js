import React from 'react';

const BagCarSignup = (props) => {
  return (
    <div>
      <form action="https://formspree.io/hankpiece@gmail.com"
            method="POST">
        <label>Name</label><br />
        <input type="text" name="name" /><br />
        <label>Email</label><br />
        <input type="email" name="_replyto" /><br />
        <input type="hidden" name="trail" value={props.trail.title}/>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default BagCarSignup;
