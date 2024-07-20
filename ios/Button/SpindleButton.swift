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
        private let style: SpindleButtonStyle
        private let size: SpindleButtonSize
        
        init(style: SpindleButtonStyle, size: SpindleButtonSize) {
            self.style = style
            self.size = size
        }
        
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
    @ScaledMetric private var scaledIconSize: CGFloat
    private let style: SpindleButtonStyle
    private let size: SpindleButtonSize
    private let icon: SpindleIcon?
    private let title: String
    private let action: () -> Void
    
    public init(
        style: SpindleButtonStyle,
        size: SpindleButtonSize,
        icon: SpindleIcon? = nil,
        title: String,
        action: @escaping () -> Void
    ) {
        self.style = style
        self.size = size
        self.icon = icon
        self.title = title
        self.action = action
        self._scaledIconSize = .init(wrappedValue: size.iconSize)
    }
    
    public var body: some View {
        Button(action: action) {
            HStack(spacing: size.iconPadding) {
                iconImage
                titleText
            }
        }
        .buttonStyle(Style(style: style, size: size))
    }
    
    @ViewBuilder
    private var iconImage: some View {
        if let icon {
            Image(spindleIcon: icon)
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
        SpindleButton(
            style: .contained,
            size: .large,
            icon: .abemakun,
            title: "Button"
        ) {
        }
        .spindleButtonLabelMinWidth(200)
        
        SpindleButton(
            style: .outlined,
            size: .large,
            icon: .abemakun,
            title: "Button"
        ) {
        }
        .spindleButtonLabelMinWidth(100)
        
        SpindleButton(
            style: .lighted,
            size: .large,
            icon: .abemakun,
            title: "ButtonButtonButton"
        ) {
        }
        
        SpindleButton(
            style: .neutral,
            size: .large,
            icon: .abemakun,
            title: "ButtonButtonButtonButtonButton"
        ) {
        }
        .lineLimit(1)
        .frame(maxWidth: 200)
        
        SpindleButton(
            style: .danger,
            size: .large,
            icon: .abemakun,
            title: "ButtonButtonButtonButtonButtonButton"
        ) {
        }
        .spindleButtonLabelWidth(200)
    }
    .disabled(false)
}
