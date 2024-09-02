//
//  SpindleTextField+MaxLength.swift
//
//
//  Created by 小田島 直樹 on 9/1/24.
//

import SwiftUI

fileprivate extension SpindleTextField {
    struct MaxLengthKey: EnvironmentKey {
        static let defaultValue: Int? = nil
    }
}

extension EnvironmentValues {
    var spindleTextFieldMaxLength: Int? {
        get { self[SpindleTextField.MaxLengthKey.self] }
        set { self[SpindleTextField.MaxLengthKey.self] = newValue }
    }
}

public extension View {
    /// SpindleTextFieldの最大文字数を設定する。設定するとカウンターが表示される
    func spindleTextFieldMaximumLength(_ length: Int?) -> some View {
        self.environment(\.spindleTextFieldMaxLength, length)
    }
}
