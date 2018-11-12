namespace BridgePattern {

    interface Device {
        name: string;
        isLaunch: boolean;
        isEnabled(): boolean;
        enable(): void;
        disable(): void;
    }

    export class Remote {
        protected device: Device;
        constructor(device: Device) {
            this.device = device;
        }
        togglePower() {
            if (this.device.isEnabled()) {
                this.device.disable();
                console.log(`${this.device.name} is On!`);
            } else {
                this.device.enable();
                console.log(`${this.device.name} is Off!`);
            }
        }
    }

    export class AdvancedRemote extends Remote {
        mute() {
            console.log(`${this.device.name} is muted!`);
        }
        volumeDown() {
            // this.device.setVolume(this.device.getVolume() - 10)
        }
        volumeUp() {
            // this.device.setVolume(this.device.getVolume() + 10)
        }
    }

    export class TV implements Device{
        public name = 'TV';
        public isLaunch: boolean;
        isEnabled(): boolean {
            return this.isLaunch;
        }
        enable(): void {
            this.isLaunch = true;
        }
        disable(): void {
            this.isLaunch = false;
        }
    }

    export class Radio implements Device{
        public name = 'Radio';
        public isLaunch: boolean;
        isEnabled(): boolean {
            return this.isLaunch;
        }
        enable(): void {
            this.isLaunch = true;
        }
        disable(): void {
            this.isLaunch = false;
        }
    }
}
