var React=require("React"),ReactTransitionChildMapping=require("ReactTransitionChildMapping"),assign=require("Object.assign"),cloneWithProps=require("cloneWithProps"),emptyFunction=require("emptyFunction"),ReactTransitionGroup=React.createClass({displayName:"ReactTransitionGroup",propTypes:{component:React.PropTypes.any,childFactory:React.PropTypes.func},getDefaultProps:function(){return{component:"span",childFactory:emptyFunction.thatReturnsArgument}},getInitialState:function(){return{children:ReactTransitionChildMapping.getChildMapping(this.props.children)}},componentWillReceiveProps:function(e){var n=ReactTransitionChildMapping.getChildMapping(e.children),t=this.state.children;this.setState({children:ReactTransitionChildMapping.mergeChildMappings(t,n)});var i;for(i in n){var r=t&&t.hasOwnProperty(i);!n[i]||r||this.currentlyTransitioningKeys[i]||this.keysToEnter.push(i)}for(i in t){var s=n&&n.hasOwnProperty(i);!t[i]||s||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidUpdate:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var n=this.keysToLeave;this.keysToLeave=[],n.forEach(this.performLeave)},performEnter:function(e){this.currentlyTransitioningKeys[e]=!0;var n=this.refs[e];n.componentWillEnter?n.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var n=this.refs[e];n.componentDidEnter&&n.componentDidEnter(),delete this.currentlyTransitioningKeys[e];var t=ReactTransitionChildMapping.getChildMapping(this.props.children);t&&t.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=!0;var n=this.refs[e];n.componentWillLeave?n.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var n=this.refs[e];n.componentDidLeave&&n.componentDidLeave(),delete this.currentlyTransitioningKeys[e];var t=ReactTransitionChildMapping.getChildMapping(this.props.children);if(t&&t.hasOwnProperty(e))this.performEnter(e);else{var i=assign({},this.state.children);delete i[e],this.setState({children:i})}},render:function(){var e={};for(var n in this.state.children){var t=this.state.children[n];t&&(e[n]=cloneWithProps(this.props.childFactory(t),{ref:n}))}return React.createElement(this.props.component,this.props,e)}});module.exports=ReactTransitionGroup;
//# sourceMappingURL=ReactTransitionGroup.js.map