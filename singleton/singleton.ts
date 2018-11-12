namespace SingletonPattern {
    export class Goverment {
        // A variable which stores the singleton object. Initially,
        // the variable acts like a placeholder
        private static goverment: Goverment;

        // private constructor so that no instance is created
        private constructor() {
        }

        // This is how we create a singleton object
        public static election(): Goverment {
            // check if an instance of the class is already created
            if (!Goverment.goverment) {
                // If not created create an instance of the class
                // store the instance in the variable
                Goverment.goverment = new Goverment();
            }
            // return the singleton object
            return Goverment.goverment;
        }
    }
}
