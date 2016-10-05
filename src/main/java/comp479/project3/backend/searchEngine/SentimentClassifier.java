package comp479.project3.backend.searchEngine;

public interface SentimentClassifier {
	public enum Polarity{
		positive, negative, neutral
	}
	public Polarity getSentiment(String text);
	public double getScore(String text);
}
