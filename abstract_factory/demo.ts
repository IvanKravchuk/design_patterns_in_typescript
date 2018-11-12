/// <reference path="abstractFactory.ts" />

namespace AbstractFactoryPattern {
	export namespace Demo {
		export function show() {
    		// Abstract factoryM1
		    var factory1: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.Model1Factory();
    		var tester1: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory1);
		    tester1.test();

		    // Abstract factoryM2
		    var factory2: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.Model2Factory();
			var tester2: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory2);
			tester2.test();
			
			// Abstract factoryM3
		    var factory3: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.Model3Factory();
			var tester3: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory3);
		    tester3.test();
		}
	}
}

