import { useState } from "react";
/**
 * this is just continuation from lesson 31 onwards more practice for conditional rendering
 */

const Lesson34prac = () => {
  /**
   * challenge: display the <h1> if  there are unread messages//done
   * challenge: if there are 0 unread messages, display <p>. logic will be opposite of <h1>//done
   * challenge:
   * - If there are no unread messages, display "You're all caught up!"
   * - If there's exactly 1 unread message, it should read "You have 
   *   1 unread message" (singular)
   * - If there are > 1 unread messages, display "You have <n> unread
   *   messages" (plural)
   */
  const [unreadMessages, setUnreadMessages] = useState([])

  return (
    <div>
      {unreadMessages.length === 0 
        ? <p>You're all caught up</p>
        : <p>You have {unreadMessages.length} {unreadMessages.length === 1 ? " unread message" : " unread messages"}</p>
      }
      
    </div>
  )

  /**
   * {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
      {unreadMessages.length === 0 && <p>You have no unread messages</p>}
      from first two challenges
   */
}

export default Lesson34prac;