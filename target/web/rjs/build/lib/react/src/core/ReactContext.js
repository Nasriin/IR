var assign=require("Object.assign"),ReactContext={current:{},withContext:function(t,e){var n,r=ReactContext.current;ReactContext.current=assign({},r,t);try{n=e()}finally{ReactContext.current=r}return n}};module.exports=ReactContext;
//# sourceMappingURL=ReactContext.js.map