var ReactLink=require("ReactLink"),ReactStateSetters=require("ReactStateSetters"),LinkedStateMixin={linkState:function(t){return new ReactLink(this.state[t],ReactStateSetters.createStateKeySetter(this,t))}};module.exports=LinkedStateMixin;
//# sourceMappingURL=LinkedStateMixin.js.map