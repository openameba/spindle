//
//  SpindleText.swift
//
//
//  Created by 小田島 直樹 on 9/1/24.
//

import SwiftUI

struct SpindleText: View {
    @Environment(\.spindleTextFont) private var font: SpindleText.Font
    @Environment(\.spindleTextLineHeightMultiple) private var lineHeightMultiple: CGFloat
    let content: String
    
    var lineHeight: CGFloat { lineHeightMultiple * font.size }
    
    init(_ content: String) {
        self.content = content
    }
    
    var body: some View {
        Text(content)
            .font(font.swiftUIFont)
            .lineSpacing(lineHeight - font.size)
            .padding(.vertical, (lineHeight - font.size) / 2)
    }
}
