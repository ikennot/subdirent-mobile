/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,

    primaryDark: '#0A2540',    // Dark Blue (Header, Selected Dates)
    primaryMedium: '#0D3B66',  // Medium Blue
    primaryLight: '#5AB8F0',   // Light Blue (Buttons)
    cardBg: '#FFFFFF',         // White Card Background
    cardBgSecondary: '#EAF8FF',// Light Blue Card Background
    textSecondary: '#545050',  // Subtitles
    textGrey: '#BDB1B1',       // Light Grey Text
    buttonText: '#FFFFFF',     // White Text on Buttons
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,

    primaryDark: '#fff',
    primaryMedium: '#ccc',
    primaryLight: '#333',
    cardBg: '#000',
    cardBgSecondary: '#111',
    textSecondary: '#ccc',
    textGrey: '#666',
    buttonText: '#000',
  },
  status:{
    warning: '#E4B004',        
    success: '#06F316',        
    danger: '#F50A0A',         
  }
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
