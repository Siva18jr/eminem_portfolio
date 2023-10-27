import React from "react";
import classes from '../main.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faGear, faBriefcase, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    return (
        <div className={classes.NavContainer}>
            <h2 className={classes.NavHead}>Logo</h2>
            <br></br>
            <h4 className={classes.NavHeadings}><FontAwesomeIcon icon={faHouse} style={{ color: "#fbfcfe", }} />&nbsp;&nbsp; Home</h4>
            <h4 className={classes.NavHeadings}><FontAwesomeIcon icon={faUser} style={{ color: "#fbfcfe", }} />&nbsp;&nbsp; About</h4>
            <h4 className={classes.NavHeadings}><FontAwesomeIcon icon={faGear} style={{ color: "#fbfcfe", }} />&nbsp;&nbsp; Service</h4>
            <h4 className={classes.NavHeadings}><FontAwesomeIcon icon={faBriefcase} style={{ color: "#fbfcfe", }} />&nbsp;&nbsp; Portfolio</h4>
            <h4 className={classes.NavHeadings}><FontAwesomeIcon icon={faNewspaper} style={{ color: "#fbfcfe", }} />&nbsp;&nbsp; News</h4>
            <h4 className={classes.NavHeadings}><FontAwesomeIcon icon={faPhone} style={{ color: "#fbfcfe", }} />&nbsp;&nbsp; Contact</h4>
        </div>
    );

}

export default NavBar;