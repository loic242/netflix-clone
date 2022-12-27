
import "./NavBar.scss"
import logo from '../../assets/logo.png';
import { useState } from "react";
import { Search, Notifications, AccountBox,  ArrowDropDown } from "@material-ui/icons";

const NavBar = () => {
  /*
     we want to make a navbar black whent we scroll and a bit transparent when it is at the top
     so we are going to create a a state returnning false when the scroll are not moving and return true when it is moving
  */
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <img src={logo} alt="logo" />
                <span>Home</span>
                <span>Series</span>
                <span>Mouvie</span>
                <span>New and popular</span>
                <span>My list</span>
                <span>Explore by language</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>Kid</span>
                <Notifications className="icon"/>
                <AccountBox className="icon1"/>
                <div className="profils">
                  <ArrowDropDown className="icon1"/>
                  <div className="options">
                    <span>Settings</span>
                    <span>Log out</span>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar