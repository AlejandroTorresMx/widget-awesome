var React = require('react')

module.exports = React.createClass({
  'displayName': 'BlankPage.jsx',
  render: function () {
    return <div className='Page'>
    	<MyButton />
    </div>
  }
});

// declare our button
var MyButton = React.createClass({
	// set initial state
	getInitialState:function(){
		return {
			isClicked: false,
			defaultText: "Like"
		}
	},
	// handle click state
	handleButtonState: function() {
		if(this.state.isClicked===true){
			alert('already liked!')
			return false;
		}
		this.setState({isClicked: true, defaultText:"liked!"})
	},
	// render it
	render:function(){
		var isClickedClass = this.state.isClicked ? 'liked' : ''
		return (
			<button className={"mybutton " + isClickedClass} onClick={this.handleButtonState}>
			{this.state.defaultText}
			</button>
		);
	}
});
