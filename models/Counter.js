import { NativeModules, NativeEventEmitter } from 'react-native';

class Counter extends NativeEventEmitter {

    // construct using NativeModules.Counter
    constructor(nativeModule) {
        // pass to NativeEventEmitter
        super(nativeModule);

        // explicitly set our custom methods / props
        this.initalCount = nativeModule.initalCount;
        this.getCount = nativeModule.getCount;
        this.increment = nativeModule.increment;
        this.decrement = async function () {
            try {
                await nativeModule.decrement();
            } catch (e) {
                console.log(e.message, e.code);
            }
        }
    }

}

export default new Counter(NativeModules.Counter);