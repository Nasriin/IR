function CallbackQueue(){this._callbacks=null,this._contexts=null}var PooledClass=require("PooledClass"),assign=require("Object.assign"),invariant=require("invariant");assign(CallbackQueue.prototype,{enqueue:function(t,l){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(t),this._contexts.push(l)},notifyAll:function(){var t=this._callbacks,l=this._contexts;if(t){invariant(t.length===l.length,"Mismatched list of contexts in callback queue"),this._callbacks=null,this._contexts=null;for(var s=0,e=t.length;e>s;s++)t[s].call(l[s]);t.length=0,l.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),PooledClass.addPoolingTo(CallbackQueue),module.exports=CallbackQueue;
//# sourceMappingURL=CallbackQueue.js.map