import { useState } from "react";
/**
 * this is just continuation from lesson 31 onwards more practice for conditional rendering
 */

const Lesson34prac = () => {
  /**
   * challenge: display the <h1> if  there are unread messages//done
   * challenge: if there are 0 unread messages, display <p>. logic will be opposite of <h1>//done
   */
  const [unreadMessages, setUnreadMessages] = useState([])

  return (
    <div>
      {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
      {unreadMessages.length === 0 && <p>You have no unread messages</p>}
    </div>
  )
}

export default Lesson34prac;