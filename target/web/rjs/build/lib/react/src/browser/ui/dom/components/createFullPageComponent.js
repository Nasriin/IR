function createFullPageComponent(e){var t=ReactElement.createFactory(e),n=ReactCompositeComponent.createClass({displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){invariant(!1,"%s tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",this.constructor.displayName)},render:function(){return t(this.props)}});return n}var ReactCompositeComponent=require("ReactCompositeComponent"),ReactElement=require("ReactElement"),invariant=require("invariant");module.exports=createFullPageComponent;
//# sourceMappingURL=createFullPageComponent.js.map