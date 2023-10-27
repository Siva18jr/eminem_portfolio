import React from "react";
import classes from '../main.module.css';

const Body = () => {
    return (
        <div className={classes.ContentBody}>
            <div className={classes.FirstCircle}>
                <div className={classes.SecondCircle}>
                    <img src={require('../images/eminem.png')} alt="portfolio image" className={classes.PortfolioImg} />
                </div>
            </div>
        </div>
    );
}

export default Body;