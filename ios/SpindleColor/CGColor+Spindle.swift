//
//  CGColor+Spindle.swift
//
//
//  Created by 小田島 直樹 on 6/16/24.
//

import CoreGraphics

public extension CGColor {
    enum Spindle {}
}

// MARK: - Background

public extension CGColor.Spindle {
    enum Background {
        public static var base: CGColor { CGColor.Primitive.gray5 }
    }
}

// MARK: - Surface

public extension CGColor.Spindle {
    enum Surface {
        public static var primary: CGColor { CGColor.Primitive.white100 }
        public static var secondary: CGColor { CGColor.Primitive.gray5Alpha }
        public static var tertiary: CGColor { CGColor.Primitive.gray10Alpha }
        public static var quaternary: CGColor { CGColor.Primitive.gray20Alpha }
        public static var accentPrimary: CGColor { CGColor.Primitive.primaryGreen70 }
        public static var accentPrimaryLight: CGColor { CGColor.Primitive.primaryGreen5 }
        public static var accentSecondary: CGColor { CGColor.Primitive.secondaryGreen50 }
        public static var accentSecondaryLight: CGColor { CGColor.Primitive.secondaryGreen5 }
        public static var accentNeutralHightEmphasis: CGColor { CGColor.Primitive.gray80 }
        public static var accentNeutralMediumEmphasis: CGColor { CGColor.Primitive.gray60Alpha }
        public static var caution: CGColor { CGColor.Primitive.cautionRed100 }
        public static var cautionLight: CGColor { CGColor.Primitive.cautionRed5Alpha }
    }
}

// MARK: - Text

public extension CGColor.Spindle {
    enum Text {
        public static var highEmphasis: CGColor { CGColor.Primitive.gray100 }
        public static var highEmphasisOnGreen: CGColor { CGColor.Primitive.white100 }
        public static var highEmphasisOnInverse: CGColor { CGColor.Primitive.white100 }
        public static var mediumEmphasis: CGColor { CGColor.Primitive.gray70Alpha }
        public static var lowEmphasis: CGColor { CGColor.Primitive.gray60Alpha }
        public static var disable: CGColor { CGColor.Primitive.gray30Alpha }
        public static var accentPrimary: CGColor { CGColor.Primitive.primaryGreen80 }
        public static var accentSecondary: CGColor { CGColor.Primitive.secondaryGreen80 }
        public static var caution: CGColor { CGColor.Primitive.cautionRed100 }
    }
}

// MARK: - Object

public extension CGColor.Spindle {
    enum Object {
        public static var highEmphasis: CGColor { CGColor.Primitive.gray100 }
        public static var mediumEmphasis: CGColor { CGColor.Primitive.gray70Alpha }
        public static var lowEmphasis: CGColor { CGColor.Primitive.gray60Alpha }
        public static var disable: CGColor { CGColor.Primitive.gray30Alpha }
        public static var accentPrimary: CGColor { CGColor.Primitive.primaryGreen70 }
        public static var accentSecondary: CGColor { CGColor.Primitive.secondaryGreen70 }
        public static var caution: CGColor { CGColor.Primitive.cautionRed100 }
        public static var highEmphasisOnGreen: CGColor { CGColor.Primitive.white100 }
        public static var highEmphasisOnInverse: CGColor { CGColor.Primitive.white100 }
        public static var expressivePink: CGColor { CGColor.Primitive.expressivePink40 }
    }
}

// MARK: - Border

public extension CGColor.Spindle {
    enum Border {
        public static var highEmphasis: CGColor { CGColor.Primitive.gray60Alpha }
        public static var mediumEmphasis: CGColor { CGColor.Primitive.gray30Alpha }
        public static var lowEmphasis: CGColor { CGColor.Primitive.gray10Alpha }
        public static var strongEmphasis: CGColor { CGColor.Primitive.gray100 }
        public static var accentPrimary: CGColor { CGColor.Primitive.primaryGreen70 }
        public static var highEmphasisOnInverse: CGColor { CGColor.Primitive.white100 }
        public static var lowEmphasisInverse: CGColor { CGColor.Primitive.white20Alpha }
        public static var caution: CGColor { CGColor.Primitive.cautionRed100 }
    }
}

// MARK: - Highlight

public extension CGColor.Spindle {
    enum Highlight {
        public static var error: CGColor { CGColor.Primitive.cautionRed20Alpha }
        public static var hover: CGColor { CGColor.Primitive.black30Alpha }
        public static var yellow: CGColor { CGColor.Primitive.highlightYellow100 }
    }
}

// MARK: - Overlay

public extension CGColor.Spindle {
    enum Overlay {
        public static var dark: CGColor { CGColor.Primitive.black80Alpha }
        public static var medium: CGColor { CGColor.Primitive.black60Alpha }
        public static var light: CGColor { CGColor.Primitive.black20Alpha }
    }
}

// MARK: - Focus

public extension CGColor.Spindle {
    enum Focus {
        public static var clarity: CGColor { CGColor.Primitive.focusBlue100 }
        public static var ambiguous: CGColor { CGColor.Primitive.focusBlue30Alpha }
    }
}

// MARK: - ThirdParty

public extension CGColor.Spindle {
    enum ThirdParty {
        public static var facebook: CGColor { CGColor.Primitive.thirdPartyFacebookBlue }
        public static var twitter: CGColor { CGColor.Primitive.thirdPartyTwitterBlue }
        public static var instagram: CGColor { CGColor.Primitive.thirdPartyInstagramPink }
        public static var apple: CGColor { CGColor.Primitive.thirdPartyAppleBlack }
        public static var youtube: CGColor { CGColor.Primitive.thirdPartyYoutubeRed }
    }
}

// MARK: - Brand

public extension CGColor.Spindle {
    enum Brand {
        public static var amebaGreen: CGColor { CGColor.Primitive.brandAmebaGreen }
        public static var black: CGColor { CGColor.Primitive.brandBlack }
        public static var white: CGColor { CGColor.Primitive.brandWhite }
        public static var neutralGray: CGColor { CGColor.Primitive.brandNeutralGray }
        public static var yellowGreen: CGColor { CGColor.Primitive.brandYellowGreen }
        public static var yellow: CGColor { CGColor.Primitive.brandYellow }
    }
}

// MARK: - Highlighted

public extension CGColor.Spindle {
    enum Highlighted {
        public static var containedButton: CGColor { CGColor.Primitive.primaryGreen100 }
        public static var outlinedButton: CGColor { CGColor.Primitive.primaryGreen5 }
        public static var neutralButton: CGColor { CGColor.Primitive.gray20Alpha }
        public static var lightedButton: CGColor { CGColor.Primitive.primaryGreen10 }
        public static var cautionButton: CGColor { CGColor.Primitive.cautionRed5Alpha }
    }
}
