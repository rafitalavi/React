import { useState } from "react"


export default function Player({initalName, symbol ,isActive,onChangeName}){
    const [playerName, setPlayerName] = useState(initalName);
    const [isEditing ,setIsEditing]  = useState(false)
    function handleEditClick(){
      setIsEditing ((isEditing)=>!isEditing);
     
      if(isEditing){
        onChangeName(symbol,playerName);
      }
    }
    function handleChange(event){
        setPlayerName(event.target.value)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'edit'
    if (isEditing){
        editablePlayerName = (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
            />
          );
        // btnCaption="save"
    }
    return <li className={isActive ? 'active':undefined}>
    <span className="player">
    {editablePlayerName}
    <span className="player-symbol">{symbol}</span>
    <button onClick={handleEditClick}>{isEditing ? 'save':'edit'}</button>
    </span>
    

  </li>
}