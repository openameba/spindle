//
//  SpindleTextField+Notes.swift
//  
//
//  Created by 小田島 直樹 on 9/2/24.
//

import SwiftUI

fileprivate extension SpindleTextField {
    struct NotesKey: EnvironmentKey {
        static let defaultValue: [String] = []
    }
}

extension EnvironmentValues {
    var spindleTextFieldNotes: [String] {
        get { self[SpindleTextField.NotesKey.self] }
        set { self[SpindleTextField.NotesKey.self] = newValue }
    }
}

public extension View {
    /// SpindleTextFieldに注釈のラベルを設定する
    func spindleTextFieldNotes(_ notes: [String]) -> some View {
        self.environment(\.spindleTextFieldNotes, notes)
    }
}
