import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";

@Component({
	tag: "ToolComponent",
})
export class ToolComponent extends BaseComponent<{}, Tool> implements OnStart {
	onStart() {
		this.instance.Activated.Connect(() => this.onToolActivated());
	}

	private onToolActivated() {
		const handle = this.instance.FindFirstChild("Handle") as Part;
		if (handle) {
			handle.Color = new Color3(math.random(0, 255), math.random(0, 255), math.random(0, 255));
		}
	}
}
