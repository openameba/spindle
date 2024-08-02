//
//  SpindleButtonStyle.swift
//
//
//  Created by 小田島 直樹 on 7/20/24.
//

import Color
import SwiftUI

public enum SpindleButtonStyle {
    case contained
    case outlined
    case neutral
    case lighted
    case danger
}

extension SpindleButtonStyle {
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

extension SpindleButtonStyle: EnvironmentKey {
    public static let defaultValue: SpindleButtonStyle = .contained
}

extension EnvironmentValues {
    var spindleButtonStyle: SpindleButtonStyle {
        get { self[SpindleButtonStyle.self] }
        set { self[SpindleButtonStyle.self] = newValue }
    }
}

public extension View {
    /// SpindleButtonのスタイルを指定する
    func spindleButtonStyle(_ style: SpindleButtonStyle) -> some View {
        environment(\.spindleButtonStyle, style)
    }
}
