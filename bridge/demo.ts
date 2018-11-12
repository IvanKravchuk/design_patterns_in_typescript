/// <reference path="bridge.ts" />
namespace BridgePattern {
	export namespace Demo {

		export function show() : void {
			
			var tvRemote: BridgePattern.Remote = new BridgePattern.Remote(new BridgePattern.TV());
			var radioRemote: BridgePattern.AdvancedRemote = new BridgePattern.AdvancedRemote(new BridgePattern.Radio());

			tvRemote.togglePower();
			radioRemote.mute();
		}
	}
}

