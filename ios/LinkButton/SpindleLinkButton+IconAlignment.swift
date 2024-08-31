//
//  SpindleLinkButton+IconAlignment.swift
//
//
//  Created by 小田島 直樹 on 8/31/24.
//

import SwiftUI

public extension SpindleLinkButton {
    enum IconAlignment {
        case leading
        case trailing
    }
}

extension SpindleLinkButton.IconAlignment {
    var iconScale: CGFloat {
        switch self {
        case .leading:
            1.3
        case .trailing:
            1.0
        }
    }
}

extension SpindleLinkButton.IconAlignment: EnvironmentKey {
    public static let defaultValue: SpindleLinkButton.IconAlignment = .trailing
}

extension EnvironmentValues {
    var spindleLinkButtonIconAlignment: SpindleLinkButton.IconAlignment {
        get { self[SpindleLinkButton.IconAlignment.self] }
        set { self[SpindleLinkButton.IconAlignment.self] = newValue }
    }
}

public extension View {
    /// SpindleLinkButtonのアイコンの位置を指定する
    func spindleLinkButtonIconAlignment(_ iconAlignment: SpindleLinkButton.IconAlignment) -> some View {
        environment(\.spindleLinkButtonIconAlignment, iconAlignment)
    }
}
