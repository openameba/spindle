//
//  SpindleText+Font.swift
//
//
//  Created by 小田島 直樹 on 9/1/24.
//

import SwiftUI

extension SpindleText {
    enum Font {
        case hiraginoSansW3(fixedSize: CGFloat)
        case hiraginoSansW6(fixedSize: CGFloat)
    }
}

extension SpindleText.Font {
    var swiftUIFont: Font {
        switch self {
        case .hiraginoSansW3(let fixedSize):
            Font.custom("HiraginoSans-W3", fixedSize: fixedSize)
        case .hiraginoSansW6(let fixedSize):
            Font.custom("HiraginoSans-W6", fixedSize: fixedSize)
        }
    }
    
    var size: CGFloat {
        switch self {
        case .hiraginoSansW3(let fixedSize), .hiraginoSansW6(let fixedSize):
            fixedSize
        }
    }
}

extension SpindleText.Font: EnvironmentKey {
    static let defaultValue: SpindleText.Font = .hiraginoSansW3(fixedSize: 14)
}

extension EnvironmentValues {
    var spindleTextFont: SpindleText.Font {
        get { self[SpindleText.Font.self] }
        set { self[SpindleText.Font.self] = newValue }
    }
}

extension View {
    func spindleTextFont(_ font: SpindleText.Font) -> some View {
        environment(\.spindleTextFont, font)
    }
}
