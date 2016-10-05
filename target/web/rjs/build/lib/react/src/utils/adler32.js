function adler32(r){for(var e=1,a=0,o=0;o<r.length;o++)e=(e+r.charCodeAt(o))%MOD,a=(a+e)%MOD;return e|a<<16}var MOD=65521;module.exports=adler32;
//# sourceMappingURL=adler32.js.map