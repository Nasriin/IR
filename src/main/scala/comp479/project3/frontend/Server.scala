package comp479.project3.frontend

import akka.actor.{ActorSystem, Props}
import akka.io.IO
import akka.pattern.ask
import akka.util.Timeout
import com.typesafe.config._
import comp479.project3.backend.searchEngine.SentimentClassifier.Polarity
import comp479.project3.backend.searchEngine.SolrDocumentWithScore
import spray.can.Http
import spray.httpx.TwirlSupport._
import scala.concurrent.duration._
import org.apache.solr.common.SolrDocument
import comp479.project3.backend.searchEngine.{SolrSearchEngine, SentimentClassifierImpl}
import scala.collection.JavaConverters._

object Server extends App {
  val config = ConfigFactory.load()
  val projectName = config.getString("app.name")
  val solrUrl = config.getString("app.solr.url")
  val classifier = new SentimentClassifierImpl()
  val searchEngine = new SolrSearchEngine(solrUrl, classifier)
  val queryHandler = QueryHandler(searchEngine)
  val start = 0
  val numResult = 50000

  case class QueryResultItem(polarity: Polarity, document: SolrDocument)

  /**
   * Runs a query against the solr search engine and returns the results as a scala map.
   * @param queryText
   * @return
   */
  def query(queryText: String): IndexedSeq[SolrDocumentWithScore] = {
    val javaResults: java.util.Map[Polarity, java.util.List[SolrDocumentWithScore]] = searchEngine.query(queryText, start, numResult)
    val restructured = javaResults.asScala.map {
      case (key: Polarity, value: java.util.List[SolrDocumentWithScore]) => {
        value.asScala.toIndexedSeq.map { document =>
          document
        }
      }
      case _ => throw new Exception("Somehow the results weren't of the correct type.")
    }.flatten.toIndexedSeq
    // return the results converted to scala collections
    restructured
  }

  implicit val system = ActorSystem(s"$projectName-system")

  val service = system.actorOf(Props[MainActor], s"$projectName-service")

  implicit val timeout = Timeout(5.seconds)


  // start a new HTTP server on port 8080 with our service actor as the handler
  IO(Http) ? Http.Bind(service, interface = "localhost", port = 12345)
}