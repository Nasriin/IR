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
import spray.util._
import spray.http._
import MediaTypes._
import CachingDirectives._
import akka.actor.Actor
import spray.routing._
import spray.http._
import spray.http.MediaTypes._
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Router
 *
 * Brings together the various routers that make up the service.
 */
trait Router
  extends HttpService
  with CommonRouter
  with QueryRouter
{
  val routes = {
    commonRoutes ~
      queryRoutes
  }
}