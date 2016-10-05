package comp479.project3.frontend

import akka.actor.Actor
import play.api.libs.json._
import spray.http.MediaTypes._
import spray.routing._
import router.Router

/**
 * Our actions will be handled by a single actor
 */
class MainActor extends Actor with Router {
  def actorRefFactory = context
  def receive = runRoute(routes)
}