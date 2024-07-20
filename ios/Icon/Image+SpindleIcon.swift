//
//  Image+SpindleIcon.swift
//
//
//  Created by 小田島 直樹 on 6/23/24.
//

import SwiftUI

public extension Image {
    init(spindleIcon: SpindleIcon) {
        self.init(spindleIcon.assetName, bundle: Bundle.module)
    }
}
