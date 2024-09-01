// swift-tools-version: 5.10
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

enum TargetInfo: CaseIterable {
    case color
    case icon
    case ui
    
    var name: String {
        switch self {
        case .color: "SpindleColor"
        case .icon: "SpindleIcon"
        case .ui: "SpindleUI"
        }
    }
    
    var path: String {
        switch self {
        case .color: "ios/SpindleColor"
        case .icon: "ios/SpindleIcon"
        case .ui: "ios/SpindleUI"
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
    
    static var ui: Target {
        let info = TargetInfo.ui
        return .target(
            name: info.name,
            dependencies: [.color, .icon],
            path: info.path
        )
    }
}

let package = Package(
    name: "Spindle",
    platforms: [.iOS(.v15)],
    products: [.spindle],
    targets: [
        .color,
        .icon,
        .ui,
    ]
)
