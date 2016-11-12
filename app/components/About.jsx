var React = require('react');
var {Link} = require('react-router');

var About = React.createClass({
  render:function(){
    return(
      <div>
        <div className="text-center">
          <h1>About</h1>
        </div>
        <div className="row">
          <div className="small-centered">
            <p>This is a React Application I learned in a Udemy course about React development</p>
            <p>Here are some resources I have used</p>
            <ul>
              <li>
                <Link href="http://openweathermap.org/">openWeatherMap-Official Site</Link>
              </li>
              <li>
                <Link href="https://facebook.github.io/react/">Facebook React</Link>
              </li>
              <li>
                <Link href="https://github.com/dingzhiyi/react-weather">My GitHub Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
