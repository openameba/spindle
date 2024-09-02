//
//  SpindleTextField+Errors.swift
//  
//
//  Created by 小田島 直樹 on 9/2/24.
//

import SwiftUI

fileprivate extension SpindleTextField {
    struct ErrorsKey: EnvironmentKey {
        static let defaultValue: [String] = []
    }
}

extension EnvironmentValues {
    var spindleTextFieldErrors: [String] {
        get { self[SpindleTextField.ErrorsKey.self] }
        set { self[SpindleTextField.ErrorsKey.self] = newValue }
    }
}

public extension View {
    /// SpindleTextFieldにエラーを設定する
    func spindleTextFieldErrors(_ errors: [String]) -> some View {
        self.environment(\.spindleTextFieldErrors, errors)
    }
}
