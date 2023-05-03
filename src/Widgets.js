import React from 'react'
import './Widgets.css'

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Search } from '@material-ui/icons';

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <Search className='widgets__searchIcon'/>
            <input 
            placeholder='Search Twitter'
            type='text'
            />
        </div>

        <div className='widgets__widgetContainer'>
            <h2>What Happening</h2>
            <TwitterTweetEmbed tweetId={'933354946111705097'}/>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{height: 400}}
            />
              <TwitterShareButton
                url={'https://facebook.com/saurabhnemade'}
                options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                />
        </div>
    </div>
  )
}

export default Widgets
