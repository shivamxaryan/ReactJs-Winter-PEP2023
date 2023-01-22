
import java.util.*;

public class NEW {

	public static void main(String[] args)
	{

		Map<String, Integer> map = new HashMap<>();


		map.put("bonny", 70);
		map.put("keshav", 80);
		map.put("shivam", 90);

		// Iterating over Map
		for (Map.Entry<String, Integer> e : map.entrySet())

			// Printing key-value in pairs
			System.out.println(e.getKey() + " "
							+ e.getValue());
	}
}
