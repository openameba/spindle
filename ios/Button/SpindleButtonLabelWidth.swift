//
//  SpindleButtonLabelWidth.swift
//
//
//  Created by 小田島 直樹 on 7/20/24.
//

import SwiftUI

private struct SpindleButtonLabelWidthKey: EnvironmentKey {
    static let defaultValue: CGFloat? = nil
}

private struct SpindleButtonLabelMinWidthKey: EnvironmentKey {
    static let defaultValue: CGFloat? = nil
}

extension EnvironmentValues {
    var spindleButtonLabelWidth: CGFloat? {
        get { self[SpindleButtonLabelWidthKey.self] }
        set { self[SpindleButtonLabelWidthKey.self] = newValue }
    }

    var spindleButtonLabelMinWidth: CGFloat? {
        get { self[SpindleButtonLabelMinWidthKey.self] }
        set { self[SpindleButtonLabelMinWidthKey.self] = newValue }
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
