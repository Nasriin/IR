var jasmine=require("./jasmine");jasmine.HtmlReporter.SuiteView=function(e,t,i){this.suite=e,this.dom=t,this.views=i,this.element=this.createDom("div",{className:"suite"},this.createDom("a",{className:"description",href:jasmine.HtmlReporter.sectionLink(this.suite.getFullName())},this.suite.description)),this.appendToSummary(this.suite,this.element)},jasmine.HtmlReporter.SuiteView.prototype.status=function(){return this.getSpecStatus(this.suite)},jasmine.HtmlReporter.SuiteView.prototype.refresh=function(){this.element.className+=" "+this.status()},jasmine.HtmlReporterHelpers.addHelpers(jasmine.HtmlReporter.SuiteView);
//# sourceMappingURL=SuiteView.js.map