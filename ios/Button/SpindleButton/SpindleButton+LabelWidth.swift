//
//  SpindleButton+LabelWidth.swift
//
//
//  Created by 小田島 直樹 on 7/20/24.
//

import SwiftUI

private extension SpindleButton {
    struct LabelWidthKey: EnvironmentKey {
        static let defaultValue: CGFloat? = nil
    }
    
    struct LabelMinWidthKey: EnvironmentKey {
        static let defaultValue: CGFloat? = nil
    }
}

extension EnvironmentValues {
    var spindleButtonLabelWidth: CGFloat? {
        get { self[SpindleButton.LabelWidthKey.self] }
        set { self[SpindleButton.LabelWidthKey.self] = newValue }
    }

    var spindleButtonLabelMinWidth: CGFloat? {
        get { self[SpindleButton.LabelMinWidthKey.self] }
        set { self[SpindleButton.LabelMinWidthKey.self] = newValue }
    }
}

public extension View {
    /// SpindleButtonのラベルの幅を指定する。
    func spindleButtonLabelWidth(_ width: CGFloat? = nil) -> some View {
        self.environment(\.spindleButtonLabelWidth, width)
    }
    
    /// SpindleButtonのラベルの最小幅を指定する。
    func spindleButtonLabelMinWidth(_ minWidth: CGFloat? = nil) -> some View {
        self.environment(\.spindleButtonLabelMinWidth, minWidth)
    }
}
