//
//  DeviceActivityMonitorExtension.swift
//  quizlr-device-monitor
//
//  Created by Sourav on 25/05/23.
//

import DeviceActivity
import ManagedSettings
import SwiftUI
import UIKit
import MobileCoreServices
import FamilyControls
// Optionally override any of the functions below.
// Make sure that your class name matches the NSExtensionPrincipalClass in your Info.plist.
class DeviceActivityMonitorExtension: DeviceActivityMonitor {
  let store = ManagedSettingsStore()
    override func intervalDidStart(for activity: DeviceActivityName) {
        super.intervalDidStart(for: activity)
//      let model = MyModel.shared
//      let sharedDefault = UserDefaults(suiteName: "group.quizlrdemo.com")!
//      let token = sharedDefault.value(forKey: "selectedapp")
//      let applications = model.selectionToDiscourage.applicationTokens
      store.shield.applicationCategories = .all()
//      store.shield.applications = FamilyActivitySelection().applicationTokens
      // Handle the start of the interval.
      
//      store.shield.applications = token as? Set<ApplicationToken>
    }
    
    override func intervalDidEnd(for activity: DeviceActivityName) {
        super.intervalDidEnd(for: activity)
        
      store.shield.applicationCategories = nil
      store.shield.applications = nil
        // Handle the end of the interval.
    }
    
    override func eventDidReachThreshold(_ event: DeviceActivityEvent.Name, activity: DeviceActivityName) {
        super.eventDidReachThreshold(event, activity: activity)
//      store.shield.applications =  nil
//      let model = MyModel.shared
//      let applications = model.selectionToDiscourage.applicationTokens
//      store.shield.applications = applications.isEmpty ? nil : applications
//      let schedule = DeviceActivityCenter().schedule(for: activity)
//      let warningTime = schedule?.warningTime
//      store.shield.applications = nil
        // Handle the event reaching its threshold.
    }
    
    override func intervalWillStartWarning(for activity: DeviceActivityName) {
        super.intervalWillStartWarning(for: activity)
//      store.shield.applications = nil
        // Handle the warning before the interval starts.
    }
    
    override func intervalWillEndWarning(for activity: DeviceActivityName) {
        super.intervalWillEndWarning(for: activity)
//      store.shield.applications = nil
//      store.shield.applications = nil
        // Handle the warning before the interval ends.
    }
    
    override func eventWillReachThresholdWarning(_ event: DeviceActivityEvent.Name, activity: DeviceActivityName) {
        super.eventWillReachThresholdWarning(event, activity: activity)
//        store.shield.applications =  nil
//      store.shield.applications = nil
//        let model = MyModel.shared
//        let applications = model.selectionToDiscourage.applicationTokens
//        store.shield.applications = applications.isEmpty ? nil : applications
        // Handle the warning before the event reaches its threshold.
    }
}
