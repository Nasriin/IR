package comp479.project3.backend;

import comp479.project3.backend.searchEngine.*;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrServer;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.params.CommonParams;


public class Solr {
//	public static void main(String[] args) throws SolrServerException, FileNotFoundException, IOException {
//
//		//sentiment
//		Sentiment.createAfinMap();
//		Map<String, List<String>> polarUrl = new TreeMap<String, List<String>>();
//		polarUrl.put("Positive", new LinkedList<String>());
//		polarUrl.put("Negative", new LinkedList<String>());
//		polarUrl.put("Neutral", new LinkedList<String>());
//
//
//		String url = "http://localhost:8983/solr";
//		SolrServer server = new HttpSolrServer( url );
//
//		SolrQuery query = new SolrQuery();
////		query.setQuery( "url:\"http://www.concordia.ca/encs/computer*\"" );
//		query.setQuery("content: new");
//		query.set(CommonParams.ROWS, 500);
//
//
//		QueryResponse response = server.query(query);
//
//		SolrDocumentList results = response.getResults();
//		for (int i = 0; i < results.size(); i++){
//			SolrDocument solrDocument = results.get(i);
//			System.out.println(solrDocument.getFirstValue("url")); // instead of content --> url
//
//			double textPolar = Sentiment.getSentiment(solrDocument.getFirstValue("content").toString());
////			System.out.println("Total Sentiment: "+ textPolar);
//
//			if(textPolar > 0) {
//				List<String> list = polarUrl.get("Positive");
//				list.add(solrDocument.getFirstValue("url").toString());
//			}
//			else if(textPolar > 0) {
//				List<String> list = polarUrl.get("Negative");
//				list.add(solrDocument.getFirstValue("url").toString());
//			}
//			else {
//				List<String> list = polarUrl.get("Neutral");
//				list.add(solrDocument.getFirstValue("url").toString());
//			}
//		}
//		print(polarUrl);

//	}

	private static void print(Map<String, List<String>> polarUrl) {
		for(String key : polarUrl.keySet()){
			System.out.println("----------------------------------["+key +"]--------------------------------");
			for(String url: polarUrl.get(key))
				System.out.println(url);
		}
		
	}
}
