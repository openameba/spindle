//
//  SpindleLinkButton+Style.swift
//
//
//  Created by 小田島 直樹 on 8/31/24.
//

import Color
import SwiftUI

public extension SpindleLinkButton {
    enum Style {
        case text
        case subtle
    }
}

extension SpindleLinkButton.Style {
    var iconForegroundStyle: some ShapeStyle {
        switch self {
        case .text:
            Color.Spindle.Object.accentPrimary
        case .subtle:
            Color.Spindle.Object.lowEmphasis
        }
    }
    
    var titleForegroundStyle: some ShapeStyle {
        switch self {
        case .text:
            Color.Spindle.Text.accentPrimary
        case .subtle:
            Color.Spindle.Text.lowEmphasis
        }
    }
}

extension SpindleLinkButton.Style: EnvironmentKey {
    public static let defaultValue: SpindleLinkButton.Style = .text
}

extension EnvironmentValues {
    var spindleLinkButtonStyle: SpindleLinkButton.Style {
        get { self[SpindleLinkButton.Style.self] }
        set { self[SpindleLinkButton.Style.self] = newValue }
    }
}

public extension View {
    /// SpindleLinkButtonのスタイルを指定する
    func spindleLinkButtonStyle(_ style: SpindleLinkButton.Style) -> some View {
        environment(\.spindleLinkButtonStyle, style)
    }
}

