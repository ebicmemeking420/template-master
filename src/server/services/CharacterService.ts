import { Components } from "@flamework/components";
import { Dependency, OnStart, Service } from "@flamework/core";
import { Players, ReplicatedStorage } from "@rbxts/services";
import { ToolComponent } from "server/components/ToolComponent";

@Service()
export class CharacterService implements OnStart {
	onStart() {
		Players.PlayerAdded.Connect((player) => this.playerAdded(player));

		Players.GetPlayers().forEach((player) => task.defer(() => this.playerAdded(player)));
	}

	private CharacterAdded(character: Model) {
		warn(character.Name, "'s character has successfully spawned");

		const player = Players.GetPlayerFromCharacter(character);

		if (player) {
			const backpack = player.FindFirstChildOfClass("Backpack");

			if (backpack) {
				if (!backpack.FindFirstChild("__Placeholder")) {
					const assetsFolder = ReplicatedStorage.WaitForChild("Assets") as Folder;
					const toolAssets = assetsFolder.WaitForChild("Tools") as Folder;
					const instanceToClone = toolAssets.WaitForChild("__Placeholder") as Instance;
					const clonedTool = instanceToClone.Clone();
					clonedTool.Parent = backpack;

					const components = Dependency<Components>();
					components.addComponent<ToolComponent>(clonedTool as Tool);
				}
			}
		}
	}

	private playerAdded(player: Player) {
		warn(player.Name, "has entered the server");

		player.CharacterAdded.Connect((character) => this.CharacterAdded(character));

		const character = player.Character || player.CharacterAdded.Wait()[0];
		if (character) {
			this.CharacterAdded(character);
		}
	}
}
