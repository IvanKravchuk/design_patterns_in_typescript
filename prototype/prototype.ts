namespace PrototypePattern {
    export interface Prototype {
        split(): Prototype;
        toString(): string;
    }

    export class SingleCellOrganism1 implements Prototype {

        split() : Prototype {
            return new SingleCellOrganism1();
        }

        toString(): string {
            return "This is SingleCellOrganism1";
        }
    }

    export class SingleCellOrganism2 implements Prototype {

        split() : Prototype {
            return new SingleCellOrganism2();
        }

        toString(): string {
            return "This is SingleCellOrganism2";
        }
    }

    export class SingleCellOrganism3 implements Prototype {

        split() : Prototype {
            return new SingleCellOrganism3();
        }

        toString(): string {
            return "This is SingleCellOrganism3";
        }
    }


    export class Builder {
        private prototypeMap: { [s: string]: Prototype; } = {};

        constructor() {
            this.prototypeMap['cell1'] = new SingleCellOrganism1();
            this.prototypeMap['cell2'] = new SingleCellOrganism2();
            this.prototypeMap['cell3'] = new SingleCellOrganism3();
        }

        createOne(s: string): Prototype {
            console.log(s);
            return this.prototypeMap[s].split();
        }
    }
}
