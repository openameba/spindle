// swift-tools-version: 5.10
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let spindle: Product = .library(
    name: "Spindle",
    targets: [
        "Color",
        "Icon"
    ]
)
let color: Target = .target(name: "Color", path: "ios/Color")
let icon: Target = .target(
    name: "Icon",
    path: "ios/Icon",
    exclude: [
        "generate_SpindleIcon.sh"
    ]
)

let package = Package(
    name: "Spindle",
    platforms: [.iOS(.v15)],
    products: [spindle],
    targets: [
        color,
        icon,
    ]
)
