//
//  Counter.m
//  RNRunSwift
//
//  Created by Chetan Agarwal on 26.10.18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

// Exports Counter class as a NativeModule
// The second argument - NSObject is specified as it't the parent class.
// @interface RCT_EXTERN_MODULE(Counter, NSObject)

// Counter is now an Event Emitter so parent class changes from NSObject to RCTEventEmitter
@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter)

// Can also use the below alternative to export Counter as RNCounter instead.
// @interface RCT_EXTERN_REMAP_MODULE(RNCounter, Counter, NSObject)

//=====================================
// Exporting methods that can be invoked from JS
//=====================================

RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock) callback)
RCT_EXTERN_METHOD(
                  decrement: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock) reject
                  )

@end
