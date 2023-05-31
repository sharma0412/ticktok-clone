//
//  SwiftUIButton.swift
//  ReactNativeWithSwiftUITutorial
//
//  Created by Alexey Kureev on 01/02/2020.
//
  
import SwiftUI
import FamilyControls
class ButtonProps : ObservableObject {
 
}

struct SwiftUIButton : View {
  @ObservedObject var props = ButtonProps()
  @StateObject var model = MyModel.shared
  @State var isPresented = false
  
  var body: some View {
      Button("Select Apps to Discourage") {
          isPresented = true
      }
      .familyActivityPicker(isPresented: $isPresented, selection: $model.selectionToDiscourage)
      Button("Start Monitoring") {
          model.initiateMonitoring()
      }
  }

}
