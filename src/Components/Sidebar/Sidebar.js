import React from "react";
import "../../Styles/Sidebar/Sidebar.css";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DehazeIcon from '@material-ui/icons/Dehaze';
import EmojiIcon  from '@material-ui/icons/SentimentSatisfiedOutlined';
import CachedIcon from '@material-ui/icons/Cached';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ExploreIcon from '@material-ui/icons/Explore';
import PollIcon from '@material-ui/icons/Poll';
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar__icon blue"> <DehazeIcon /> </div>
      <div className="sidebar__icon"> <HomeOutlinedIcon /> </div>
      <div className="sidebar__icon"> <AcUnitIcon/> </div>
      <div className="sidebar__icon"> <CachedIcon/> </div>
      <div className="sidebar__icon"> <ExploreIcon/> </div>
      <div className="sidebar__icon"> <PollIcon/> </div>
      <div className="sidebar__icon"> <EmojiIcon/> </div>
    </div>
  );
}

export default Sidebar;
