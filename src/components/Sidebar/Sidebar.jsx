import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets"; // Make sure you have this import properly
import './Sidebar.css';
import { Context } from "../../context/Context";

function Sidebar() {
  // Use the extended state to toggle visibility
  const [extended, setExtended] = useState(false);

  const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context);

  const loadPrompt=async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  // Toggle the state for expanding/collapsing the sidebar
    //   const toggleSidebar = () => setExtended((prev) => !prev);

  return (
    <>
      <div className="sidebar">

        <div className="top">
          {/* Menu Icon */}
          <img
            className="menu"
            src={assets.menu_icon}
            alt="Menu Icon"
            onClick={()=>setExtended((prev) => !prev)} // Toggling sidebar visibility
          />

          {/* New Chat */}
          <div onClick={()=>newChat()} className="new-chat">
            <img className="plus" src={assets.plus_icon} alt="Plus Icon" />
            {extended && <p>New chat</p>}
          </div>

          {/* Conditionally render the Recent Chats section */}
          {extended && (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item,index)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img className="message" src={assets.message_icon} alt="Message Icon" />
                  <p>{item.slice(0,18)}...</p>
                </div>
                )
              })}
             
              {/* Add more recent entries here as needed */}
            </div>
          )}

        </div>

        {/* Bottom Section (Help, Activity, Settings) */}
        <div className="bottom">
          {/* Help Item */}
          <div className="bottom-item recent-entry">
            <img className="question" src={assets.question_icon} alt="Help Icon" />
           {extended?  <p>Help</p>:null}
          </div>

          {/* Activity Item */}
          <div className="bottom-item recent-entry">
            <img className="history" src={assets.history_icon} alt="History Icon" />
            {extended? <p>Activity</p> :null}
          </div>

          {/* Settings Item */}
          <div className="bottom-item recent-entry">
            <img className="settings" src={assets.setting_icon} alt="Settings Icon" />
            {extended ? <p>Settings</p>:null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
