function listenerAtPhase(e,t,a){var c=t.dispatchConfig.phasedRegistrationNames[a];return getListener(e,c)}function accumulateDirectionalDispatches(e,t,a){if(__DEV__&&!e)throw new Error("Dispatching id must not be null");var c=t?PropagationPhases.bubbled:PropagationPhases.captured,s=listenerAtPhase(e,a,c);s&&(a._dispatchListeners=accumulateInto(a._dispatchListeners,s),a._dispatchIDs=accumulateInto(a._dispatchIDs,e))}function accumulateTwoPhaseDispatchesSingle(e){e&&e.dispatchConfig.phasedRegistrationNames&&EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,accumulateDirectionalDispatches,e)}function accumulateDispatches(e,t,a){if(a&&a.dispatchConfig.registrationName){var c=a.dispatchConfig.registrationName,s=getListener(e,c);s&&(a._dispatchListeners=accumulateInto(a._dispatchListeners,s),a._dispatchIDs=accumulateInto(a._dispatchIDs,e))}}function accumulateDirectDispatchesSingle(e){e&&e.dispatchConfig.registrationName&&accumulateDispatches(e.dispatchMarker,null,e)}function accumulateTwoPhaseDispatches(e){forEachAccumulated(e,accumulateTwoPhaseDispatchesSingle)}function accumulateEnterLeaveDispatches(e,t,a,c){EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(a,c,accumulateDispatches,e,t)}function accumulateDirectDispatches(e){forEachAccumulated(e,accumulateDirectDispatchesSingle)}var EventConstants=require("EventConstants"),EventPluginHub=require("EventPluginHub"),accumulateInto=require("accumulateInto"),forEachAccumulated=require("forEachAccumulated"),PropagationPhases=EventConstants.PropagationPhases,getListener=EventPluginHub.getListener,EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};module.exports=EventPropagators;
//# sourceMappingURL=EventPropagators.js.map