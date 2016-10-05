package comp479.project3.frontend.router

import akka.actor.Actor
import comp479.project3.backend.searchEngine.SentimentClassifier.Polarity
import comp479.project3.frontend.Server
import org.apache.solr.common.SolrDocument
import play.api.libs.json._
import spray.http.MediaTypes._
import spray.routing._
import scala.collection.JavaConverters._
import comp479.project3.backend.searchEngine.SolrDocumentWithScore

trait QueryRouter extends HttpService {
  val queryRoutes =
    pathPrefix("api") {
      (path("query") & get) {
        parameters("q", "t" ? "normal") { (query, queryType) =>
          respondWithMediaType(`application/json`) {
            complete {
              if (queryType == "sentiment") {
                val results: IndexedSeq[SolrDocumentWithScore] = Server.queryHandler.sentimentQuery(query)
                Json.toJson(
                  results.zipWithIndex.map { case (resultItem, idx) =>
                    Json.obj(
                      "key" -> JsNumber(idx),
                      "title" -> JsString(Option(resultItem.solrDocument.getFirstValue("title").asInstanceOf[String]).getOrElse("[no title]")),
                      "url" -> JsString(Option(resultItem.solrDocument.getFieldValue("url").asInstanceOf[String]).getOrElse("[no url]")),
                      "polarity" -> JsNumber(resultItem.score)
                    )
                  }
                ).toString()
              }
              else if (queryType == "sentiment_url") {
                val results: IndexedSeq[SolrDocumentWithScore] = Server.queryHandler.sentimentUrlQuery(query)
                Json.toJson(
                  results.zipWithIndex.map { case (resultItem, idx) =>
                    Json.obj(
                      "key" -> JsNumber(idx),
                      "title" -> JsString(Option(resultItem.solrDocument.getFirstValue("title").asInstanceOf[String]).getOrElse("[no title]")),
                      "url" -> JsString(Option(resultItem.solrDocument.getFieldValue("url").asInstanceOf[String]).getOrElse("[no url]")),
                      "polarity" -> JsNumber(resultItem.score)
                    )
                  }
                ).toString()
              }
              else {
                val results: IndexedSeq[SolrDocument] = Server.queryHandler.normalQuery(query)
                Json.toJson(
                  results.zipWithIndex.map { case (resultItem, idx) =>
                    Json.obj(
                      "key" -> JsNumber(idx),
                      "title" -> JsString(Option(resultItem.getFirstValue("title").asInstanceOf[String]).getOrElse("[no title]")),
                      "url" -> JsString(Option(resultItem.getFieldValue("url").asInstanceOf[String]).getOrElse("[no url]")),
                      "polarity" -> JsNull
                    )
                  }
                ).toString()
              }
            }
          }
        }
      }
    }
}