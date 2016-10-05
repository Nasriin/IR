function validateInstanceHandle(){var e=!InstanceHandle||!InstanceHandle.traverseTwoPhase||!InstanceHandle.traverseEnterLeave;if(e)throw new Error("InstanceHandle not injected before use!")}var EventPluginRegistry=require("EventPluginRegistry"),EventPluginUtils=require("EventPluginUtils"),accumulateInto=require("accumulateInto"),forEachAccumulated=require("forEachAccumulated"),invariant=require("invariant"),listenerBank={},eventQueue=null,executeDispatchesAndRelease=function(e){if(e){var n=EventPluginUtils.executeDispatch,t=EventPluginRegistry.getPluginModuleForEvent(e);t&&t.executeDispatch&&(n=t.executeDispatch),EventPluginUtils.executeDispatchesInOrder(e,n),e.isPersistent()||e.constructor.release(e)}},InstanceHandle=null,EventPluginHub={injection:{injectMount:EventPluginUtils.injection.injectMount,injectInstanceHandle:function(e){InstanceHandle=e,__DEV__&&validateInstanceHandle()},getInstanceHandle:function(){return __DEV__&&validateInstanceHandle(),InstanceHandle},injectEventPluginOrder:EventPluginRegistry.injectEventPluginOrder,injectEventPluginsByName:EventPluginRegistry.injectEventPluginsByName},eventNameDispatchConfigs:EventPluginRegistry.eventNameDispatchConfigs,registrationNameModules:EventPluginRegistry.registrationNameModules,putListener:function(e,n,t){invariant(!t||"function"==typeof t,"Expected %s listener to be a function, instead got type %s",n,typeof t);var i=listenerBank[n]||(listenerBank[n]={});i[e]=t},getListener:function(e,n){var t=listenerBank[n];return t&&t[e]},deleteListener:function(e,n){var t=listenerBank[n];t&&delete t[e]},deleteAllListeners:function(e){for(var n in listenerBank)delete listenerBank[n][e]},extractEvents:function(e,n,t,i){for(var a,u=EventPluginRegistry.plugins,r=0,s=u.length;s>r;r++){var l=u[r];if(l){var c=l.extractEvents(e,n,t,i);c&&(a=accumulateInto(a,c))}}return a},enqueueEvents:function(e){e&&(eventQueue=accumulateInto(eventQueue,e))},processEventQueue:function(){var e=eventQueue;eventQueue=null,forEachAccumulated(e,executeDispatchesAndRelease),invariant(!eventQueue,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.")},__purge:function(){listenerBank={}},__getListenerBank:function(){return listenerBank}};module.exports=EventPluginHub;
//# sourceMappingURL=EventPluginHub.js.map