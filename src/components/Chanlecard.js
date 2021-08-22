import React from 'react';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import CheckIcon from '@material-ui/icons/Check';



const Chanlecard = ({thumnil,ChanleName,subscribe,view,des1,des2,des3,des4,des5,subscriber}) => {

const Subscribe=()=>{

    document.querySelector(".btn").classList.add("active_btn");
    document.querySelector(".subscribe_notification").classList.add("d-show");
    
}

const doubleClickHandler=()=>{
    alert("Are You sure Unsubscribe.")
    document.querySelector(".btn").classList.remove('active_btn')
    document.querySelector(".subscribe_notification").classList.remove("d-show"); 
}

    return (
        <div className='chanle_card'>
          <div className="chanle_img">
          <img src={thumnil}/>
          </div>
           <div className="chanleCard_info">
               <h3>{ChanleName} <CheckIcon className="chekicon" /></h3>
               <p>{subscribe} . {view}</p>
               <div className="description">
                   <span>{des1}</span>
                   <span>{des2}<b></b></span>
                   <span>{des3}</span>
                   <span>{des4}</span><br />
                   <span>{des5}</span>
               </div>
               <div className="subscribe">
                   <button onClick={Subscribe} onDoubleClick={doubleClickHandler} className={`btn ${Subscribe && 'active_btn'}`}>{subscriber}</button>
                   <NotificationsActiveIcon className={`subscribe_notification ${Subscribe && 'd-show'}`}/>
               </div>
           </div>
        </div>
    );
};

export default Chanlecard;