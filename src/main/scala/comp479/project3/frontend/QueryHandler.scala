package comp479.project3.frontend

import comp479.project3.backend.searchEngine.SentimentClassifier.Polarity
import comp479.project3.backend.searchEngine.{SolrDocumentWithScore, SolrSearchEngine}
import org.apache.solr.common.SolrDocumentList
import org.apache.solr.common.SolrDocument
import scala.collection.JavaConverters._

case class QueryHandler(
  searchEngine: SolrSearchEngine,
  start: Int = 0,
  numResult: Int = 50000
) {

  /**
   * Run a basic query, sorting results by tf-idf weighting.
   *
   * @param query
   * @return
   */
  def normalQuery(query: String): IndexedSeq[SolrDocument] = {
    val resultsAsJava: SolrDocumentList = searchEngine.querySolr("content:\"" + query + "\"", start, numResult)
    val resultsAsScala = resultsAsJava.asScala.toIndexedSeq
    // return the results converted to scala collections
    resultsAsScala
  }

  /**
   * Run a query and sort results based on their sentiment value.
   *
   * @param query
   * @return
   */
  def sentimentQuery(query: String): IndexedSeq[SolrDocumentWithScore] = {
    // Get the intermediate results from Solr
    val resultsAsJava: java.util.Map[Polarity, java.util.List[SolrDocumentWithScore]] =
      searchEngine.query("content:\"" + query + "\"", start, numResult)

    // Convert the results into a Scala collection that the web server
    // can handle.
    val resultsAsScala = resultsAsJava.asScala.map {
      case (key: Polarity, value: java.util.List[SolrDocumentWithScore]) => {
        value.asScala.toIndexedSeq
      }
      case _ => throw new Exception("Somehow the results weren't of the correct type.")
    }.flatten.toIndexedSeq

    val sortedResults = resultsAsScala.sortBy(_.score).reverse

    // return the results converted to scala collections
    sortedResults
  }

  /**
   * Run a query and sort results based on their sentiment value.
   *
   * @param query
   * @return
   */
  def sentimentUrlQuery(query: String): IndexedSeq[SolrDocumentWithScore] = {
    // Get the intermediate results from Solr
    val resultsAsJava: java.util.Map[Polarity, java.util.List[SolrDocumentWithScore]] =
      searchEngine.query("url:\"" + query + "\"", start, numResult)

    // Convert the results into a Scala collection that the web server
    // can handle.
    val resultsAsScala = resultsAsJava.asScala.map {
      case (key: Polarity, value: java.util.List[SolrDocumentWithScore]) => {
        value.asScala.toIndexedSeq
      }
      case _ => throw new Exception("Somehow the results weren't of the correct type.")
    }.flatten.toIndexedSeq

    val sortedResults = resultsAsScala.sortBy(_.score).reverse

    // return the results converted to scala collections
    sortedResults
  }

}