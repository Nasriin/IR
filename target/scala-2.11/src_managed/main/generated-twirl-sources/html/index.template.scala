
package html

import twirl.api._
import TemplateMagic._

                              
/**/
object index extends BaseScalaTemplate[twirl.api.HtmlFormat.Appendable,Format[twirl.api.HtmlFormat.Appendable]](twirl.api.HtmlFormat) with twirl.api.Template2[String,String,twirl.api.HtmlFormat.Appendable] {

    /**/
    def apply/*1.2*/(title: String, bodyClasses: String):twirl.api.HtmlFormat.Appendable = {
        _display_ {

Seq[Any](format.raw/*1.38*/("""

"""),_display_(Seq[Any](/*3.2*/html/*3.6*/.main(title, bodyClasses)/*3.31*/ {_display_(Seq[Any](format.raw/*3.33*/("""

    <script data-main="/resources/javascripts/main.js"
            src="/resources/lib/requirejs/require.js"></script>
    <link rel="stylesheet" href="/resources/lib/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="/resources/lib/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/resources/stylesheets/main.min.css">

""")))}/*11.2*/ {_display_(Seq[Any](format.raw/*11.4*/("""

""")))})))}
    }

                                                            def render(title:String,bodyClasses:String): twirl.api.HtmlFormat.Appendable = apply(title,bodyClasses)

                                                                               def f:((String,String) => twirl.api.HtmlFormat.Appendable) = (title,bodyClasses) => apply(title,bodyClasses)

    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Wed Nov 26 15:21:27 EST 2014
                    SOURCE: /Users/nasrin/Documents/LearnGate/eclipse/IRFinal/comp479project/src/main/assets/templates/index.scala.html
                    HASH: fe200731fc4cb23d1530c7aeff191c68d03abfed
                    MATRIX: 332->1|453->37|490->40|501->44|534->69|573->71|951->431|990->433
                    LINES: 12->1|15->1|17->3|17->3|17->3|17->3|25->11|25->11
                    -- GENERATED --
                */
                      