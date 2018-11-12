namespace AdapterPattern {
    export interface IRatchet {
        drive12mm(): void;
    }

    export interface ISocket {
        drive9mm(): void;
    }

    export class Socket implements ISocket {
        public drive9mm(): void {
            console.log("`method` of Socket is being called");
        }
    }

    // inheritance
    export class Adapter1 extends Socket implements IRatchet  {
        public drive12mm(): void {
            console.log("Adapter's `drive` method is being called");
            this.drive9mm();
        }
    }

    // composition
    export class Adapter2 implements IRatchet  {
        public drive12mm(): void {
            console.log("Adapter's `drive` method is being called");
            const socket = new Socket();
            socket.drive9mm();
        }
    }
}
