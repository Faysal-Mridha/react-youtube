import React from 'react';
import CheckIcon from '@material-ui/icons/Check';


const SearchRow = ({thumnil,title,view,time,chanleImg,chanleName,des}) => {
    return (
        <div className="Searchrow">
            <div className='row_info'>
                <img className="Thumnil" src={thumnil} />
                <div className="row_text">
                    <h2>{title}</h2>
                    <p>{view} views . {time}</p>
                    <div className="row-information">
                    <img className="chlan-img" src={chanleImg}/>
                    <h4>{chanleName} <CheckIcon className="chekicon" /></h4></div>
                    <p>{des}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SearchRow;