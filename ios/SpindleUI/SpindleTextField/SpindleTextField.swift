//
//  SpindleTextField.swift
//
//
//  Created by 小田島 直樹 on 9/1/24.
//

import SpindleColor
import SpindleIcon
import SwiftUI

public struct SpindleTextField: View {
    @ScaledMetric private var labelFontSize: CGFloat = 14
    @ScaledMetric private var requiredLabelFontSize: CGFloat = 12
    @ScaledMetric private var ruleFontSize: CGFloat = 11
    @ScaledMetric private var textFontSize: CGFloat = 16
    @ScaledMetric private var counterFontSize: CGFloat = 11
    @ScaledMetric private var errorFontSize: CGFloat = 12
    @ScaledMetric private var errorIconSize: CGFloat = 16
    @ScaledMetric private var notesFontSize: CGFloat = 11
    @FocusState private var isFocused: Bool
    @Environment(\.spindleTextFieldRequiredLabelType) private var requiredLabelType: SpindleTextField.RequiredLabelType?
    @Environment(\.spindleTextFieldRule) private var rule: String?
    @Environment(\.spindleTextFieldMaxLength) private var maxLength: Int?
    @Environment(\.spindleTextFieldErrors) private var errors: [String]
    @Environment(\.spindleTextFieldNotes) private var notes: [String]
    private let label: String
    private let placeholder: String
    private let text: Binding<String>
    // エラーテキストがある or 文字数オーバー
    private var isError: Bool {
        if !errors.isEmpty {
            true
        } else if let maxLength {
            text.wrappedValue.count > maxLength
        } else {
            false
        }
    }
    
    public init(
        label: String,
        placeholder: String,
        text: Binding<String>
    ) {
        self.label = label
        self.placeholder = placeholder
        self.text = text
    }
    
    public var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            VStack(alignment: .leading, spacing: 12) {
                labelView
                textFieldView
            }
            counterView
            errorTextsView
            notesView
        }
    }
    
    /// ラベル + ルール + 必須ラベル
    private var labelView: some View {
        VStack(alignment: .leading, spacing: 4) {
            HStack(spacing: 8) {
                SpindleText(label)
                    .spindleTextFont(.hiraginoSansW6(fixedSize: labelFontSize))
                    .spindleTextLineHeightMultiple(1.4)
                    .foregroundStyle(Color.Spindle.Text.mediumEmphasis)
                
                if let requiredLabelType {
                    let (textColor, backgroundColor) = switch requiredLabelType {
                    case .neutral:
                        (Color.Spindle.Text.mediumEmphasis, Color.Spindle.Surface.tertiary)
                    case .caution:
                        (Color.Spindle.Text.highEmphasisOnInverse, Color.Spindle.Surface.caution)
                    }
                    SpindleText("必須")
                        .spindleTextFont(.hiraginoSansW6(fixedSize: requiredLabelFontSize))
                        .spindleTextLineHeightMultiple(1.1)
                        .foregroundStyle(textColor)
                        .padding(.vertical, 2)
                        .padding(.horizontal, 4)
                        .background(backgroundColor)
                        .clipShape(RoundedRectangle(cornerRadius: 4))
                }
            }
            
            if let rule {
                SpindleText(rule)
                    .spindleTextFont(.hiraginoSansW3(fixedSize: ruleFontSize))
                    .spindleTextLineHeightMultiple(1.4)
                    .foregroundStyle(Color.Spindle.Text.lowEmphasis)
            }
        }
    }
    
    /// プレースホルダー + テキストフィールド
    @ViewBuilder
    private var textFieldView: some View {
        let (backgroundColor, borderColor) = switch (isError, isFocused, text.wrappedValue.isEmpty) {
        case (false, true, _), (false, false, false):
            // エラーなしでフォーカス中 or エラーなしでフォーカスなしでテキストがある
            (Color.Spindle.Surface.primary, Color.Spindle.Border.highEmphasis)
        case (false, false, true):
            // エラーなしでフォーカスなしでテキストが空
            (Color.Spindle.Surface.primary, Color.Spindle.Border.mediumEmphasis)
        case (true, true, _):
            // エラーでフォーカス中
            (Color.Spindle.Surface.primary, Color.Spindle.Border.caution)
        case (true, false, _):
            // エラーでフォーカスなし
            (Color.Spindle.Surface.cautionLight, Color.Spindle.Border.caution)
        }
        let clipShape = RoundedRectangle(cornerRadius: 8)
        ZStack(alignment: .leading) {
            if text.wrappedValue.isEmpty {
                SpindleText(placeholder)
                    .spindleTextFont(.hiraginoSansW3(fixedSize: textFontSize))
                    .spindleTextLineHeightMultiple(1.4)
                    .foregroundStyle(Color.Spindle.Text.disable)
            }
            
            TextField("", text: text)
                .focused($isFocused)
                .font(SpindleText.Font.hiraginoSansW3(fixedSize: textFontSize).swiftUIFont)
                .foregroundStyle(Color.Spindle.Text.highEmphasis)
        }
        .padding(.vertical, 13)
        .padding(.leading, 16)
        .padding(.trailing, 12)
        .frame(minHeight: 48)
        .background(backgroundColor)
        .clipShape(clipShape)
        .overlay(
            clipShape
                .strokeBorder(borderColor, lineWidth: 1.0)
        )
        .onTapGesture {
            // テキストフィールドのタップ領域を枠全体に拡大
            isFocused = true
        }
    }
    
    /// 文字数カウンター。オーバーした時のエラー表示も行う
    @ViewBuilder
    private var counterView: some View {
        if let maxLength {
            let (text, textColor) = if text.wrappedValue.count > maxLength {
                (String(format: "%ld文字オーバー", text.wrappedValue.count - maxLength), Color.Spindle.Text.caution)
            } else {
                (String(format: "残り%ld文字", maxLength - text.wrappedValue.count), Color.Spindle.Text.lowEmphasis)
            }
            
            SpindleText(text)
                .spindleTextFont(.hiraginoSansW6(fixedSize: counterFontSize))
                .spindleTextLineHeightMultiple(1.4)
                .foregroundStyle(textColor)
        }
    }
    
    /// エラーテキスト。文字数オーバーの表示はここで行わない
    private var errorTextsView: some View {
        ForEach(errors, id: \.self) { errorText in
            HStack(alignment: .top, spacing: 4) {
                Image.SpindleIcon.exclamationmarkCircleFill
                    .resizable()
                    .frame(width: errorIconSize, height: errorIconSize)
                    .foregroundStyle(Color.Spindle.Object.caution)
                
                SpindleText(errorText)
                    .spindleTextFont(.hiraginoSansW6(fixedSize: errorFontSize))
                    .spindleTextLineHeightMultiple(1.4)
                    .foregroundStyle(Color.Spindle.Text.caution)
            }
        }
    }
    
    /// 注釈
    @ViewBuilder
    private var notesView: some View {
        let notes = notes.joined(separator: "\n")
        if !notes.isEmpty {
            SpindleText(notes)
                .spindleTextFont(.hiraginoSansW3(fixedSize: notesFontSize))
                .spindleTextLineHeightMultiple(1.6)
                .foregroundStyle(Color.Spindle.Text.lowEmphasis)
        }
    }
}

#if DEBUG

private struct PreviewView: View {
    @State private var text: String = ""
    private var errorTexts: [String] {
        guard !text.isEmpty else { return [] }
        let regex = try! NSRegularExpression(pattern: "^[a-zA-Z0-9]*$")
        if regex.matches(in: text, range: NSRange(0..<text.count)).count != 1 {
            return ["半角英数のみ利用できます"]
        } else {
            return []
        }
    }
    
    var body: some View {
        SpindleTextField(
            label: "---を入力",
            placeholder: "---",
            text: $text
        )
        .spindleTextFieldRequiredLabelType(.caution)
        .spindleTextFieldRule("※半角英数")
        .spindleTextFieldErrors(errorTexts)
        .spindleTextFieldNotes(["※---", "※---"])
        .spindleTextFieldMaximumLength(10)
        .padding()
    }
}

#Preview {
    PreviewView()
}

#endif
