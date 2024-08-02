//
//  SpindleButtonSize.swift
//
//
//  Created by 小田島 直樹 on 7/20/24.
//

import SwiftUI

public enum SpindleButtonSize {
    case large
    case medium
    case small
}

extension SpindleButtonSize {
    var minHeight: CGFloat {
        switch self {
        case .large:
            48
        case .medium:
            40
        case .small:
            32
        }
    }
    
    var iconSize: CGFloat {
        switch self {
        case .large:
            22
        case .medium:
            20
        case .small:
            16
        }
    }
    
    var iconPadding: CGFloat {
        switch self {
        case .large:
            6
        case .medium:
            4
        case .small:
            2
        }
    }
    
    var verticalEdgePadding: CGFloat {
        8
    }
    
    var horizontalEdgePadding: CGFloat {
        switch self {
        case .large, .medium:
            16
        case .small:
            10
        }
    }
    
    var fontSize: CGFloat {
        switch self {
        case .large:
            16
        case .medium:
            14
        case .small:
            13
        }
    }
}

extension SpindleButtonSize: EnvironmentKey {
    public static let defaultValue: SpindleButtonSize = .medium
}

extension EnvironmentValues {
    var spindleButtonSize: SpindleButtonSize {
        get { self[SpindleButtonSize.self] }
        set { self[SpindleButtonSize.self] = newValue }
    }
}

public extension View {
    /// SpindleButtonのサイズを指定する
    func spindleButtonSize(_ size: SpindleButtonSize) -> some View {
        environment(\.spindleButtonSize, size)
    }
}
