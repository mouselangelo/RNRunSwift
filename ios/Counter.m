//
//  Counter.m
//  RNRunSwift
//
//  Created by Chetan Agarwal on 26.10.18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"

// Exports Counter class as a NativeModule
// The second argument - NSObject is specified as it't the parent class.
@interface RCT_EXTERN_MODULE(Counter, NSObject)

// Can also use the below alternative to export Counter as RNCounter instead.
// @interface RCT_EXTERN_REMAP_MODULE(RNCounter, Counter, NSObject)

//=====================================
// Exporting methods that can be invoked from JS
//=====================================

RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(decrement)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock) callback)

@end
