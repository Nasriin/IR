function enqueueMarkup(e,t,n){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.INSERT_MARKUP,markupIndex:markupQueue.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function enqueueMove(e,t,n){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function enqueueRemove(e,t){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function enqueueTextContent(e,t){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function processQueue(){updateQueue.length&&(ReactComponent.BackendIDOperations.dangerouslyProcessChildrenUpdates(updateQueue,markupQueue),clearQueue())}function clearQueue(){updateQueue.length=0,markupQueue.length=0}var ReactComponent=require("ReactComponent"),ReactMultiChildUpdateTypes=require("ReactMultiChildUpdateTypes"),flattenChildren=require("flattenChildren"),instantiateReactComponent=require("instantiateReactComponent"),shouldUpdateReactComponent=require("shouldUpdateReactComponent"),updateDepth=0,updateQueue=[],markupQueue=[],ReactMultiChild={Mixin:{mountChildren:function(e,t){var n=flattenChildren(e),u=[],o=0;this._renderedChildren=n;for(var r in n){var d=n[r];if(n.hasOwnProperty(r)){var a=instantiateReactComponent(d,null);n[r]=a;var i=this._rootNodeID+r,l=a.mountComponent(i,t,this._mountDepth+1);a._mountIndex=o,u.push(l),o++}}return u},updateTextContent:function(e){updateDepth++;var t=!0;try{var n=this._renderedChildren;for(var u in n)n.hasOwnProperty(u)&&this._unmountChildByName(n[u],u);this.setTextContent(e),t=!1}finally{updateDepth--,updateDepth||(t?clearQueue():processQueue())}},updateChildren:function(e,t){updateDepth++;var n=!0;try{this._updateChildren(e,t),n=!1}finally{updateDepth--,updateDepth||(n?clearQueue():processQueue())}},_updateChildren:function(e,t){var n=flattenChildren(e),u=this._renderedChildren;if(n||u){var o,r=0,d=0;for(o in n)if(n.hasOwnProperty(o)){var a=u&&u[o],i=a&&a._currentElement,l=n[o];if(shouldUpdateReactComponent(i,l))this.moveChild(a,d,r),r=Math.max(a._mountIndex,r),a.receiveComponent(l,t),a._mountIndex=d;else{a&&(r=Math.max(a._mountIndex,r),this._unmountChildByName(a,o));var p=instantiateReactComponent(l,null);this._mountChildByNameAtIndex(p,o,d,t)}d++}for(o in u)!u.hasOwnProperty(o)||n&&n[o]||this._unmountChildByName(u[o],o)}},unmountChildren:function(){var e=this._renderedChildren;for(var t in e){var n=e[t];n.unmountComponent&&n.unmountComponent()}this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&enqueueMove(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){enqueueMarkup(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){enqueueRemove(this._rootNodeID,e._mountIndex)},setTextContent:function(e){enqueueTextContent(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,u){var o=this._rootNodeID+t,r=e.mountComponent(o,u,this._mountDepth+1);e._mountIndex=n,this.createChild(e,r),this._renderedChildren=this._renderedChildren||{},this._renderedChildren[t]=e},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null,e.unmountComponent(),delete this._renderedChildren[t]}}};module.exports=ReactMultiChild;
//# sourceMappingURL=ReactMultiChild.js.map