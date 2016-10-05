function getAxisCoordOfEvent(e,t){var o=TouchEventUtils.extractSingleTouch(t);return o?o[e.page]:e.page in t?t[e.page]:t[e.client]+ViewportMetrics[e.envScroll]}function getDistance(e,t){var o=getAxisCoordOfEvent(Axis.x,t),s=getAxisCoordOfEvent(Axis.y,t);return Math.pow(Math.pow(o-e.x,2)+Math.pow(s-e.y,2),.5)}var EventConstants=require("EventConstants"),EventPluginUtils=require("EventPluginUtils"),EventPropagators=require("EventPropagators"),SyntheticUIEvent=require("SyntheticUIEvent"),TouchEventUtils=require("TouchEventUtils"),ViewportMetrics=require("ViewportMetrics"),keyOf=require("keyOf"),topLevelTypes=EventConstants.topLevelTypes,isStartish=EventPluginUtils.isStartish,isEndish=EventPluginUtils.isEndish,tapMoveThreshold=10,startCoords={x:null,y:null},Axis={x:{page:"pageX",client:"clientX",envScroll:"currentPageScrollLeft"},y:{page:"pageY",client:"clientY",envScroll:"currentPageScrollTop"}},dependencies=[topLevelTypes.topMouseDown,topLevelTypes.topMouseMove,topLevelTypes.topMouseUp];EventPluginUtils.useTouchEvents&&dependencies.push(topLevelTypes.topTouchCancel,topLevelTypes.topTouchEnd,topLevelTypes.topTouchStart,topLevelTypes.topTouchMove);var eventTypes={touchTap:{phasedRegistrationNames:{bubbled:keyOf({onTouchTap:null}),captured:keyOf({onTouchTapCapture:null})},dependencies:dependencies}},TapEventPlugin={tapMoveThreshold:tapMoveThreshold,eventTypes:eventTypes,extractEvents:function(e,t,o,s){if(!isStartish(e)&&!isEndish(e))return null;var n=null,r=getDistance(startCoords,s);return isEndish(e)&&tapMoveThreshold>r&&(n=SyntheticUIEvent.getPooled(eventTypes.touchTap,o,s)),isStartish(e)?(startCoords.x=getAxisCoordOfEvent(Axis.x,s),startCoords.y=getAxisCoordOfEvent(Axis.y,s)):isEndish(e)&&(startCoords.x=0,startCoords.y=0),EventPropagators.accumulateTwoPhaseDispatches(n),n}};module.exports=TapEventPlugin;
//# sourceMappingURL=TapEventPlugin.js.map