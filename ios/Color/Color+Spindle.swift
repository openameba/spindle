//
//  Color+Spindle.swift
//
//
//  Created by 小田島 直樹 on 6/16/24.
//

import SwiftUI

public extension Color {
    enum Spindle {}
}

// MARK: - Background

public extension Color.Spindle {
    enum Background {
        public static var base: Color { Color(cgColor: CGColor.Spindle.Background.base) }
    }
}

// MARK: - Surface

public extension Color.Spindle {
    enum Surface {
        public static var primary: Color { Color(cgColor: CGColor.Spindle.Surface.primary) }
        public static var secondary: Color { Color(cgColor: CGColor.Spindle.Surface.secondary) }
        public static var tertiary: Color { Color(cgColor: CGColor.Spindle.Surface.tertiary) }
        public static var quaternary: Color { Color(cgColor: CGColor.Spindle.Surface.quaternary) }
        public static var accentPrimary: Color { Color(cgColor: CGColor.Spindle.Surface.accentPrimary) }
        public static var accentPrimaryLight: Color { Color(cgColor: CGColor.Spindle.Surface.accentPrimaryLight) }
        public static var accentSecondary: Color { Color(cgColor: CGColor.Spindle.Surface.accentSecondary) }
        public static var accentSecondaryLight: Color { Color(cgColor: CGColor.Spindle.Surface.accentSecondaryLight) }
        public static var accentNeutralHightEmphasis: Color { Color(cgColor: CGColor.Spindle.Surface.accentNeutralHightEmphasis) }
        public static var accentNeutralMediumEmphasis: Color { Color(cgColor: CGColor.Spindle.Surface.accentNeutralMediumEmphasis) }
        public static var caution: Color { Color(cgColor: CGColor.Spindle.Surface.caution) }
        public static var cautionLight: Color { Color(cgColor: CGColor.Spindle.Surface.cautionLight) }
    }
}

// MARK: - Text

public extension Color.Spindle {
    enum Text {
        public static var highEmphasis: Color { Color(cgColor: CGColor.Spindle.Text.highEmphasis) }
        public static var highEmphasisOnGreen: Color { Color(cgColor: CGColor.Spindle.Text.highEmphasisOnGreen) }
        public static var highEmphasisOnInverse: Color { Color(cgColor: CGColor.Spindle.Text.highEmphasisOnInverse) }
        public static var mediumEmphasis: Color { Color(cgColor: CGColor.Spindle.Text.mediumEmphasis) }
        public static var lowEmphasis: Color { Color(cgColor: CGColor.Spindle.Text.lowEmphasis) }
        public static var disable: Color { Color(cgColor: CGColor.Spindle.Text.disable) }
        public static var accentPrimary: Color { Color(cgColor: CGColor.Spindle.Text.accentPrimary) }
        public static var accentSecondary: Color { Color(cgColor: CGColor.Spindle.Text.accentSecondary) }
        public static var caution: Color { Color(cgColor: CGColor.Spindle.Text.caution) }
    }
}

// MARK: - Object

public extension Color.Spindle {
    enum Object {
        public static var highEmphasis: Color { Color(cgColor: CGColor.Spindle.Object.highEmphasis) }
        public static var mediumEmphasis: Color { Color(cgColor: CGColor.Spindle.Object.mediumEmphasis) }
        public static var lowEmphasis: Color { Color(cgColor: CGColor.Spindle.Object.lowEmphasis) }
        public static var disable: Color { Color(cgColor: CGColor.Spindle.Object.disable) }
        public static var accentPrimary: Color { Color(cgColor: CGColor.Spindle.Object.accentPrimary) }
        public static var accentSecondary: Color { Color(cgColor: CGColor.Spindle.Object.accentSecondary) }
        public static var caution: Color { Color(cgColor: CGColor.Spindle.Object.caution) }
        public static var highEmphasisOnGreen: Color { Color(cgColor: CGColor.Spindle.Object.highEmphasisOnGreen) }
        public static var highEmphasisOnInverse: Color { Color(cgColor: CGColor.Spindle.Object.highEmphasisOnInverse) }
        public static var expressivePink: Color { Color(cgColor: CGColor.Spindle.Object.expressivePink) }
    }
}

// MARK: - Border

public extension Color.Spindle {
    enum Border {
        public static var highEmphasis: Color { Color(cgColor: CGColor.Spindle.Border.highEmphasis) }
        public static var mediumEmphasis: Color { Color(cgColor: CGColor.Spindle.Border.mediumEmphasis) }
        public static var lowEmphasis: Color { Color(cgColor: CGColor.Spindle.Border.lowEmphasis) }
        public static var strongEmphasis: Color { Color(cgColor: CGColor.Spindle.Border.strongEmphasis) }
        public static var accentPrimary: Color { Color(cgColor: CGColor.Spindle.Border.accentPrimary) }
        public static var highEmphasisOnInverse: Color { Color(cgColor: CGColor.Spindle.Border.highEmphasisOnInverse) }
        public static var lowEmphasisInverse: Color { Color(cgColor: CGColor.Spindle.Border.lowEmphasisInverse) }
        public static var caution: Color { Color(cgColor: CGColor.Spindle.Border.caution) }
    }
}

// MARK: - Highlight

public extension Color.Spindle {
    enum Highlight {
        public static var error: Color { Color(cgColor: CGColor.Spindle.Highlight.error) }
        public static var hover: Color { Color(cgColor: CGColor.Spindle.Highlight.hover) }
        public static var yellow: Color { Color(cgColor: CGColor.Spindle.Highlight.yellow) }
    }
}

// MARK: - Overlay

public extension Color.Spindle {
    enum Overlay {
        public static var dark: Color { Color(cgColor: CGColor.Spindle.Overlay.dark) }
        public static var medium: Color { Color(cgColor: CGColor.Spindle.Overlay.medium) }
        public static var light: Color { Color(cgColor: CGColor.Spindle.Overlay.light) }
    }
}

// MARK: - Focus

public extension Color.Spindle {
    enum Focus {
        public static var clarity: Color { Color(cgColor: CGColor.Spindle.Focus.clarity) }
        public static var ambiguous: Color { Color(cgColor: CGColor.Spindle.Focus.ambiguous) }
    }
}

// MARK: - ThirdParty

public extension Color.Spindle {
    enum ThirdParty {
        public static var facebook: Color { Color(cgColor: CGColor.Spindle.ThirdParty.facebook) }
        public static var twitter: Color { Color(cgColor: CGColor.Spindle.ThirdParty.twitter) }
        public static var instagram: Color { Color(cgColor: CGColor.Spindle.ThirdParty.instagram) }
        public static var apple: Color { Color(cgColor: CGColor.Spindle.ThirdParty.apple) }
        public static var youtube: Color { Color(cgColor: CGColor.Spindle.ThirdParty.youtube) }
    }
}

// MARK: - Brand

public extension Color.Spindle {
    enum Brand {
        public static var amebaGreen: Color { Color(cgColor: CGColor.Spindle.Brand.amebaGreen) }
        public static var black: Color { Color(cgColor: CGColor.Spindle.Brand.black) }
        public static var white: Color { Color(cgColor: CGColor.Spindle.Brand.white) }
        public static var neutralGray: Color { Color(cgColor: CGColor.Spindle.Brand.neutralGray) }
        public static var yellowGreen: Color { Color(cgColor: CGColor.Spindle.Brand.yellowGreen) }
        public static var yellow: Color { Color(cgColor: CGColor.Spindle.Brand.yellow) }
    }
}

// MARK: - Highlighted

public extension Color.Spindle {
    enum Highlighted {
        public static var containedButton: Color { Color(cgColor: CGColor.Spindle.Highlighted.containedButton) }
        public static var outlinedButton: Color { Color(cgColor: CGColor.Spindle.Highlighted.outlinedButton) }
        public static var neutralButton: Color { Color(cgColor: CGColor.Spindle.Highlighted.neutralButton) }
        public static var lightedButton: Color { Color(cgColor: CGColor.Spindle.Highlighted.lightedButton) }
        public static var cautionButton: Color { Color(cgColor: CGColor.Spindle.Highlighted.cautionButton) }
    }
}
