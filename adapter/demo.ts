/// <reference path="adapter.ts" />
namespace AdapterPattern {
	export namespace Demo {

		export function show() : void {
			var adapter1: AdapterPattern.Adapter1 = new AdapterPattern.Adapter1();
			adapter1.drive12mm();

			var adapter2: AdapterPattern.Adapter2 = new AdapterPattern.Adapter2();
			adapter2.drive12mm();
		}
	}
}
