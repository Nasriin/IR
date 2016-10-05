var CSSPropertyOperations=require("CSSPropertyOperations"),DOMChildrenOperations=require("DOMChildrenOperations"),DOMPropertyOperations=require("DOMPropertyOperations"),ReactMount=require("ReactMount"),ReactPerf=require("ReactPerf"),invariant=require("invariant"),setInnerHTML=require("setInnerHTML"),INVALID_PROPERTY_ERRORS={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},ReactDOMIDOperations={updatePropertyByID:ReactPerf.measure("ReactDOMIDOperations","updatePropertyByID",function(e,t,r){var a=ReactMount.getNode(e);invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(t),"updatePropertyByID(...): %s",INVALID_PROPERTY_ERRORS[t]),null!=r?DOMPropertyOperations.setValueForProperty(a,t,r):DOMPropertyOperations.deleteValueForProperty(a,t)}),deletePropertyByID:ReactPerf.measure("ReactDOMIDOperations","deletePropertyByID",function(e,t,r){var a=ReactMount.getNode(e);invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(t),"updatePropertyByID(...): %s",INVALID_PROPERTY_ERRORS[t]),DOMPropertyOperations.deleteValueForProperty(a,t,r)}),updateStylesByID:ReactPerf.measure("ReactDOMIDOperations","updateStylesByID",function(e,t){var r=ReactMount.getNode(e);CSSPropertyOperations.setValueForStyles(r,t)}),updateInnerHTMLByID:ReactPerf.measure("ReactDOMIDOperations","updateInnerHTMLByID",function(e,t){var r=ReactMount.getNode(e);setInnerHTML(r,t)}),updateTextContentByID:ReactPerf.measure("ReactDOMIDOperations","updateTextContentByID",function(e,t){var r=ReactMount.getNode(e);DOMChildrenOperations.updateTextContent(r,t)}),dangerouslyReplaceNodeWithMarkupByID:ReactPerf.measure("ReactDOMIDOperations","dangerouslyReplaceNodeWithMarkupByID",function(e,t){var r=ReactMount.getNode(e);DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(r,t)}),dangerouslyProcessChildrenUpdates:ReactPerf.measure("ReactDOMIDOperations","dangerouslyProcessChildrenUpdates",function(e,t){for(var r=0;r<e.length;r++)e[r].parentNode=ReactMount.getNode(e[r].parentID);DOMChildrenOperations.processUpdates(e,t)})};module.exports=ReactDOMIDOperations;
//# sourceMappingURL=ReactDOMIDOperations.js.map