function reactComponentExpect(t){return t instanceof reactComponentExpect?t:this instanceof reactComponentExpect?(this._instance=t,expect(typeof t).toBe("object"),expect(typeof t.constructor).toBe("function"),void expect(ReactTestUtils.isElement(t)).toBe(!1)):new reactComponentExpect(t)}var ReactTestUtils=require("ReactTestUtils"),assign=require("Object.assign");assign(reactComponentExpect.prototype,{instance:function(){return this._instance},expectRenderedChild:function(){return this.toBeCompositeComponent(),new reactComponentExpect(this.instance()._renderedComponent)},expectRenderedChildAt:function(t){this.toBeDOMComponent();var e=this.instance()._renderedChildren||{};for(var n in e)if(e.hasOwnProperty(n)&&e[n]&&e[n]._mountIndex===t)return new reactComponentExpect(e[n]);throw new Error("Child:"+t+" is not found")},toBeDOMComponentWithChildCount:function(t){this.toBeDOMComponent(),expect(this.instance()._renderedChildren).toBeTruthy();var e=Object.keys(this.instance()._renderedChildren).length;return expect(e).toBe(t),this},toBeDOMComponentWithNoChildren:function(){return this.toBeDOMComponent(),expect(this.instance()._renderedChildren).toBeFalsy(),this},toBeComponentOfType:function(t){var e="string"==typeof t?t:t.type;return expect(this.instance()._currentElement.type===e).toBe(!0),this},toBeCompositeComponent:function(){return expect("function"==typeof this.instance().render&&"function"==typeof this.instance().setState).toBe(!0),this},toBeCompositeComponentWithType:function(t){return this.toBeCompositeComponent(),expect(this.instance()._currentElement.type===t.type).toBe(!0),this},toBeTextComponent:function(){return expect(ReactTestUtils.isTextComponent(this.instance())).toBe(!0),this},toBePresent:function(){return expect(this.instance()).toBeTruthy(),this},toBeDOMComponent:function(){return expect(ReactTestUtils.isDOMComponent(this.instance())).toBe(!0),this},toBeDOMComponentWithTag:function(t){return this.toBeDOMComponent(),expect(this.instance().tagName).toBe(t.toUpperCase()),this},scalarStateEqual:function(t){expect(this.instance()).toBeTruthy();for(var e in t)t.hasOwnProperty(e)&&expect(this.instance().state[e]).toEqual(t[e]);return this},scalarPropsEqual:function(t){expect(this.instance()).toBeTruthy();for(var e in t)t.hasOwnProperty(e)&&expect(this.instance().props[e]).toEqual(t[e]);return this},scalarContextEqual:function(t){expect(this.instance()).toBeTruthy();for(var e in t)t.hasOwnProperty(e)&&expect(this.instance().context[e]).toEqual(t[e]);return this}}),module.exports=reactComponentExpect;
//# sourceMappingURL=reactComponentExpect.js.map