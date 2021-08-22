import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidibarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return (
            <div className='sidebar'>
           <Link to='/'> <SidebarRow selected title="Home" Icon={HomeIcon}/></Link>
            <SidebarRow title="Trending" Icon={WhatshotIcon}/>
            <SidebarRow title="Subscription" Icon={SubscriptionsIcon}/>
            <hr/>
            <SidebarRow title="Libray" Icon={LibraryAddIcon}/>
            <SidebarRow title="History" Icon={HistoryIcon}/>
            <SidebarRow title="Your videos" Icon={OndemandVideoIcon}/>
            <SidebarRow title="Watch Later" Icon={WatchLaterIcon}/>
            <SidebarRow title="Liked videos" Icon={ThumbUpAltIcon}/>
            <SidebarRow title="Show more" Icon={ExpandMoreIcon}/>
            <hr/>
        </div>
    );
};

export default Sidebar;