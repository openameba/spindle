//
//  CGColor+Primitive.swift
//
//
//  Created by 小田島 直樹 on 6/15/24.
//

import CoreGraphics

public extension CGColor {
    enum Primitive {}
}

// MARK: - Brand

public extension CGColor.Primitive {
    /// red: 0.18, green: 0.55, blue: 0.24, alpha: 1
    static var brandAmebaGreen: CGColor { CGColor(red: 0.18, green: 0.55, blue: 0.24, alpha: 1) }
    
    /// red: 0.0, green: 0.0, blue: 0.0, alpha: 1
    static var brandBlack: CGColor { CGColor(red: 0.0, green: 0.0, blue: 0.0, alpha: 1) }
    
    /// red: 0.96, green: 0.96, blue: 0.96, alpha: 1
    static var brandNeutralGray: CGColor { CGColor(red: 0.96, green: 0.96, blue: 0.96, alpha: 1) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 1
    static var brandWhite: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1) }
    
    /// red: 0.96, green: 0.88, blue: 0.0, alpha: 1
    static var brandYellow: CGColor { CGColor(red: 0.96, green: 0.88, blue: 0.0, alpha: 1) }
    
    /// red: 0.51, green: 0.75, blue: 0.16, alpha: 1
    static var brandYellowGreen: CGColor { CGColor(red: 0.51, green: 0.75, blue: 0.16, alpha: 1) }
}

// MARK: - Uranai Brand

public extension CGColor.Primitive {
    /// red: 0.46, green: 0.25, blue: 0.67, alpha: 1
    static var uranaiBrandAmebaPurple: CGColor { CGColor(red: 0.46, green: 0.25, blue: 0.67, alpha: 1) }
    
    /// red: 0.98, green: 0.97, blue: 0.96, alpha: 1
    static var uranaiBrandCream: CGColor { CGColor(red: 0.98, green: 0.97, blue: 0.96, alpha: 1) }
    
    /// red: 0.22, green: 0.12, blue: 0.4, alpha: 1
    static var uranaiBrandNavyBlue: CGColor { CGColor(red: 0.22, green: 0.12, blue: 0.4, alpha: 1) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 1
    static var uranaiBrandWhite: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1) }
}

// MARK: - Primary Green

public extension CGColor.Primitive {
    /// red: 0.06, green: 0.36, blue: 0.12, alpha: 1
    static var primaryGreen100: CGColor { CGColor(red: 0.06, green: 0.36, blue: 0.12, alpha: 1) }
    
    /// red: 0.09, green: 0.42, blue: 0.15, alpha: 1
    static var primaryGreen90: CGColor { CGColor(red: 0.09, green: 0.42, blue: 0.15, alpha: 1) }
    
    /// red: 0.14, green: 0.48, blue: 0.19, alpha: 1
    static var primaryGreen80: CGColor { CGColor(red: 0.14, green: 0.48, blue: 0.19, alpha: 1) }
    
    /// red: 0.16, green: 0.53, blue: 0.22, alpha: 1
    static var primaryGreen70: CGColor { CGColor(red: 0.16, green: 0.53, blue: 0.22, alpha: 1) }
    
    /// red: 0.22, green: 0.62, blue: 0.27, alpha: 1
    static var primaryGreen60: CGColor { CGColor(red: 0.22, green: 0.62, blue: 0.27, alpha: 1) }
    
    /// red: 0.25, green: 0.68, blue: 0.31, alpha: 1
    static var primaryGreen50: CGColor { CGColor(red: 0.25, green: 0.68, blue: 0.31, alpha: 1) }
    
    /// red: 0.37, green: 0.73, blue: 0.41, alpha: 1
    static var primaryGreen40: CGColor { CGColor(red: 0.37, green: 0.73, blue: 0.41, alpha: 1) }
    
    /// red: 0.48, green: 0.77, blue: 0.51, alpha: 1
    static var primaryGreen30: CGColor { CGColor(red: 0.48, green: 0.77, blue: 0.51, alpha: 1) }
    
    /// red: 0.63, green: 0.84, blue: 0.65, alpha: 1
    static var primaryGreen20: CGColor { CGColor(red: 0.63, green: 0.84, blue: 0.65, alpha: 1) }
    
    /// red: 0.78, green: 0.9, blue: 0.79, alpha: 1
    static var primaryGreen10: CGColor { CGColor(red: 0.78, green: 0.9, blue: 0.79, alpha: 1) }
    
    /// red: 0.91, green: 0.96, blue: 0.91, alpha: 1
    static var primaryGreen5: CGColor { CGColor(red: 0.91, green: 0.96, blue: 0.91, alpha: 1) }
}

// MARK: - Secondary Green

public extension CGColor.Primitive {
    /// red: 0.21, green: 0.4, blue: 0.0, alpha: 1
    static var secondaryGreen100: CGColor { CGColor(red: 0.21, green: 0.4, blue: 0.0, alpha: 1) }
    
    /// red: 0.26, green: 0.46, blue: 0.02, alpha: 1
    static var secondaryGreen90: CGColor { CGColor(red: 0.26, green: 0.46, blue: 0.02, alpha: 1) }
    
    /// red: 0.28, green: 0.49, blue: 0.0, alpha: 1
    static var secondaryGreen80: CGColor { CGColor(red: 0.28, green: 0.49, blue: 0.0, alpha: 1) }
    
    /// red: 0.37, green: 0.61, blue: 0.08, alpha: 1
    static var secondaryGreen70: CGColor { CGColor(red: 0.37, green: 0.61, blue: 0.08, alpha: 1) }
    
    /// red: 0.45, green: 0.68, blue: 0.13, alpha: 1
    static var secondaryGreen60: CGColor { CGColor(red: 0.45, green: 0.68, blue: 0.13, alpha: 1) }
    
    /// red: 0.51, green: 0.75, blue: 0.16, alpha: 1
    static var secondaryGreen50: CGColor { CGColor(red: 0.51, green: 0.75, blue: 0.16, alpha: 1) }
    
    /// red: 0.58, green: 0.78, blue: 0.3, alpha: 1
    static var secondaryGreen40: CGColor { CGColor(red: 0.58, green: 0.78, blue: 0.3, alpha: 1) }
    
    /// red: 0.66, green: 0.82, blue: 0.44, alpha: 1
    static var secondaryGreen30: CGColor { CGColor(red: 0.66, green: 0.82, blue: 0.44, alpha: 1) }
    
    /// red: 0.76, green: 0.87, blue: 0.6, alpha: 1
    static var secondaryGreen20: CGColor { CGColor(red: 0.76, green: 0.87, blue: 0.6, alpha: 1) }
    
    /// red: 0.85, green: 0.92, blue: 0.76, alpha: 1
    static var secondaryGreen10: CGColor { CGColor(red: 0.85, green: 0.92, blue: 0.76, alpha: 1) }
    
    /// red: 0.94, green: 0.97, blue: 0.9, alpha: 1
    static var secondaryGreen5: CGColor { CGColor(red: 0.94, green: 0.97, blue: 0.9, alpha: 1) }
}

// MARK: - Primary Purple

public extension CGColor.Primitive {
    /// red: 0.22, green: 0.12, blue: 0.4, alpha: 1
    static var primaryPurple100: CGColor { CGColor(red: 0.22, green: 0.12, blue: 0.4, alpha: 1) }
    
    /// red: 0.27, green: 0.13, blue: 0.51, alpha: 1
    static var primaryPurple90: CGColor { CGColor(red: 0.27, green: 0.13, blue: 0.51, alpha: 1) }
    
    /// red: 0.34, green: 0.17, blue: 0.57, alpha: 1
    static var primaryPurple80: CGColor { CGColor(red: 0.34, green: 0.17, blue: 0.57, alpha: 1) }
    
    /// red: 0.38, green: 0.19, blue: 0.61, alpha: 1
    static var primaryPurple70: CGColor { CGColor(red: 0.38, green: 0.19, blue: 0.61, alpha: 1) }
    
    /// red: 0.42, green: 0.23, blue: 0.64, alpha: 1
    static var primaryPurple60: CGColor { CGColor(red: 0.42, green: 0.23, blue: 0.64, alpha: 1) }
    
    /// red: 0.46, green: 0.25, blue: 0.67, alpha: 1
    static var primaryPurple50: CGColor { CGColor(red: 0.46, green: 0.25, blue: 0.67, alpha: 1) }
    
    /// red: 0.53, green: 0.36, blue: 0.72, alpha: 1
    static var primaryPurple40: CGColor { CGColor(red: 0.53, green: 0.36, blue: 0.72, alpha: 1) }
    
    /// red: 0.62, green: 0.47, blue: 0.77, alpha: 1
    static var primaryPurple30: CGColor { CGColor(red: 0.62, green: 0.47, blue: 0.77, alpha: 1) }
    
    /// red: 0.72, green: 0.63, blue: 0.84, alpha: 1
    static var primaryPurple20: CGColor { CGColor(red: 0.72, green: 0.63, blue: 0.84, alpha: 1) }
    
    /// red: 0.83, green: 0.78, blue: 0.9, alpha: 1
    static var primaryPurple10: CGColor { CGColor(red: 0.83, green: 0.78, blue: 0.9, alpha: 1) }
    
    /// red: 0.93, green: 0.91, blue: 0.96, alpha: 1
    static var primaryPurple5: CGColor { CGColor(red: 0.93, green: 0.91, blue: 0.96, alpha: 1) }
}

// MARK: - Gray

public extension CGColor.Primitive {
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 1
    static var gray100: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 1) }
    
    /// red: 0.08, green: 0.12, blue: 0.15, alpha: 1
    static var gray90: CGColor { CGColor(red: 0.08, green: 0.12, blue: 0.15, alpha: 1) }
    
    /// red: 0.22, green: 0.25, blue: 0.28, alpha: 1
    static var gray80: CGColor { CGColor(red: 0.22, green: 0.25, blue: 0.28, alpha: 1) }
    
    /// red: 0.27, green: 0.3, blue: 0.33, alpha: 1
    static var gray70: CGColor { CGColor(red: 0.27, green: 0.3, blue: 0.33, alpha: 1) }
    
    /// red: 0.41, green: 0.43, blue: 0.45, alpha: 1
    static var gray60: CGColor { CGColor(red: 0.41, green: 0.43, blue: 0.45, alpha: 1) }
    
    /// red: 0.55, green: 0.56, blue: 0.58, alpha: 1
    static var gray50: CGColor { CGColor(red: 0.55, green: 0.56, blue: 0.58, alpha: 1) }
    
    /// red: 0.61, green: 0.63, blue: 0.64, alpha: 1
    static var gray40: CGColor { CGColor(red: 0.61, green: 0.63, blue: 0.64, alpha: 1) }
    
    /// red: 0.71, green: 0.72, blue: 0.73, alpha: 1
    static var gray30: CGColor { CGColor(red: 0.71, green: 0.72, blue: 0.73, alpha: 1) }
    
    /// red: 0.85, green: 0.85, blue: 0.85, alpha: 1
    static var gray20: CGColor { CGColor(red: 0.85, green: 0.85, blue: 0.85, alpha: 1) }
    
    /// red: 0.92, green: 0.93, blue: 0.93, alpha: 1
    static var gray10: CGColor { CGColor(red: 0.92, green: 0.93, blue: 0.93, alpha: 1) }
    
    /// red: 0.96, green: 0.96, blue: 0.96, alpha: 1
    static var gray5: CGColor { CGColor(red: 0.96, green: 0.96, blue: 0.96, alpha: 1) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.95
    static var gray90Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.95) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.8
    static var gray80Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.8) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.74
    static var gray70Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.74) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.61
    static var gray60Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.61) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.47
    static var gray50Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.47) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.4
    static var gray40Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.4) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.3
    static var gray30Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.3) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.16
    static var gray20Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.16) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.08
    static var gray10Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.08) }
    
    /// red: 0.03, green: 0.07, blue: 0.1, alpha: 0.04
    static var gray5Alpha: CGColor { CGColor(red: 0.03, green: 0.07, blue: 0.1, alpha: 0.04) }
}

// MARK: - White

public extension CGColor.Primitive {
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 1
    static var white100: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.9
    static var white90Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.9) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.8
    static var white80Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.8) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.7
    static var white70Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.7) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.6
    static var white60Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.6) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.5
    static var white50Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.5) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.43
    static var white40Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.43) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.3
    static var white30Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.3) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.16
    static var white20Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.16) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.1
    static var white10Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.1) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 0.05
    static var white5Alpha: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.05) }
}

// MARK: - Black

public extension CGColor.Primitive {
    /// red: 0, green: 0, blue: 0, alpha: 1
    static var black100: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 1) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.9
    static var black90Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.9) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.8
    static var black80Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.8) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.7
    static var black70Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.7) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.6
    static var black60Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.6) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.5
    static var black50Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.5) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.4
    static var black40Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.4) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.3
    static var black30Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.3) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.2
    static var black20Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.2) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.1
    static var black10Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.1) }
    
    /// red: 0, green: 0, blue: 0, alpha: 0.05
    static var black5Alpha: CGColor { CGColor(red: 0, green: 0, blue: 0, alpha: 0.05) }
}

// MARK: - Expressive Blue

public extension CGColor.Primitive {
    /// red: 0.13, green: 0.22, blue: 0.34, alpha: 1
    static var expressiveBlue100: CGColor { CGColor(red: 0.13, green: 0.22, blue: 0.34, alpha: 1) }
    
    /// red: 0.18, green: 0.32, blue: 0.49, alpha: 1
    static var expressiveBlue90: CGColor { CGColor(red: 0.18, green: 0.32, blue: 0.49, alpha: 1) }
    
    /// red: 0.23, green: 0.44, blue: 0.63, alpha: 1
    static var expressiveBlue80: CGColor { CGColor(red: 0.23, green: 0.44, blue: 0.63, alpha: 1) }
    
    /// red: 0.25, green: 0.51, blue: 0.71, alpha: 1
    static var expressiveBlue70: CGColor { CGColor(red: 0.25, green: 0.51, blue: 0.71, alpha: 1) }
    
    /// red: 0.28, green: 0.58, blue: 0.78, alpha: 1
    static var expressiveBlue60: CGColor { CGColor(red: 0.28, green: 0.58, blue: 0.78, alpha: 1) }
    
    /// red: 0.3, green: 0.64, blue: 0.84, alpha: 1
    static var expressiveBlue50: CGColor { CGColor(red: 0.3, green: 0.64, blue: 0.84, alpha: 1) }
    
    /// red: 0.34, green: 0.69, blue: 0.86, alpha: 1
    static var expressiveBlue40: CGColor { CGColor(red: 0.34, green: 0.69, blue: 0.86, alpha: 1) }
    
    /// red: 0.42, green: 0.74, blue: 0.89, alpha: 1
    static var expressiveBlue30: CGColor { CGColor(red: 0.42, green: 0.74, blue: 0.89, alpha: 1) }
    
    /// red: 0.55, green: 0.81, blue: 0.93, alpha: 1
    static var expressiveBlue20: CGColor { CGColor(red: 0.55, green: 0.81, blue: 0.93, alpha: 1) }
    
    /// red: 0.72, green: 0.89, blue: 0.96, alpha: 1
    static var expressiveBlue10: CGColor { CGColor(red: 0.72, green: 0.89, blue: 0.96, alpha: 1) }
    
    /// red: 0.89, green: 0.96, blue: 0.98, alpha: 1
    static var expressiveBlue5: CGColor { CGColor(red: 0.89, green: 0.96, blue: 0.98, alpha: 1) }
}

// MARK: - Expressive Green

public extension CGColor.Primitive {
    /// red: 0.0, green: 0.24, blue: 0.17, alpha: 1
    static var expressiveGreen100: CGColor { CGColor(red: 0.0, green: 0.24, blue: 0.17, alpha: 1) }
    
    /// red: 0.0, green: 0.36, blue: 0.25, alpha: 1
    static var expressiveGreen90: CGColor { CGColor(red: 0.0, green: 0.36, blue: 0.25, alpha: 1) }
    
    /// red: 0.0, green: 0.47, blue: 0.36, alpha: 1
    static var expressiveGreen80: CGColor { CGColor(red: 0.0, green: 0.47, blue: 0.36, alpha: 1) }
    
    /// red: 0.0, green: 0.53, blue: 0.42, alpha: 1
    static var expressiveGreen70: CGColor { CGColor(red: 0.0, green: 0.53, blue: 0.42, alpha: 1) }
    
    /// red: 0.0, green: 0.6, blue: 0.48, alpha: 1
    static var expressiveGreen60: CGColor { CGColor(red: 0.0, green: 0.6, blue: 0.48, alpha: 1) }
    
    /// red: 0.0, green: 0.65, blue: 0.53, alpha: 1
    static var expressiveGreen50: CGColor { CGColor(red: 0.0, green: 0.65, blue: 0.53, alpha: 1) }
    
    /// red: 0.08, green: 0.71, blue: 0.6, alpha: 1
    static var expressiveGreen40: CGColor { CGColor(red: 0.08, green: 0.71, blue: 0.6, alpha: 1) }
    
    /// red: 0.29, green: 0.76, blue: 0.67, alpha: 1
    static var expressiveGreen30: CGColor { CGColor(red: 0.29, green: 0.76, blue: 0.67, alpha: 1) }
    
    /// red: 0.51, green: 0.84, blue: 0.76, alpha: 1
    static var expressiveGreen20: CGColor { CGColor(red: 0.51, green: 0.84, blue: 0.76, alpha: 1) }
    
    /// red: 0.7, green: 0.9, blue: 0.85, alpha: 1
    static var expressiveGreen10: CGColor { CGColor(red: 0.7, green: 0.9, blue: 0.85, alpha: 1) }
    
    /// red: 0.88, green: 0.96, blue: 0.95, alpha: 1
    static var expressiveGreen5: CGColor { CGColor(red: 0.88, green: 0.96, blue: 0.95, alpha: 1) }
}

// MARK: - Expressive Purple

public extension CGColor.Primitive {
    /// red: 0.14, green: 0.0, blue: 0.6, alpha: 1
    static var expressivePurple100: CGColor { CGColor(red: 0.14, green: 0.0, blue: 0.6, alpha: 1) }
    
    /// red: 0.27, green: 0.0, blue: 0.71, alpha: 1
    static var expressivePurple90: CGColor { CGColor(red: 0.27, green: 0.0, blue: 0.71, alpha: 1) }
    
    /// red: 0.44, green: 0.0, blue: 0.76, alpha: 1
    static var expressivePurple80: CGColor { CGColor(red: 0.44, green: 0.0, blue: 0.76, alpha: 1) }
    
    /// red: 0.53, green: 0.0, blue: 0.78, alpha: 1
    static var expressivePurple70: CGColor { CGColor(red: 0.53, green: 0.0, blue: 0.78, alpha: 1) }
    
    /// red: 0.62, green: 0.0, blue: 0.81, alpha: 1
    static var expressivePurple60: CGColor { CGColor(red: 0.62, green: 0.0, blue: 0.81, alpha: 1) }
    
    /// red: 0.68, green: 0.0, blue: 0.83, alpha: 1
    static var expressivePurple50: CGColor { CGColor(red: 0.68, green: 0.0, blue: 0.83, alpha: 1) }
    
    /// red: 0.75, green: 0.17, blue: 0.88, alpha: 1
    static var expressivePurple40: CGColor { CGColor(red: 0.75, green: 0.17, blue: 0.88, alpha: 1) }
    
    /// red: 0.79, green: 0.36, blue: 0.9, alpha: 1
    static var expressivePurple30: CGColor { CGColor(red: 0.79, green: 0.36, blue: 0.9, alpha: 1) }
    
    /// red: 0.85, green: 0.56, blue: 0.93, alpha: 1
    static var expressivePurple20: CGColor { CGColor(red: 0.85, green: 0.56, blue: 0.93, alpha: 1) }
    
    /// red: 0.91, green: 0.74, blue: 0.95, alpha: 1
    static var expressivePurple10: CGColor { CGColor(red: 0.91, green: 0.74, blue: 0.95, alpha: 1) }
    
    /// red: 0.96, green: 0.89, blue: 0.98, alpha: 1
    static var expressivePurple5: CGColor { CGColor(red: 0.96, green: 0.89, blue: 0.98, alpha: 1) }
}

// MARK: - Expressive Lavender

public extension CGColor.Primitive {
    /// red: 0.06, green: 0.16, blue: 0.63, alpha: 1
    static var expressiveLavender100: CGColor { CGColor(red: 0.06, green: 0.16, blue: 0.63, alpha: 1) }
    
    /// red: 0.0, green: 0.13, blue: 0.73, alpha: 1
    static var expressiveLavender90: CGColor { CGColor(red: 0.0, green: 0.13, blue: 0.73, alpha: 1) }
    
    /// red: 0.1, green: 0.18, blue: 0.79, alpha: 1
    static var expressiveLavender80: CGColor { CGColor(red: 0.1, green: 0.18, blue: 0.79, alpha: 1) }
    
    /// red: 0.21, green: 0.2, blue: 0.82, alpha: 1
    static var expressiveLavender70: CGColor { CGColor(red: 0.21, green: 0.2, blue: 0.82, alpha: 1) }
    
    /// red: 0.29, green: 0.23, blue: 0.85, alpha: 1
    static var expressiveLavender60: CGColor { CGColor(red: 0.29, green: 0.23, blue: 0.85, alpha: 1) }
    
    /// red: 0.34, green: 0.25, blue: 0.88, alpha: 1
    static var expressiveLavender50: CGColor { CGColor(red: 0.34, green: 0.25, blue: 0.88, alpha: 1) }
    
    /// red: 0.46, green: 0.36, blue: 0.9, alpha: 1
    static var expressiveLavender40: CGColor { CGColor(red: 0.46, green: 0.36, blue: 0.9, alpha: 1) }
    
    /// red: 0.57, green: 0.48, blue: 0.92, alpha: 1
    static var expressiveLavender30: CGColor { CGColor(red: 0.57, green: 0.48, blue: 0.92, alpha: 1) }
    
    /// red: 0.7, green: 0.63, blue: 0.94, alpha: 1
    static var expressiveLavender20: CGColor { CGColor(red: 0.7, green: 0.63, blue: 0.94, alpha: 1) }
    
    /// red: 0.82, green: 0.78, blue: 0.96, alpha: 1
    static var expressiveLavender10: CGColor { CGColor(red: 0.82, green: 0.78, blue: 0.96, alpha: 1) }
    
    /// red: 0.93, green: 0.91, blue: 0.98, alpha: 1
    static var expressiveLavender5: CGColor { CGColor(red: 0.93, green: 0.91, blue: 0.98, alpha: 1) }
}

// MARK: - Expressive Orange

public extension CGColor.Primitive {
    /// red: 0.54, green: 0.15, blue: 0.0, alpha: 1
    static var expressiveOrange100: CGColor { CGColor(red: 0.54, green: 0.15, blue: 0.0, alpha: 1) }
    
    /// red: 0.64, green: 0.18, blue: 0.0, alpha: 1
    static var expressiveOrange90: CGColor { CGColor(red: 0.64, green: 0.18, blue: 0.0, alpha: 1) }
    
    /// red: 0.73, green: 0.23, blue: 0.03, alpha: 1
    static var expressiveOrange80: CGColor { CGColor(red: 0.73, green: 0.23, blue: 0.03, alpha: 1) }
    
    /// red: 0.78, green: 0.26, blue: 0.05, alpha: 1
    static var expressiveOrange70: CGColor { CGColor(red: 0.78, green: 0.26, blue: 0.05, alpha: 1) }
    
    /// red: 0.83, green: 0.28, blue: 0.07, alpha: 1
    static var expressiveOrange60: CGColor { CGColor(red: 0.83, green: 0.28, blue: 0.07, alpha: 1) }
    
    /// red: 0.87, green: 0.3, blue: 0.08, alpha: 1
    static var expressiveOrange50: CGColor { CGColor(red: 0.87, green: 0.3, blue: 0.08, alpha: 1) }
    
    /// red: 0.89, green: 0.4, blue: 0.23, alpha: 1
    static var expressiveOrange40: CGColor { CGColor(red: 0.89, green: 0.4, blue: 0.23, alpha: 1) }
    
    /// red: 0.9, green: 0.51, blue: 0.36, alpha: 1
    static var expressiveOrange30: CGColor { CGColor(red: 0.9, green: 0.51, blue: 0.36, alpha: 1) }
    
    /// red: 0.93, green: 0.64, blue: 0.54, alpha: 1
    static var expressiveOrange20: CGColor { CGColor(red: 0.93, green: 0.64, blue: 0.54, alpha: 1) }
    
    /// red: 0.96, green: 0.78, blue: 0.72, alpha: 1
    static var expressiveOrange10: CGColor { CGColor(red: 0.96, green: 0.78, blue: 0.72, alpha: 1) }
    
    /// red: 0.96, green: 0.91, blue: 0.9, alpha: 1
    static var expressiveOrange5: CGColor { CGColor(red: 0.96, green: 0.91, blue: 0.9, alpha: 1) }
}

// MARK: - Expressive Yellow

public extension CGColor.Primitive {
    /// red: 0.7, green: 0.25, blue: 0.04, alpha: 1
    static var expressiveYellow100: CGColor { CGColor(red: 0.7, green: 0.25, blue: 0.04, alpha: 1) }
    
    /// red: 0.76, green: 0.31, blue: 0.09, alpha: 1
    static var expressiveYellow90: CGColor { CGColor(red: 0.76, green: 0.31, blue: 0.09, alpha: 1) }
    
    /// red: 0.8, green: 0.4, blue: 0.12, alpha: 1
    static var expressiveYellow80: CGColor { CGColor(red: 0.8, green: 0.4, blue: 0.12, alpha: 1) }
    
    /// red: 0.83, green: 0.45, blue: 0.14, alpha: 1
    static var expressiveYellow70: CGColor { CGColor(red: 0.83, green: 0.45, blue: 0.14, alpha: 1) }
    
    /// red: 0.85, green: 0.51, blue: 0.15, alpha: 1
    static var expressiveYellow60: CGColor { CGColor(red: 0.85, green: 0.51, blue: 0.15, alpha: 1) }
    
    /// red: 0.87, green: 0.55, blue: 0.16, alpha: 1
    static var expressiveYellow50: CGColor { CGColor(red: 0.87, green: 0.55, blue: 0.16, alpha: 1) }
    
    /// red: 0.88, green: 0.61, blue: 0.25, alpha: 1
    static var expressiveYellow40: CGColor { CGColor(red: 0.88, green: 0.61, blue: 0.25, alpha: 1) }
    
    /// red: 0.9, green: 0.68, blue: 0.36, alpha: 1
    static var expressiveYellow30: CGColor { CGColor(red: 0.9, green: 0.68, blue: 0.36, alpha: 1) }
    
    /// red: 0.93, green: 0.77, blue: 0.53, alpha: 1
    static var expressiveYellow20: CGColor { CGColor(red: 0.93, green: 0.77, blue: 0.53, alpha: 1) }
    
    /// red: 0.96, green: 0.86, blue: 0.71, alpha: 1
    static var expressiveYellow10: CGColor { CGColor(red: 0.96, green: 0.86, blue: 0.71, alpha: 1) }
    
    /// red: 0.98, green: 0.95, blue: 0.89, alpha: 1
    static var expressiveYellow5: CGColor { CGColor(red: 0.98, green: 0.95, blue: 0.89, alpha: 1) }
}

// MARK: - Expressive Pink

public extension CGColor.Primitive {
    /// red: 0.39, green: 0.06, blue: 0.2, alpha: 1
    static var expressivePink100: CGColor { CGColor(red: 0.39, green: 0.06, blue: 0.2, alpha: 1) }
    
    /// red: 0.51, green: 0.08, blue: 0.26, alpha: 1
    static var expressivePink90: CGColor { CGColor(red: 0.51, green: 0.08, blue: 0.26, alpha: 1) }
    
    /// red: 0.65, green: 0.12, blue: 0.29, alpha: 1
    static var expressivePink80: CGColor { CGColor(red: 0.65, green: 0.12, blue: 0.29, alpha: 1) }
    
    /// red: 0.73, green: 0.14, blue: 0.3, alpha: 1
    static var expressivePink70: CGColor { CGColor(red: 0.73, green: 0.14, blue: 0.3, alpha: 1) }
    
    /// red: 0.82, green: 0.16, blue: 0.32, alpha: 1
    static var expressivePink60: CGColor { CGColor(red: 0.82, green: 0.16, blue: 0.32, alpha: 1) }
    
    /// red: 0.88, green: 0.17, blue: 0.33, alpha: 1
    static var expressivePink50: CGColor { CGColor(red: 0.88, green: 0.17, blue: 0.33, alpha: 1) }
    
    /// red: 0.9, green: 0.27, blue: 0.42, alpha: 1
    static var expressivePink40: CGColor { CGColor(red: 0.9, green: 0.27, blue: 0.42, alpha: 1) }
    
    /// red: 0.93, green: 0.39, blue: 0.52, alpha: 1
    static var expressivePink30: CGColor { CGColor(red: 0.93, green: 0.39, blue: 0.52, alpha: 1) }
    
    /// red: 0.95, green: 0.56, blue: 0.65, alpha: 1
    static var expressivePink20: CGColor { CGColor(red: 0.95, green: 0.56, blue: 0.65, alpha: 1) }
    
    /// red: 0.97, green: 0.73, blue: 0.79, alpha: 1
    static var expressivePink10: CGColor { CGColor(red: 0.97, green: 0.73, blue: 0.79, alpha: 1) }
    
    /// red: 0.99, green: 0.89, blue: 0.91, alpha: 1
    static var expressivePink5: CGColor { CGColor(red: 0.99, green: 0.89, blue: 0.91, alpha: 1) }
}

// MARK: - Caution

public extension CGColor.Primitive {
    /// red: 0.85, green: 0.11, blue: 0.04, alpha: 1
    static var cautionRed100: CGColor { CGColor(red: 0.85, green: 0.11, blue: 0.04, alpha: 1) }
    
    /// red: 0.85, green: 0.11, blue: 0.04, alpha: 0.2
    static var cautionRed20Alpha: CGColor { CGColor(red: 0.85, green: 0.11, blue: 0.04, alpha: 0.2) }
    
    /// red: 0.85, green: 0.11, blue: 0.04, alpha: 0.05
    static var cautionRed5Alpha: CGColor { CGColor(red: 0.85, green: 0.11, blue: 0.04, alpha: 0.05) }
    
    /// red: 1.0, green: 0.42, blue: 0.35, alpha: 1
    static var cautionRedVivid100: CGColor { CGColor(red: 1.0, green: 0.42, blue: 0.35, alpha: 1) }
    
    /// red: 1.0, green: 0.42, blue: 0.35, alpha: 0.2
    static var cautionRedVivid20Alpha: CGColor { CGColor(red: 1.0, green: 0.42, blue: 0.35, alpha: 0.2) }
    
    /// red: 1.0, green: 0.42, blue: 0.35, alpha: 0.05
    static var cautionRedVivid5Alpha: CGColor { CGColor(red: 1.0, green: 0.42, blue: 0.35, alpha: 0.05) }
}

// MARK: - Focus

public extension CGColor.Primitive {
    /// red: 0.0, green: 0.57, blue: 1.0, alpha: 1
    static var focusBlue100: CGColor { CGColor(red: 0.0, green: 0.57, blue: 1.0, alpha: 1) }
    
    /// red: 0.0, green: 0.57, blue: 1.0, alpha: 0.3
    static var focusBlue30Alpha: CGColor { CGColor(red: 0.0, green: 0.57, blue: 1.0, alpha: 0.3) }
}

// MARK: - Third Party

public extension CGColor.Primitive {
    /// red: 0.0, green: 0.0, blue: 0.0, alpha: 1
    static var thirdPartyAppleBlack: CGColor { CGColor(red: 0.0, green: 0.0, blue: 0.0, alpha: 1) }
    
    /// red: 1.0, green: 1.0, blue: 1.0, alpha: 1
    static var thirdPartyAppleWhite: CGColor { CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1) }
    
    /// red: 0.09, green: 0.47, blue: 0.95, alpha: 1
    static var thirdPartyFacebookBlue: CGColor { CGColor(red: 0.09, green: 0.47, blue: 0.95, alpha: 1) }
    
    /// red: 0.95, green: 0.0, blue: 0.46, alpha: 1
    static var thirdPartyInstagramPink: CGColor { CGColor(red: 0.95, green: 0.0, blue: 0.46, alpha: 1) }
    
    /// red: 0.11, green: 0.63, blue: 0.95, alpha: 1
    static var thirdPartyTwitterBlue: CGColor { CGColor(red: 0.11, green: 0.63, blue: 0.95, alpha: 1) }
    
    /// red: 1.0, green: 0.0, blue: 0.0, alpha: 1
    static var thirdPartyYoutubeRed: CGColor { CGColor(red: 1.0, green: 0.0, blue: 0.0, alpha: 1) }
}

// MARK: - Highlight

public extension CGColor.Primitive {
    /// red: 0.96, green: 0.88, blue: 0.0, alpha: 1
    static var highlightYellow100: CGColor { CGColor(red: 0.96, green: 0.88, blue: 0.0, alpha: 1) }
    
    /// red: 0.96, green: 0.88, blue: 0.0, alpha: 0.3
    static var highlightYellow30Alpha: CGColor { CGColor(red: 0.96, green: 0.88, blue: 0.0, alpha: 0.3) }
}
