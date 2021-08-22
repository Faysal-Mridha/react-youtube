import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';

const Vediocard = ({Thumnil,title,chanleimg,chanlename,view,time,Stamp}) => {
    return (
        <div className="video_card">
            <img src={Thumnil} alt="Thumnil"/>
            <div className="card_info">
                <Avatar src={chanleimg} />
                <div className="card_text">
                <h2>{title} <CheckIcon className="chekicon" /> </h2>
                <h4>{chanlename}</h4>
                <p>{view} views <b>.</b> {time}</p>
                </div>
                
            </div>
        </div>
    );
};

export default Vediocard;