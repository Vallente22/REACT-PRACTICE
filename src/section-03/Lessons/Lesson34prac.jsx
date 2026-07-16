import { useState } from "react";
/**
 * this is just continuation from lesson 31 onwards more practice for conditional rendering
 */

const Lesson34prac = () => {
  /**
   * challenge: display the <h1> if  there are unread messages
   */
  const [unreadMessages, setUnreadMessages] = useState(["a", "b"])

  return (
    <div>
      {unreadMessages && <h1>You have {unreadMessages.length} unread messages!</h1>}
    </div>
  )
}

export default Lesson34prac;