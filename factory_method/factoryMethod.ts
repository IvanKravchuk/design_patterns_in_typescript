namespace FactoryMethodPattern {

    export interface AbstractMold {
        inject() : string;
    }

    export class ToyDuckMold implements AbstractMold {
        inject = () => {
            return "Method of ToyDuckMold";
        }
    }

    export class ToyCarMold implements AbstractMold {
        inject = () => {
            return "Method of ToyCarMold";
        }
    }


    export namespace ToyFactory {
        export function createToy(type: string) : AbstractMold {
            if (type === "Duck") {
                return new ToyDuckMold();
            } else if (type === "Car") {
                return new ToyCarMold();
            }

            return null;
        }
    }
}
