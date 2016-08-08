import React from 'react';
import Transition from 'react-addons-css-transition-group';


const images = [
  'http://placekitten.com/500/400',
  'http://placekitten.com/900/400',
  'http://placekitten.com/800/400',
  'http://placekitten.com/400/400',
  'http://placekitten.com/1200/400'
]

const Slider = React.createClass({
  getInitialState: function () {
    return {showing: false}
  },
  componentDidMount: function () {
    setInterval(() => {
      if (this.state.showing === this.props.images.length-1) {
        this.setState({showing: 0}) } else {
          this.setState({showing: this.state.showing + 1})
        }
      }, 3000)
    },
  render: function () {
    let images = (<img className="current" key={this.state.showing} src={this.props.images[this.state.showing]}/>)
    return (
      <div className="slider">
      <Transition transitionName="slide-left" transitionEnterTImeout={2000} transitionLeaveTimeout={4000}>
      {images}
      </Transition>
      </div>
    )
  }
});

export default Slider;
