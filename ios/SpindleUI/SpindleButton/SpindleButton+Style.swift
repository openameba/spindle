//
//  SpindleButton+Style.swift
//
//
//  Created by 小田島 直樹 on 7/20/24.
//

import SpindleColor
import SwiftUI

public extension SpindleButton {
    enum Style {
        case contained
        case outlined
        case neutral
        case lighted
        case danger
    }
}

extension SpindleButton.Style {
    var iconForegroundStyle: some ShapeStyle {
        switch self {
        case .contained:
            Color.Spindle.Object.highEmphasisOnGreen
        case .outlined:
            Color.Spindle.Object.accentPrimary
        case .neutral:
            Color.Spindle.Object.mediumEmphasis
        case .lighted:
            Color.Spindle.Object.accentPrimary
        case .danger:
            Color.Spindle.Object.caution
        }
    }
    
    var titleForegroundStyle: some ShapeStyle {
        switch self {
        case .contained:
            Color.Spindle.Text.highEmphasisOnGreen
        case .outlined:
            Color.Spindle.Text.accentPrimary
        case .neutral:
            Color.Spindle.Text.mediumEmphasis
        case .lighted:
            Color.Spindle.Text.accentPrimary
        case .danger:
            Color.Spindle.Text.caution
        }
    }
    
    var borderShapeStyle: some ShapeStyle {
        switch self {
        case .outlined:
            Color.Spindle.Border.accentPrimary
        case .danger:
            Color.Spindle.Border.caution
        case .contained, .neutral, .lighted:
            Color.clear
        }
    }
    
    var background: some View {
        switch self {
        case .contained:
            Color.Spindle.Surface.accentPrimary
        case .neutral:
            Color.Spindle.Surface.tertiary
        case .lighted:
            Color.Spindle.Surface.accentPrimaryLight
        case .outlined, .danger:
            Color.clear
        }
    }
    
    var highlightedBackground: some View {
        switch self {
        case .contained:
            Color.Spindle.Highlighted.containedButton
        case .outlined:
            Color.Spindle.Highlighted.outlinedButton
        case .neutral:
            Color.Spindle.Highlighted.neutralButton
        case .lighted:
            Color.Spindle.Highlighted.lightedButton
        case .danger:
            Color.Spindle.Highlighted.cautionButton
        }
    }
}

extension SpindleButton.Style: EnvironmentKey {
    public static let defaultValue: SpindleButton.Style = .contained
}

extension EnvironmentValues {
    var spindleButtonStyle: SpindleButton.Style {
        get { self[SpindleButton.Style.self] }
        set { self[SpindleButton.Style.self] = newValue }
    }
}

public extension View {
    /// SpindleButtonのスタイルを指定する
    func spindleButtonStyle(_ style: SpindleButton.Style) -> some View {
        environment(\.spindleButtonStyle, style)
    }
}
