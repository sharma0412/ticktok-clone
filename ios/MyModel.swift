//
//  MyModel.swift
//  BlockerMonitorExtension
//
//  Created by Yazan Halawa on 7/27/21.
//

import Foundation
import FamilyControls
import DeviceActivity
import ManagedSettings
@available(iOS 16.0, *)
extension ManagedSettingsStore.Name {
    static let social = Self("social")
}


class MyModel: ObservableObject {
    static let shared = MyModel()
    let store = ManagedSettingsStore()
    private init() {}
    var applicationtoken = FamilyActivitySelection().applicationTokens
    var selectionToDiscourage = FamilyActivitySelection() {
        willSet {
          print ("got here \(newValue)")
          let applications = newValue.applicationTokens
            if applicationtoken == FamilyActivitySelection().applicationTokens{
                applicationtoken = applications
            }
          
//
//          let tokenParts = applications.first.map { data in String(format: "%02.2hhx", data as! CVarArg) }
//
//             let token = tokenParts.joined()
//            let categories = newValue.categoryTokens
//          let data = Application.init(bundleIdentifier: "").token
//            let sharedDefault = UserDefaults(suiteName: "group.quizlrdemo.com")!
//          applications.first?.encode(to: self)
          
//            let tokendata = Data()
//            sharedDefault.set(applications, forKey: "selectedapp")
//           let token = ActivityCategoryToken(from: "")
            //let webCategories = newValue.webDomainTokens
//           store.shield.applications = applications
           
//            store.shield.applicationCategories = ShieldSettings.ActivityCategoryPolicy.specific(categories, except: Set())
//            store.shield.webDomainCategories = ShieldSettings.ActivityCategoryPolicy.specific(categories, except: Set())

        }
    }
    
    func shildapp(){
//      store.shield.applications = applicationtoken.isEmpty ? nil : applicationtoken
    }
    
  func initiateMonitoring() {
    AuthorizationCenter.shared.requestAuthorization { result in
             switch result {
             case .success:
                 break
             case .failure(let error):
                 print("error for screentime is \(error)")
             }
         }

         _ = AuthorizationCenter.shared.$authorizationStatus
             .sink() {_ in
             switch AuthorizationCenter.shared.authorizationStatus {
             case .notDetermined:
                 print("not determined")
             case .denied:
                 print("denied")
             case .approved:
                 print("approved")
             @unknown default:
                 break
             }
         }
//        let schedule = DeviceActivitySchedule(intervalStart: DateComponents(hour: 12, minute: 12), intervalEnd: DateComponents(hour: 12, minute: 30), repeats: true, warningTime:nil)
//
//        let center = DeviceActivityCenter()
//        do {
//            try center.startMonitoring(.daily, during: schedule)
//        }
//        catch {
//            print ("Could not start monitoring \(error)")
//        }
        MySchedule.setSchedule()
    }
}


