function accumulate(a,r){if(invariant(null!=r,"accumulate(...): Accumulated items must be not be null or undefined."),null==a)return r;var n=Array.isArray(a),u=Array.isArray(r);return n?a.concat(r):u?[a].concat(r):[a,r]}var invariant=require("invariant");module.exports=accumulate;
//# sourceMappingURL=accumulate.js.map