//
//  SpindleTextButton.swift
//
//
//  Created by 小田島 直樹 on 8/6/24.
//

import Icon
import SwiftUI

fileprivate extension SpindleLinkButton {
    struct SwiftUIButtonStyle: ButtonStyle {
        @Environment(\.isEnabled) private var isEnabled
        
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

public struct SpindleLinkButton: View {
    // 20ptのフォントサイズを仮定し、ダイナミックタイプ適用時の倍率のベースとする
    @ScaledMetric private var defaultSize: CGFloat = 20.0
    private var scaledFontSize: CGFloat {
        defaultSize / 20.0 * 16.0
    }
    @Environment(\.spindleLinkButtonStyle) private var style: SpindleLinkButton.Style
    @Environment(\.spindleLinkButtonIconAlignment) private var iconAlignment: SpindleLinkButton.IconAlignment
    private let title: String
    private let icon: SpindleIconResource
    private let action: () -> Void
    
    public init(
        title: String,
        icon: SpindleIconResource,
        action: @escaping () -> Void
    ) {
        self.title = title
        self.icon = icon
        self.action = action
    }
    
    public var body: some View {
        Button(action: action) {
            HStack(spacing: 4) {
                if case .leading = iconAlignment {
                    iconImage
                }
                
                titleText
                
                if case .trailing = iconAlignment {
                    iconImage
                }
            }
        }
        .buttonStyle(SwiftUIButtonStyle())
    }
    
    @ViewBuilder
    private var iconImage: some View {
        let size = scaledFontSize * iconAlignment.iconScale
        Image(icon.assetName, bundle: icon.bundle)
            .resizable()
            .frame(width: size, height: size)
            .foregroundStyle(style.iconForegroundStyle)
    }
    
    @ViewBuilder
    private var titleText: some View {
        let lineHeight = scaledFontSize * 1.3
        Text(title)
            .font(.custom("HiraginoSans-W6", fixedSize: scaledFontSize))
            .lineSpacing(lineHeight - scaledFontSize)
            .padding(.vertical, (lineHeight - scaledFontSize) / 2)
            .multilineTextAlignment(.center)
            .foregroundStyle(style.titleForegroundStyle)
    }
}

#if DEBUG

private struct PreviewView: View {
    var body: some View {
        VStack {
            SpindleLinkButton(title: "Link Button", icon: .chevronRightBold) {}
            
            SpindleLinkButton(title: "Link Button", icon: .checkCircleFill) {}
                .spindleLinkButtonIconAlignment(.leading)
            
            SpindleLinkButton(title: "Subtle Lonk", icon: .chevronRightBold) {}
                .spindleLinkButtonStyle(.subtle)
            
            SpindleLinkButton(title: "Subtle Lonk", icon: .checkCircleFill) {}
                .spindleLinkButtonStyle(.subtle)
                .spindleLinkButtonIconAlignment(.leading)
        }
    }
}

#Preview("Enabled") {
    PreviewView()
}

#Preview("Disabled") {
    PreviewView()
        .disabled(true)
}

#endif
