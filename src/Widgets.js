import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon"/>
            <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets__widgetContainer">
            <h2>What's happening?</h2>
            <TwitterTweetEmbed tweetId={"1382966827085492228"} />

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="@sarankumarsrit1"
                options={{ height: 400 }}
              />
 
            <TwitterShareButton
            url={"https://facebook.com/saran.kumar.sritharan"}
            options={{ text: "check the fb link", via: "@sarankumarsrit1" }}
            /> 


            </div>

            
        </div>
    )
}

export default Widgets
