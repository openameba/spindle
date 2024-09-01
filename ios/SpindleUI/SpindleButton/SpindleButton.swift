//
//  SpindleButton.swift
//
//
//  Created by 小田島 直樹 on 7/20/24.
//

import SpindleIcon
import SwiftUI

fileprivate extension SpindleButton {
    struct SwiftUIButtonStyle: ButtonStyle {
        @Environment(\.isEnabled) private var isEnabled: Bool
        @Environment(\.spindleButtonLabelWidth) private var labelWidth: CGFloat?
        @Environment(\.spindleButtonLabelMinWidth) private var labelMinWidth: CGFloat?
        @Environment(\.spindleButtonStyle) private var style: SpindleButton.Style
        @Environment(\.spindleButtonSize) private var size: SpindleButton.Size
        
        func makeBody(configuration: Configuration) -> some View {
            let clipShape = Capsule()
            return configuration.label
                .padding(.vertical, size.verticalEdgePadding)
                .padding(.horizontal, size.horizontalEdgePadding)
                .frame(width: labelWidth)
                .frame(minWidth: labelMinWidth, minHeight: size.minHeight)
                .background {
                    if configuration.isPressed {
                        style.highlightedBackground
                    } else {
                        style.background
                    }
                }
                .clipShape(clipShape)
                .overlay {
                    clipShape
                        .stroke(style.borderShapeStyle, lineWidth: 2.0)
                }
                .contentShape(Rectangle())
                .compositingGroup()
                .opacity(isEnabled ? 1.0 : 0.3)
        }
    }
}

public struct SpindleButton: View {
    // 20ptのフォントサイズを仮定し、ダイナミックタイプ適用時の倍率のベースとする
    @ScaledMetric private var defaultSize: CGFloat = 20.0
    private var scaledFontSize: CGFloat {
        defaultSize / 20.0 * size.fontSize
    }
    private var scaledIconSize: CGFloat {
        defaultSize / 20.0 * size.iconSize
    }
    @Environment(\.spindleButtonStyle) private var style: SpindleButton.Style
    @Environment(\.spindleButtonSize) private var size: SpindleButton.Size
    private let title: String
    private let icon: SpindleIconResource?
    private let action: () -> Void
    
    public init(
        _ title: String,
        action: @escaping () -> Void
    ) {
        self.title = title
        self.icon = nil
        self.action = action
    }
    
    public init(
        _ title: String,
        icon: SpindleIconResource,
        action: @escaping () -> Void
    ) {
        self.icon = icon
        self.title = title
        self.action = action
    }
    
    public var body: some View {
        Button(action: action) {
            HStack(spacing: size.iconPadding) {
                iconImage
                SpindleText(title)
                    .spindleTextFont(.hiraginoSansW6(fixedSize: scaledFontSize))
                    .multilineTextAlignment(.center)
                    .foregroundStyle(style.titleForegroundStyle)
            }
        }
        .buttonStyle(SwiftUIButtonStyle())
    }
    
    @ViewBuilder
    private var iconImage: some View {
        if let icon {
            Image(icon.assetName, bundle: icon.bundle)
                .resizable()
                .frame(
                    width: scaledIconSize,
                    height: scaledIconSize
                )
                .foregroundStyle(style.iconForegroundStyle)
        }
    }
}

#if DEBUG

private struct PreviewView: View {
    var body: some View {
        VStack {
            SpindleButton("Button", icon: .plusBold) {}
                .spindleButtonSize(.large)
                .spindleButtonLabelWidth(343)
            
            SpindleButton("Button", icon: .plusBold) {}
                .spindleButtonSize(.large)
                .spindleButtonLabelMinWidth(240)
            
            SpindleButton("Button", icon: .plusBold) {}
                .spindleButtonSize(.large)
                .spindleButtonLabelMinWidth(132)
            
            Group {
                SpindleButton("Button", icon: .plusBold) {}
                    .spindleButtonSize(.large)
                    .spindleButtonLabelWidth(343)
                
                SpindleButton("Button", icon: .plusBold) {}
                    .spindleButtonSize(.large)
                    .spindleButtonLabelMinWidth(240)
                
                SpindleButton("Button", icon: .plusBold) {}
                    .spindleButtonSize(.large)
                    .spindleButtonLabelMinWidth(132)
            }
            .disabled(true)
        }
    }
}

#Preview("Contained") {
    PreviewView()
        .spindleButtonStyle(.contained)
}

#Preview("Outlined") {
    PreviewView()
        .spindleButtonStyle(.outlined)
}

#Preview("Neutral") {
    PreviewView()
        .spindleButtonStyle(.neutral)
}

#Preview("Lighted") {
    PreviewView()
        .spindleButtonStyle(.lighted)
}

#Preview("Danger") {
    PreviewView()
        .spindleButtonStyle(.danger)
}

#endif
