import React,{useState} from 'react'

import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const [roomid,setRoomid] = useState('');
    const [username,setUsername] = useState('');

    const createNewRoom = (e) =>{
        e.preventDefault();
        const id = uuidV4();
        setRoomid(id);
        toast.success('Created a new Room');
    }

    const joinRoom=()=>{
        if(!roomid || !username) {
            toast.error('Room ID and Username are required');
            return;
        }
        //redirect
        navigate(`/editor/${roomid}`,{
            state:{
                username,
            }
        })
    }
  return (
    <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/logo.png"
                    alt="CollabX-logo"
                />
                <h4 className="mainLabel">Enter Invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e)=>setRoomid(e.target.value)}
                        value={roomid}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        Create a &nbsp;
                        <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                            New Room
                        </a>
                        &nbsp; here
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with ♡  by &nbsp;
                    <a href="https://github.com/IamHetPatel"><i>Het </i></a>
                </h4>
            </footer>
        </div>
  )
}
