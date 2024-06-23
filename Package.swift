// swift-tools-version: 5.10
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Spindle",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "Spindle",
            targets: [
                "Color",
                "Icons",
            ]
        ),
    ],
    targets: [
        .target(
            name: "Color",
            path: "ios/Color"
        ),
        .target(
            name: "Icons",
            path: "ios/Icons",
            exclude: [
                "generate_SpindleIcon.sh"
            ]
        ),
    ]
)
