/// <reference path="singleton.ts" />
namespace SingletonPattern {
	export namespace Demo {

		export function show() : void {
			const goverment1 = SingletonPattern.Goverment.election();
			const goverment2 = SingletonPattern.Goverment.election();

			if (goverment1 === goverment2) {
				console.log("two goverments are equivalent");
			} else {
				console.log("two goverments are not equivalent");
			}
		}
	}
}

