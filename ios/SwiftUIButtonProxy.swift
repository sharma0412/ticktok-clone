//
//  SwiftUIButtonProxy.swift
//  ReactNativeWithSwiftUITutorial
//
//  Created by Alexey Kureev on 01/02/2020.
//

import SwiftUI

@objcMembers class SwiftUIButtonProxy: NSObject {
  private var vc = UIHostingController(rootView: SwiftUIButton())
  
  static let storage = NSMutableDictionary()
  

  
  var view: UIView {
    return vc.view
  }
}
