var invariant=require("invariant"),CSSCore={addClass:function(s,a){return invariant(!/\s/.test(a),'CSSCore.addClass takes only a single class name. "%s" contains multiple classes.',a),a&&(s.classList?s.classList.add(a):CSSCore.hasClass(s,a)||(s.className=s.className+" "+a)),s},removeClass:function(s,a){return invariant(!/\s/.test(a),'CSSCore.removeClass takes only a single class name. "%s" contains multiple classes.',a),a&&(s.classList?s.classList.remove(a):CSSCore.hasClass(s,a)&&(s.className=s.className.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),s},conditionClass:function(s,a,e){return(e?CSSCore.addClass:CSSCore.removeClass)(s,a)},hasClass:function(s,a){return invariant(!/\s/.test(a),"CSS.hasClass takes only a single class name."),s.classList?!!a&&s.classList.contains(a):(" "+s.className+" ").indexOf(" "+a+" ")>-1}};module.exports=CSSCore;
//# sourceMappingURL=CSSCore.js.map