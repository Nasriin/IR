
package html

import twirl.api._
import TemplateMagic._

                              
/**/
object main extends BaseScalaTemplate[twirl.api.HtmlFormat.Appendable,Format[twirl.api.HtmlFormat.Appendable]](twirl.api.HtmlFormat) with twirl.api.Template4[String,String,Html,Html,twirl.api.HtmlFormat.Appendable] {

    /**/
    def apply/*1.2*/(title: String, bodyClasses: String)(head: Html)(body: Html):twirl.api.HtmlFormat.Appendable = {
        _display_ {

Seq[Any](format.raw/*1.62*/("""
<!DOCTYPE html>
<html>
    <head>
        <title>"""),_display_(Seq[Any](/*5.17*/title)),format.raw/*5.22*/("""</title>
        <meta charset="UTF-8">
        """),_display_(Seq[Any](/*7.10*/head)),format.raw/*7.14*/("""
    </head>
    <body class=""""),_display_(Seq[Any](/*9.19*/bodyClasses)),format.raw/*9.30*/("""">
        """),_display_(Seq[Any](/*10.10*/body)),format.raw/*10.14*/("""
    </body>
</html>"""))}
    }

                                                            def render(title:String,bodyClasses:String,head:Html,body:Html): twirl.api.HtmlFormat.Appendable = apply(title,bodyClasses)(head)(body)

                                                                               def f:((String,String) => (Html) => (Html) => twirl.api.HtmlFormat.Appendable) = (title,bodyClasses) => (head) => (body) => apply(title,bodyClasses)(head)(body)

    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Wed Nov 26 15:21:27 EST 2014
                    SOURCE: /Users/nasrin/Documents/LearnGate/eclipse/IRFinal/comp479project/src/main/assets/templates/main.scala.html
                    HASH: 8d0b195d2fee299cdcc95e8bcbe68a27dc0ffb00
                    MATRIX: 341->1|486->61|572->112|598->117|682->166|707->170|773->201|805->212|853->224|879->228
                    LINES: 12->1|15->1|19->5|19->5|21->7|21->7|23->9|23->9|24->10|24->10
                    -- GENERATED --
                */
                      