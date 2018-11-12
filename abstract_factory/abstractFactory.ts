namespace AbstractFactoryPattern {
    export interface AbstractWheel {
        spampWheel(): string;
    }
    export interface AbstractHood {
        spampHood(): string;
    }
    export interface AbstractDoor{
        spampDoor(): string;
    }

    export interface AbstractFactory {
        createWheel() : AbstractWheel;
        createHood() : AbstractHood;
        createDoor() : AbstractDoor;
    }


    export class WheelM1 implements AbstractWheel {
        spampWheel = () => {
            return "This is spampWheel of Model1";
        }
    }
    export class HoodM1 implements AbstractHood {
        spampHood = () => {
            return "This is spampHood of Model1";
        }
    }
    export class DoorM1 implements AbstractDoor {
        spampDoor = () => {
            return "This is spampDoor of Model1";
        }
    }

    export class WheelM2 implements AbstractWheel {
        spampWheel = () => {
            return "This is spampWheel of Model2";
        }
    }
    export class HoodM2 implements AbstractHood {
        spampHood = () => {
            return "This is spampHood of Model2";
        }
    }
    export class DoorM2 implements AbstractDoor {
        spampDoor = () => {
            return "This is spampDoor of Model2";
        }
    }

    export class WheelM3 implements AbstractWheel {
        spampWheel = () => {
            return "This is spampWheel of Model3";
        }
    }
    export class HoodM3 implements AbstractHood {
        spampHood = () => {
            return "This is spampHood of Model3";
        }
    }
    export class DoorM3 implements AbstractDoor {
        spampDoor = () => {
            return "This is spampDoor of Model3";
        }
    }


    export class Model1Factory implements AbstractFactory {
        createWheel() : AbstractWheel {
            return new WheelM1();
        }

        createHood() : AbstractHood {
            return new HoodM1();
        }

        createDoor() : AbstractDoor {
            return new DoorM1();
        }
    }

    export class Model2Factory implements AbstractFactory {
        createWheel() : AbstractWheel {
            return new WheelM2();
        }

        createHood() : AbstractHood {
            return new HoodM2();
        }

        createDoor() : AbstractDoor {
            return new DoorM2();
        }
    }

    export class Model3Factory implements AbstractFactory {
        createWheel() : AbstractWheel {
            return new WheelM3();
        }

        createHood() : AbstractHood {
            return new HoodM3();
        }

        createDoor() : AbstractDoor {
            return new DoorM3();
        }
    }

    export class Tester {
        private abstractWheel: AbstractWheel;
        private abstractHood: AbstractHood;
        private abstractDoor: AbstractDoor;

        constructor(factory: AbstractFactory) {
            this.abstractWheel = factory.createWheel();
            this.abstractHood = factory.createHood();
            this.abstractDoor = factory.createDoor();
        }

        public test(): void {
            console.log(this.abstractWheel.spampWheel());
            console.log(this.abstractHood.spampHood());
            console.log(this.abstractDoor.spampDoor());
        }
    }

 }