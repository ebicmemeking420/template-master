import { OnStart, Service } from "@flamework/core";

@Service()
export class MyService implements OnStart {
	onStart() {
		const petsArray = ["Dog", "Cat", "Bunny"];
		print(petsArray[0]);

		petsArray[1] = "Kitten";
		print(petsArray[1]);

		const petsMap0 = new Map([
			["Rex", "Dog"],
			["Maya", "Cat"],
			["Fufu", "Bunny"],
		]);
		print(petsMap0.get("Rex"));
		petsMap0.set("Maya", "Kitten");
		print(petsMap0.get("Maya"));

		const petsMap1 = new Map<string, string>();
		petsMap1.set("Rex", "Dog");
		petsMap1.set("Maya", "Cat");
		petsMap1.set("Fufu", "Bunny");
		print(petsMap1.get("Maya"));

		petsMap1.delete("Fufu");
		print(petsMap1);

		const testMap = new Map<Number, Number>();
		testMap.set(1, 2);
		print(testMap.get(1));

		const petsSet = new Set(["Dog", "Cat", "Bunny"]);
		for (const pet of petsSet) {
			print(pet);
		}

		petsSet.add("Kitten");

		for (const pet of petsSet) {
			print(pet);
		}

		petsSet.delete("Bunny");

		for (const pet of petsSet) {
			print(pet);
		}

		if (!petsSet.has("Bat")) {
			petsSet.add("Bat");

			for (const pet of petsSet) {
				print(pet);
			}
		}

		for (let i = 0; i < 10; i++) {
			petsSet.add("Dog");
		}

		for (const pet of petsSet) {
			print(pet);
		}

		for (let i = 0; i < 10; i++) {
			petsSet.add("Lizard");
		}

		for (const pet of petsSet) {
			print(pet);
		}

		print("Hello, World!");
	}
}
