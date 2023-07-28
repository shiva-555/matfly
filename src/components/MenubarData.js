import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const MenubarData = [

   {
    Headers :"Menu"
   },
    {

        title: "Search",
        icon: <SearchIcon style={{ fontSize: '1.9rem' }}/>
        
    },

    {
        title: "Home",
        icon: <HomeIcon style={{ fontSize: '1.9rem',color:"white" }}/>,
        link:"Home"
    },

    
    {
        title:"Notification",
        icon:<NotificationsIcon style={{ fontSize: '1.9rem' }}/>,
        link:"/Notification"
    },

    {
        title: "Favorites",
        icon: <StarBorderIcon style={{ fontSize: '1.9rem' }}/>,
        link:"/Favorites"
    },
]