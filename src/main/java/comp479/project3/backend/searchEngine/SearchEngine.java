package comp479.project3.backend.searchEngine;

import java.util.List;
import java.util.Map;

import org.apache.solr.common.SolrDocumentList;

import comp479.project3.backend.searchEngine.SentimentClassifier.Polarity;



//import sample.SolrDocumentWithScore;
//import searchEngine.SentimentClassifier.Polarity;


public interface SearchEngine {

	public Map<Polarity, List<SolrDocumentWithScore>> query(String query, int start, int row);
	public SolrDocumentList querySolr(String query, int start, int row);
}
