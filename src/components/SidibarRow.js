import React from 'react';

const SidibarRow = ({selected,title,Icon}) => {
    return (
        <div className={`SidebarRow ${selected && 'selected'}`}>
            <Icon className="sidebar_icon"/>
            <h2 className="sidebar_title">{title}</h2>
        </div>
    );
};

export default SidibarRow;