//
//  Counter.swift
//  RNRunSwift
//
//  Created by Chetan Agarwal on 26.10.18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

/*
 Swift classes can be exposed to React Native as NativeModules by declaring a companion Obj-C file:
 See Counter.m
 
 IMPORTANT:
 Classes and functions MUST be marked with @objc modifier to allow proper exporting to Obj-C.
 For classes MUST specify the "Objc class name" to be exported.
 (If not "Undefined symbols for.." error when building).
 */

@objc(Counter)
class Counter: NSObject {
  
  /*
   The function constantsToExport returns a dictionary. This becomes available as a JS object in JS / React.
   NOTE: The values are static and computed at compile time. Runtime changes aren't available in JS.
  */
  @objc
  func constantsToExport() -> [AnyHashable: Any]! {
    return [
      "initialValue" : 0
    ]
  }
  
  /*
   Required to suppress warning from React.
   Return
   true: if you need this class initialized on the main thread
   false: if the class can be initialized on a background thread
  */
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
