//
//  SpindleSubtleButton.swift
//
//
//  Created by 小田島 直樹 on 8/31/24.
//

import SpindleColor
import SwiftUI

fileprivate extension SpindleSubtleButton {
    struct SwiftUIButtonStyle: ButtonStyle {
        @Environment(\.isEnabled) private var isEnabled: Bool
        
        func makeBody(configuration: Configuration) -> some View {
            configuration.label
                .opacity(opacity(isPressed: configuration.isPressed))
        }
        
        private func opacity(isPressed: Bool) -> CGFloat {
            switch (isPressed, isEnabled) {
            case (false, true):
                1.0
            case (true, true):
                0.6
            case (_, false):
                0.3
            }
        }
    }
}

public struct SpindleSubtleButton: View {
    // 20ptのフォントサイズを仮定し、ダイナミックタイプ適用時の倍率のベースとする
    @ScaledMetric private var defaultSize: CGFloat = 20.0
    @Environment(\.spindleSubtleButtonFontSize) private var fontSize: CGFloat
    private var scaledFontSize: CGFloat {
        defaultSize / 20.0 * fontSize
    }
    private let title: String
    private let action: () -> Void
    
    public init(
        _ title: String,
        action: @escaping () -> Void
    ) {
        self.title = title
        self.action = action
    }
    
    public var body: some View {
        Button(action: action) {
            SpindleText(title)
                .spindleTextFont(.hiraginoSansW6(fixedSize: scaledFontSize))
                .multilineTextAlignment(.center)
                .foregroundStyle(Color.Spindle.Text.mediumEmphasis)
        }
        .buttonStyle(SwiftUIButtonStyle())
    }
}

#Preview {
    VStack {
        SpindleSubtleButton("Subtle Button") {}
        
        SpindleSubtleButton("Subtle Button") {}
            .disabled(true)
    }
}
