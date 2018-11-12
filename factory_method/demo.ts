/// <reference path="factoryMethod.ts" />

namespace FactoryMethodPattern {
	export namespace Demo {
		export function show() : void {
		    var d: FactoryMethodPattern.AbstractMold = FactoryMethodPattern.ToyFactory.createToy("Duck");
		    var c: FactoryMethodPattern.AbstractMold = FactoryMethodPattern.ToyFactory.createToy("Car");

		    console.log(d.inject());
		    console.log(c.inject());
		};
	}
}

