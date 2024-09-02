//
//  SpindleTextField+Rule.swift
//  
//
//  Created by 小田島 直樹 on 9/2/24.
//

import SwiftUI

fileprivate extension SpindleTextField {
    struct RuleKey: EnvironmentKey {
        static let defaultValue: String? = nil
    }
}

extension EnvironmentValues {
    var spindleTextFieldRule: String? {
        get { self[SpindleTextField.RuleKey.self] }
        set { self[SpindleTextField.RuleKey.self] = newValue }
    }
}

public extension View {
    /// SpindleTextFieldに入力規則のラベルを設定する
    func spindleTextFieldRule(_ rule: String?) -> some View {
        self.environment(\.spindleTextFieldRule, rule)
    }
}
