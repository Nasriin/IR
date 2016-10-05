package comp479.project3.backend.searchEngine;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrServer;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.params.CommonParams;

import comp479.project3.backend.searchEngine.SentimentClassifier.Polarity;

public class SolrSearchEngine implements SearchEngine{

	public static final String CONTENT_FIELD = "content";
	
	private SolrServer server;
	private SentimentClassifier classifier;
	public SolrSearchEngine(String url, SentimentClassifier classifier) {
		server = new HttpSolrServer(url);
		this.classifier = classifier;
	}
	
	public SolrDocumentList querySolr(String query, int start, int row) {
		SolrQuery solrQuery = new SolrQuery();
		solrQuery.setQuery(query);
		solrQuery.set(CommonParams.ROWS, row);
		solrQuery.set(CommonParams.START, start);
		solrQuery.add(CommonParams.FL, "score, url, title");
		
		QueryResponse response;
		try {
			response = server.query(solrQuery);
		} catch (SolrServerException e) {
			System.out.println("Problem in getting response: + response = server.query(solrQuery)");
			throw new RuntimeException(e);
		}
		
		SolrDocumentList results = response.getResults();
		
		return results;
	}
	public Map<Polarity, List<SolrDocumentWithScore>> query(String query, int start, int row) {
		SolrQuery solrQuery = new SolrQuery();
		solrQuery.setQuery(query);
		solrQuery.set(CommonParams.ROWS, row);
		solrQuery.set(CommonParams.START, start);
		
		QueryResponse response;
		try {
			response = server.query(solrQuery);
		} catch (SolrServerException e) {
			System.out.println("Problem in getting response: + response = server.query(solrQuery)");
			throw new RuntimeException(e);
		}
		
		SolrDocumentList results = response.getResults();
		
		Map<Polarity, List<SolrDocumentWithScore>> classifiedDocuments = new TreeMap<Polarity, List<SolrDocumentWithScore>>();
		for (int i = 0 ; i < results.size(); i++){
			String text = results.get(i).getFirstValue(CONTENT_FIELD).toString();
			Polarity polarity = classifier.getSentiment(text);
			List<SolrDocumentWithScore> list = classifiedDocuments.get(polarity);
			if (list == null){
				list = new ArrayList<SolrDocumentWithScore>();
				classifiedDocuments.put(polarity, list);
			}
			
			SolrDocumentWithScore solrDocumentWithScore = new SolrDocumentWithScore();
			solrDocumentWithScore.solrDocument = results.get(i);
			solrDocumentWithScore.score = classifier.getScore(text);
			list.add(solrDocumentWithScore);
		}
			
		return classifiedDocuments;
	}
	
//	public Map <Polarity, Map<Integer, List<SolrDocument>>> query2(String query, int start, int row) {
//		SolrQuery solrQuery = new SolrQuery();
//		solrQuery.setQuery(query);
//		solrQuery.set(CommonParams.ROWS, row);
//		solrQuery.set(CommonParams.START, start);
//		
//		QueryResponse response;
//		try {
//			response = server.query(solrQuery);
//		} catch (SolrServerException e) {
//			System.out.println("Problem in getting response: + response = server.query(solrQuery)");
//			throw new RuntimeException(e);
//		}
//		
//		SolrDocumentList results = response.getResults();
//		
//		Map <Polarity, Map<Integer, List<SolrDocument>>> classifiedDocuments = new 
//				TreeMap<SentimentClassifier.Polarity, Map<Integer,List<SolrDocument>>>();
//		
//		for (int i = 0 ; i < results.size(); i++){
//			String text = results.get(i).getFirstValue(CONTENT_FIELD).toString();
//			int polarScore = classifier.getSentiment2(text);
//			Polarity polarity = classifier.getSentiment(text);
//			
//			Map<Integer, List<SolrDocument>> scoreDocuments = classifiedDocuments.get(polarity);
//			if(scoreDocuments == null){
//				scoreDocuments = new TreeMap<Integer, List<SolrDocument>>();
//				classifiedDocuments.put(polarity, scoreDocuments);
//			}
//			scoreDocuments.put(polarScore, new ArrayList<SolrDocument>());
//			
//			List<SolrDocument> documents = scoreDocuments.get(polarScore);
//			
//			if(documents == null){
//				documents = new ArrayList<SolrDocument>();
//				scoreDocuments.put(polarScore, documents);
//			}
//			documents.add(results.get(i));
//			
//		}
//			
//		return classifiedDocuments;
//	}

}
