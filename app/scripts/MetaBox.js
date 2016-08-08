import React from 'react';
import Transition from 'react-addons-css-transition-group';


const MetaInfo = React.createClass({
  getInitialState: function () {
    return {showOverlay: false}
  },
  toggleMeta: function () {
    this.setState({showOverlay: !this.state.showOverlay})
  },
  render: function () {
    let overlay;
    if (this.state.showOverlay) {
      overlay = (
        <div className="overlay">
          <p>Name: Mittens</p>
          <p>Party Hat: Dunce Cap</p>
          <p>Hobbies: Robbing Banks</p>
      </div>
    )
        }
    return (
      <div className="meta-box" onClick={this.toggleMeta}>
        <img src="http://placekitten.com/600/500"/>
        <Transition
        transitionName="grow-from-center"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {overlay}
        </Transition>
      </div>
    )
  }
})

export default MetaInfo;
