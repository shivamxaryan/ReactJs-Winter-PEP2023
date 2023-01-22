
import java.util.stream.Stream;

class NEW {

	public static void main(String[] args)
	{

		
		Stream<String> stream = Stream.of(
			"My", "Name", "is", "Ramee");

		stream.filter(str -> str.endsWith("e"))
			.forEach(System.out::println);
	}
}
