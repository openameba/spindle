//
//  SpindleText+LineHeightMultiple.swift
//
//
//  Created by 小田島 直樹 on 9/1/24.
//

import SwiftUI

extension SpindleText {
    enum LineHeightMultipleKey: EnvironmentKey {
        static let defaultValue: CGFloat = 1.3
    }
}

extension EnvironmentValues {
    var spindleTextLineHeightMultiple: CGFloat {
        get { self[SpindleText.LineHeightMultipleKey.self] }
        set { self[SpindleText.LineHeightMultipleKey.self] = newValue }
    }
}

extension View {
    func spindleTextLineHeightMultiple(_ lineHeightMultiple: CGFloat) -> some View {
        environment(\.spindleTextLineHeightMultiple, lineHeightMultiple)
    }
}
