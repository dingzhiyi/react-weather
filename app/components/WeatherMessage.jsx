var React = require('react');



var WeatherMessage = React.createClass({
  render:function(){
    var {location,temp} = this.props;
    return(
      <div>
        <h1>Today's weather of {location} is {temp}</h1>
      </div>
    );
  }
});

module.exports = WeatherMessage;
