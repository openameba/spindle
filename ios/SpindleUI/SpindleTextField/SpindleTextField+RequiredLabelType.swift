//
//  SpindleTextField+RequiredLabelType.swift
//
//
//  Created by 小田島 直樹 on 9/1/24.
//

import SwiftUI

public extension SpindleTextField {
    enum RequiredLabelType {
        case neutral
        case caution
    }
}

extension SpindleTextField.RequiredLabelType: EnvironmentKey {
    public static let defaultValue: SpindleTextField.RequiredLabelType? = nil
}

extension EnvironmentValues {
    var spindleTextFieldRequiredLabelType: SpindleTextField.RequiredLabelType? {
        get { self[SpindleTextField.RequiredLabelType.self] }
        set { self[SpindleTextField.RequiredLabelType.self] = newValue }
    }
}

public extension View {
    /// SpindleTextFieldの「必須」ラベルを設定する
    func spindleTextFieldRequiredLabelType(_ type: SpindleTextField.RequiredLabelType?) -> some View {
        self.environment(\.spindleTextFieldRequiredLabelType, type)
    }
}
