import './style.css'
import Search from './Search.js'
import ChatBox from './ChatBox.js'

function Frame(){
    return(<div className="frame">
        <Search></Search>
        <ChatBox></ChatBox>
      </div>)
    
  }

export default Frame