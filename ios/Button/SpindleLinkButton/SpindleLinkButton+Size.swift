//
//  SpindleLinkButton+Size.swift
//
//
//  Created by 小田島 直樹 on 8/31/24.
//

import SwiftUI

fileprivate extension SpindleLinkButton {
    enum SizeKey: EnvironmentKey {
        static let defaultValue: CGFloat = 16
    }
}

extension EnvironmentValues {
    var spindleLinkButtonSize: CGFloat {
        get { self[SpindleLinkButton.SizeKey.self] }
        set { self[SpindleLinkButton.SizeKey.self] = newValue }
    }
}

public extension View {
    /// SpindleLinkButtonのサイズ（フォント、アイコン）を指定する
    func spindleLinkButtonSize(_ size: CGFloat) -> some View {
        environment(\.spindleLinkButtonSize, size)
    }
}
