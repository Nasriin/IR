var invariant=require("invariant"),keyMirror=require("keyMirror"),MAX_MERGE_DEPTH=36,isTerminal=function(e){return"object"!=typeof e||null===e},mergeHelpers={MAX_MERGE_DEPTH:MAX_MERGE_DEPTH,isTerminal:isTerminal,normalizeMergeArg:function(e){return void 0===e||null===e?{}:e},checkMergeArrayArgs:function(e,r){invariant(Array.isArray(e)&&Array.isArray(r),"Tried to merge arrays, instead got %s and %s.",e,r)},checkMergeObjectArgs:function(e,r){mergeHelpers.checkMergeObjectArg(e),mergeHelpers.checkMergeObjectArg(r)},checkMergeObjectArg:function(e){invariant(!isTerminal(e)&&!Array.isArray(e),"Tried to merge an object, instead got %s.",e)},checkMergeIntoObjectArg:function(e){invariant(!(isTerminal(e)&&"function"!=typeof e||Array.isArray(e)),"Tried to merge into an object, instead got %s.",e)},checkMergeLevel:function(e){invariant(MAX_MERGE_DEPTH>e,"Maximum deep merge depth exceeded. You may be attempting to merge circular structures in an unsupported way.")},checkArrayStrategy:function(e){invariant(void 0===e||e in mergeHelpers.ArrayStrategies,"You must provide an array strategy to deep merge functions to instruct the deep merge how to resolve merging two arrays.")},ArrayStrategies:keyMirror({Clobber:!0,IndexByIndex:!0})};module.exports=mergeHelpers;
//# sourceMappingURL=mergeHelpers.js.map