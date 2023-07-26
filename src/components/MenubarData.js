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
        icon: <SearchIcon/>
        
    },

    {
        title: "Home",
        icon: <HomeIcon/>,
        link:"Home"
    },

    
    {
        title:"Notification",
        icon:<NotificationsIcon/>,
        link:"/Notification"
    },

    {
        title: "Favorites",
        icon: <StarBorderIcon/>,
        link:"/Favorites"
    },
]