var invariant=require("invariant"),mergeHelpers=require("mergeHelpers"),ArrayStrategies=mergeHelpers.ArrayStrategies,checkArrayStrategy=mergeHelpers.checkArrayStrategy,checkMergeArrayArgs=mergeHelpers.checkMergeArrayArgs,checkMergeLevel=mergeHelpers.checkMergeLevel,checkMergeObjectArgs=mergeHelpers.checkMergeObjectArgs,isTerminal=mergeHelpers.isTerminal,normalizeMergeArg=mergeHelpers.normalizeMergeArg,mergeDeepIntoObjects=function(e,r,g,t){checkMergeObjectArgs(e,r),checkMergeLevel(t);for(var a=r?Object.keys(r):[],n=0;n<a.length;n++){var s=a[n];mergeSingleFieldDeep(e,r,s,g,t)}},mergeDeepIntoArrays=function(e,r,g,t){checkMergeArrayArgs(e,r),checkMergeLevel(t);for(var a=Math.max(e.length,r.length),n=0;a>n;n++)mergeSingleFieldDeep(e,r,n,g,t)},mergeSingleFieldDeep=function(e,r,g,t,a){var n=r[g],s=r.hasOwnProperty(g),c=s&&isTerminal(n),i=s&&Array.isArray(n),m=s&&!i&&!i,l=e[g],o=e.hasOwnProperty(g),p=o&&isTerminal(l),A=o&&Array.isArray(l),y=o&&!A&&!A;p?c?e[g]=n:i?(e[g]=[],mergeDeepIntoArrays(e[g],n,t,a+1)):m?(e[g]={},mergeDeepIntoObjects(e[g],n,t,a+1)):s||(e[g]=l):A?c?e[g]=n:i?(invariant(ArrayStrategies[t],"mergeDeepInto(...): Attempted to merge two arrays, but a valid ArrayStrategy was not specified."),t===ArrayStrategies.Clobber&&(l.length=0),mergeDeepIntoArrays(l,n,t,a+1)):m&&(e[g]={},mergeDeepIntoObjects(e[g],n,t,a+1)):y?c?e[g]=n:i?(e[g]=[],mergeDeepIntoArrays(e[g],n,t,a+1)):m&&mergeDeepIntoObjects(l,n,t,a+1):o||(c?e[g]=n:i?(e[g]=[],mergeDeepIntoArrays(e[g],n,t,a+1)):m&&(e[g]={},mergeDeepIntoObjects(e[g],n,t,a+1)))},mergeDeepInto=function(e,r,g){var t=normalizeMergeArg(r);checkArrayStrategy(g),mergeDeepIntoObjects(e,t,g,0)};module.exports=mergeDeepInto;
//# sourceMappingURL=mergeDeepInto.js.map