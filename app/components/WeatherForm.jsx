var React = require('react');

var WeatherForm = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();

    var location = this.refs.location.value;
    if(location.trim().length>0){
      this.refs.location.value ="";
      this.props.onSearch(location);

    }
  },
  render:function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="location" placeholder="city to search"/>
          <button>Start searching</button>
        </form>
      </div>
    );
  }
})

module.exports = WeatherForm;
