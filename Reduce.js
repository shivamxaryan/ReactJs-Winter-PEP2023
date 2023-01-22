// Implementing the reduce method to get the longest string among these 
import java.util.*;

class NEW {

	public static void main(String[] args)
	{
		// creating a list of Strings
		List<String> words = Arrays.asList("Hello", "there", "are",
										"you", "perfect");


		Optional<String> longestString = words.stream()
								.reduce((word1, word2)
							-> word1.length() > word2.length()
										? word1 : word2);

		// Displaying the longest String
		longestString.ifPresent(System.out::println);
	}
}
