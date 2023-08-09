import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../components/context/Context";

function WelcomePage() {
const [value, setValue] = useState('')
const {updateRoomId } = useContext(MyContext);

const navigate = useNavigate();

        const handleSubmit = (e) => {
          e.preventDefault();
          if(value!==''){
            navigate("/room")
            updateRoomId(value)
          }
        }
        const onChange =(e)=>{
setValue(e.target.value)
        }
  return (
    <div class="card">
        <form onSubmit={handleSubmit}>
        <h1>Enter Room ID</h1>
        <input
      className="room-input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter text"
    />
        <button className="room-button" onSubmit={handleSubmit}
        >
      Enter Room
    </button>
        </form>
    </div>
  )
}

export default WelcomePage