import React from 'react';
import './style.css';
import ImageOne from './Vijay.jpg';
import ImageTwo from './Trisha.jpg';
import ImageThree from './Surya.jpg';
import ImageFour from './Shiva.jpg';
import ImageFive from './Nithya.jpg';
import ImageSix from './Sai-Pallavi.jpg';
import StarImg from './star.png';

const chatdetails = [
    {
        profileImg: ImageOne,
        profileName: "Joseph Vijay",
        timeStamp: "11:25 pm"
    },
    {
        profileImg: ImageTwo,
        profileName: "Trisha",
        timeStamp: "11:00 am"
    },
    {
        profileImg: ImageThree,
        profileName: "Surya",
        timeStamp: "11:20 pm"
    },
    {
        profileImg: ImageFour,
        profileName: "Shiva",
        timeStamp: "09:20 pm"
    },
    {
        profileImg: ImageFive,
        profileName: "Nithya",
        timeStamp: "09:00 am"
    },
    {
        profileImg: ImageSix,
        profileName: "Saima",
        timeStamp: "05:00 am"
    }
];

function ChatBox() {
    return (
        <div>
            {chatdetails.map((item, index) => (
                <div className='chatbox' key={index}>
                    <div className='imgDiv'>
                        <img src={item.profileImg} className='imageOne' alt={item.profileName}></img>
                    </div>
                    <div className='peopleMsg'>
                        <h4 style={{ color: "black" }}>{item.profileName}</h4>
                        <p className='msg'>whats up buddy?</p>
                    </div>
                    <div className='favorites'>
                        <img src={StarImg} className='star' alt="Star"></img>
                        <h5 className='timeStamp'>{item.timeStamp}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChatBox;
