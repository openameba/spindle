//
//  SpindleButton.swift
//
//
//  Created by 小田島 直樹 on 7/20/24.
//

import Icon
import SwiftUI

fileprivate extension SpindleButton {
    struct Style: ButtonStyle {
        @Environment(\.isEnabled) private var isEnabled
        @Environment(\.spindleButtonLabelWidth) private var labelWidth
        @Environment(\.spindleButtonLabelMinWidth) private var labelMinWidth
        @Environment(\.spindleButtonStyle) private var style
        @Environment(\.spindleButtonSize) private var size
        
        func makeBody(configuration: Configuration) -> some View {
            let clipShape = Capsule()
            return configuration.label
                .padding(.vertical, size.verticalEdgePadding)
                .padding(.horizontal, size.horizontalEdgePadding)
                .frame(minHeight: size.minHeight)
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
                .frame(width: labelWidth)
                .frame(minWidth: labelMinWidth)
                .contentShape(Rectangle())
                .compositingGroup()
                .opacity(isEnabled ? 1.0 : 0.3)
        }
    }
}

public struct SpindleButton: View {
    // 30ptのフォントサイズのスケール具合をアイコンにも適用する
    @ScaledMetric private var iconScaleSource: CGFloat = 30.0
    private var scaledIconSize: CGFloat {
        iconScaleSource / 30.0 * size.iconSize
    }
    @Environment(\.spindleButtonStyle) private var style
    @Environment(\.spindleButtonSize) private var size
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
                titleText
            }
        }
        .buttonStyle(SpindleButton.Style())
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
    
    private var titleText: some View {
        Text(title)
            .font(.custom("HiraginoSans-W6", size: size.fontSize))
            .foregroundStyle(style.titleForegroundStyle)
    }
}

#Preview {
    VStack(alignment: .center) {
        SpindleButton("Button", icon: .abemakun) {}
            .spindleButtonStyle(.contained)
            .spindleButtonLabelMinWidth(200)
        
        SpindleButton("Button", icon: .abemakun) {}
            .spindleButtonStyle(.outlined)
            .spindleButtonLabelMinWidth(100)
        
        SpindleButton("ButtonButtonButton", icon: .abemakun) {}
            .spindleButtonStyle(.lighted)
        
        SpindleButton("ButtonButtonButtonButtonButton", icon: .abemakun) {}
            .spindleButtonStyle(.neutral)
            .lineLimit(1)
            .frame(maxWidth: 200)
        
        SpindleButton("ButtonButtonButtonButtonButtonButton", icon: .abemakun) {}
            .spindleButtonStyle(.danger)
            .spindleButtonLabelWidth(200)
    }
    .spindleButtonSize(.large)
    .disabled(false)
}
