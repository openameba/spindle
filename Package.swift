// swift-tools-version: 5.10
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

enum TargetInfo: CaseIterable {
    case button
    case color
    case icon
    
    var name: String {
        switch self {
        case .button: "Button"
        case .color: "Color"
        case .icon: "Icon"
        }
    }
    
    var path: String {
        switch self {
        case .button: "ios/Button"
        case .color: "ios/Color"
        case .icon: "ios/Icon"
        }
    }
}

extension Product {
    static var spindle: Product {
        .library(name: "Spindle", targets: TargetInfo.allCases.map(\.name))
    }
}

extension Target.Dependency {
    static var color: Target.Dependency {
        .target(name: TargetInfo.color.name)
    }
    
    static var icon: Target.Dependency {
        .target(name: TargetInfo.icon.name)
    }
}

extension Target {
    static var button: Target {
        let info = TargetInfo.button
        return .target(
            name: info.name,
            dependencies: [.color, .icon],
            path: info.path
        )
    }
    
    static var color: Target {
        let info = TargetInfo.color
        return .target(
            name: info.name,
            path: info.path
        )
    }
    
    static var icon: Target {
        let info = TargetInfo.icon
        return .target(
            name: info.name,
            path: info.path,
            exclude: [
                "generate_SpindleIcon.sh",
            ]
        )
    }
}

let package = Package(
    name: "Spindle",
    platforms: [.iOS(.v15)],
    products: [.spindle],
    targets: [
        .button,
        .color,
        .icon,
    ]
)
