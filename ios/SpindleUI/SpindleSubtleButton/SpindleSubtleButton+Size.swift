//
//  SpindleSubtleButton+Size.swift
//  
//
//  Created by 小田島 直樹 on 8/31/24.
//

import SwiftUI

fileprivate extension SpindleSubtleButton {
    enum FontSizeKey: EnvironmentKey {
        static let defaultValue: CGFloat = 16
    }
}

extension EnvironmentValues {
    var spindleSubtleButtonFontSize: CGFloat {
        get { self[SpindleSubtleButton.FontSizeKey.self] }
        set { self[SpindleSubtleButton.FontSizeKey.self] = newValue }
    }
}

public extension View {
    /// SpindleSubtleButtonのフォントサイズを指定する
    func spindleSubtleButtonFontSize(_ size: CGFloat) -> some View {
        environment(\.spindleSubtleButtonFontSize, size)
    }
}
