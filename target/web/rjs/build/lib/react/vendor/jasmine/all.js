function exposeFrom(e){return e.spyOn=jasmine.spyOn,e.it=jasmine.it,e.xit=jasmine.xit,e.expect=jasmine.expect,e.runs=jasmine.runs,e.waits=jasmine.waits,e.waitsFor=jasmine.waitsFor,e.beforeEach=jasmine.beforeEach,e.afterEach=jasmine.afterEach,e.describe=jasmine.describe,e.xdescribe=jasmine.xdescribe,e.jasmine=jasmine,e}require("./phantom"),require("./console");var jasmine=require("./jasmine");require("./jasmine-html"),require("./jasmine-support"),require("./HtmlReporter"),require("./PrintReporter"),require("./ReporterView"),require("./SpecView"),require("./SuiteView");var env=jasmine.getEnv();env.addReporter(new jasmine.HtmlReporter),env.addReporter(new jasmine.PrintReporter),jasmine.exposeFrom=exposeFrom;var global=Function("return this")();exposeFrom(global),module.exports=jasmine;
//# sourceMappingURL=all.js.map