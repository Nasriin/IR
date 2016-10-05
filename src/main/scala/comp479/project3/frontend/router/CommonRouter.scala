package comp479.project3.frontend.router

import java.io.File
import org.parboiled.common.FileUtils
import scala.concurrent.duration._
import akka.actor._
import akka.pattern.ask
import spray.routing.{HttpService, RequestContext}
import spray.routing.directives.CachingDirectives
import spray.can.server.Stats
import spray.can.Http
import spray.httpx.marshalling.Marshaller
import spray.httpx.encoding.Gzip
import spray.httpx.TwirlSupport._
import spray.util._
import spray.http._
import MediaTypes._
import CachingDirectives._
import akka.actor.Actor
import spray.routing._
import spray.http._
import spray.http.MediaTypes._
import scala.concurrent.ExecutionContext.Implicits.global

trait CommonRouter extends HttpService {
  val commonRoutes = {
    path("") {
      get {
        complete {
          html.index("Project 3", "page-index")
        }
      }
    } ~
    pathPrefix("resources") {
      pathPrefix("javascripts") {
        getFromResourceDirectory("public/javascripts")
      } ~
      pathPrefix("stylesheets") {
        getFromResourceDirectory("public/stylesheets")
      } ~
      pathPrefix("lib") {
        getFromResourceDirectory("public/lib")
      } ~
      pathPrefix("webjars") {
        get {
          getFromResourceDirectory("META-INF/resources/webjars")
        }
      } ~
      pathPrefix("images") {
        get {
          getFromResourceDirectory("public/images")
        }
      }
    }
  }

  val assetNotFoundHandler = RejectionHandler {
    case Nil /* secret code for path not found */ ⇒
      respondWithStatus(404) {
        getFromResource("404.html")
      }
  }
}