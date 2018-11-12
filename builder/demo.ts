/// <reference path="builder.ts" />

namespace BuilderPattern {
	export namespace Demo {
		export function show() : void {
			var m: BuilderPattern.Meal = new BuilderPattern.MealBuilder("Petro")
                        .setBurger("with chicken")
                        .setCola(250)
						.setDessert("icecream")
						.setToy("car")
                        .build();
			console.log(`Order for ${m.ClientName} :
	burger ${m.Burger} - 2$
	cola ${m.Cola} ml - 1$
	desert ${m.Dessert} - 1$
	toy ${m.Toy} - gift
			total: 4$`);
		}
	}
}

