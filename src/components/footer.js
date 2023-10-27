import React from "react";
import classes from '../main.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const End = () => {

    return (
        <div className={classes.EndPoint}>
            <h2 className={classes.PortfolioName}>Hello I'm Slim Shady</h2>
            <h1 className={classes.PortfolioJob}>Independent <span className={classes.PortfolioJobSpan}>Rapper</span></h1>
            <h2 className={classes.PortfolioCountry}>based in USA</h2>
            <div className={classes.SocialLink}>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} className={classes.Fb} size="2xl"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} className={classes.Insta} size="2xl"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} className={classes.Twitter} size="2xl"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} className={classes.Linkdin} size="2xl"></FontAwesomeIcon></a>
            </div>
        </div>
    );

}

export default End;