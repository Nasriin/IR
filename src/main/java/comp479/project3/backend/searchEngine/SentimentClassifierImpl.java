package comp479.project3.backend.searchEngine;

import java.io.*;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Map;
import java.util.TreeMap;

public class SentimentClassifierImpl implements SentimentClassifier{
	private Map<String, Integer> afin = new TreeMap<String, Integer>();
	
	public SentimentClassifierImpl() throws FileNotFoundException, IOException{
		createAfinMap();
	}

	public Polarity getSentiment(String text) {
		double res = getScore(text);
		if(res > 0)
			return Polarity.positive;
		else if(res < 0)
			return Polarity.negative;
		else
			return Polarity.neutral;
				
	}
	
	public double getScore(String text) {
		String[] tokens = text.split("[^A-Za-z0-9&|!]+");
		int res = 0;
		for(int i = 0; i< tokens.length ; i++){
			String word = tokens[i].toLowerCase();
			if(afin.get(word) != null){
				res += afin.get(word);
			}
		}
		return res / Math.sqrt(tokens.length);

	}



	public void createAfinMap() throws FileNotFoundException,
	IOException {
		InputStream cpResource = SentimentClassifierImpl.class.getClassLoader().getResourceAsStream("AFINN-111.txt");
		BufferedReader bf = new BufferedReader(new InputStreamReader(cpResource));

		String entry;
		while((entry = bf.readLine()) != null){
			String[] entryList = entry.split("\t");
			afin.put(entryList[0], Integer.parseInt(entryList[1]));
		}
		bf.close();
//		System.out.println(afin);
	}


}
