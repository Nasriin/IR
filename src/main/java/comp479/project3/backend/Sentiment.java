package comp479.project3.backend;

import java.io.*;
import java.util.Map;
import java.util.TreeMap;


public class Sentiment {
	static Map<String, Integer> afin = new TreeMap<String, Integer>();

	
//	public static void main(String[] args) throws IOException {
//		createAfinMap();
//
//		String text = "";
//		getSentiment(text);
//
//	}

	public static double getSentiment(String text) {
		String[] tokens = text.split("[^A-Za-z0-9&|!]+");
		int res = 0;
		for(int i = 0; i< tokens.length ; i++){
			String word = tokens[i].toLowerCase();
//			System.out.println(word);
			if(afin.get(word) != null){
				res += afin.get(word);
//				System.out.print(word + ":" + afin.get(word)+" ,");
			}
		}
//		System.out.println();
		return res;
	}

	public static void createAfinMap() throws FileNotFoundException, IOException {
		InputStream cpResource = Sentiment.class.getClassLoader().getResourceAsStream("AFINN-111.txt");
		BufferedReader bf = new BufferedReader(new InputStreamReader(cpResource));

		String entry;
		while((entry = bf.readLine()) != null){
			String[] entryList = entry.split("\t");
			afin.put(entryList[0], Integer.parseInt(entryList[1]));
		}
		bf.close();
		System.out.println(afin);
	}
}
