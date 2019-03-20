import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconDisplayType: 'sun'
  },
  winter: {
    text: 'Burr, it\'s chilly',
    iconDisplayType: 'snowflake'
  }
}

const SeasonDisplay = (props) => {
  console.log('received latitude of:' + props.latitude);
  const season = getSeason(props.latitude, new Date().getMonth());
  
  const {text, iconDisplayType } = seasonConfig[season];
  
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconDisplayType} icon massive icon-left`}></i>
      <h1>{text}</h1>
      <i className={`${iconDisplayType} icon massive icon-right`}></i>
    </div>
  );
}

const getSeason = (latitude, currentMonth) => {
  var season = '';
  if (latitude > 0) { //northern hemisphere
    if (currentMonth > 2 && currentMonth < 9) { //summer
      season = 'summer';
    } else {
      season = 'winter';
    }
  } else {  //southern hemisphere
    if (currentMonth > 2 && currentMonth < 9) { //winter
      season = 'winter';
    } else {
      season = 'summer';
    }
  }
  return season;
}

export default SeasonDisplay;