var ReactEmptyComponent=require("ReactEmptyComponent"),ReactMount=require("ReactMount"),invariant=require("invariant"),ReactBrowserComponentMixin={getDOMNode:function(){return invariant(this.isMounted(),"getDOMNode(): A component must be mounted to have a DOM node."),ReactEmptyComponent.isNullComponentID(this._rootNodeID)?null:ReactMount.getNode(this._rootNodeID)}};module.exports=ReactBrowserComponentMixin;
//# sourceMappingURL=ReactBrowserComponentMixin.js.map