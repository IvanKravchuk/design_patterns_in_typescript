namespace BuilderPattern {
    export class MealBuilder {
        private clientName: string;
        private burger: string;
        private cola: number;
        private desert: string;
        private toy: string;

        constructor(name: string) {
            this.clientName = name;
        }

        get ClientName() {
            return this.clientName;
        }
        setBurger(value: string): MealBuilder {
            this.burger = value;
            return this;
        }
        get Burger() {
            return this.burger;
        }
        setCola(value: number): MealBuilder {
            this.cola = value;
            return this;
        }
        get Cola() {
            return this.cola;
        }
        setDessert(value: string): MealBuilder {
            this.desert = value;
            return this;
        }
        get Dessert() {
            return this.desert;
        }
        setToy(value: string): MealBuilder {
            this.toy = value;
            return this;
        }
        get Toy() {
            return this.toy;
        }

        build(): Meal {
            return new Meal(this);
        }
    }

    export class Meal {
        private clientName: string;
        private burger: string;
        private cola: number;
        private dessert: string;
        private toy: string;

        constructor(builder: MealBuilder) {
            this.clientName = builder.ClientName;
            this.burger = builder.Burger;
            this.cola = builder.Cola;
            this.dessert = builder.Dessert;
            this.toy = builder.Toy;
        }

        get ClientName() {
            return this.clientName;
        }
        get Burger() {
            return this.burger;
        }
        get Cola() {
            return this.cola;
        }
        get Dessert() {
            return this.dessert;
        }
        get Toy() {
            return this.toy;
        }
    }

}
