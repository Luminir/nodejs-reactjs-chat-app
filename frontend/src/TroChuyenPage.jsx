import React from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty";

const TroChuyen = (props) => {
    return (
        <div className="background">
          <PrettyChatWindow
            projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
            username={props.user.username}
            secret={props.user.secret}
          />
        </div>
      );
}

export default TroChuyen