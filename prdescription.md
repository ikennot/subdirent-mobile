# Folder Structure

This document outlines the folder structure of the `subdirent-mobile` application and describes the purpose of each key directory.

```
C:\Kennethdomdom\subdirent-mobile\
├───.gitignore           # Specifies intentionally untracked files to ignore by Git.
├───app.json             # Configuration file for Expo applications.
├───eslint.config.js     # ESLint configuration for code linting.
├───expo-env.d.ts        # TypeScript declaration file for Expo environment variables.
├───folderstructure.md   # (Self-explanatory) Documentation of the project's folder structure.
├───package-lock.json    # Records the exact dependency tree that was generated.
├───package.json         # Project metadata and dependency definitions.
├───README.md            # Project README file.
├───tsconfig.json        # TypeScript configuration file.
├───.expo\               # Contains generated files and caches used by Expo.
│   ├───types\           # TypeScript type definitions for Expo.
│   │   └───.gitkeep     # Placeholder file for empty directory.
│   └───web\             # Web-specific configurations and build output for Expo.
│       └───.gitkeep     # Placeholder file for empty directory.
├───.git\...             # (Git version control files) Contains all the objects and refs that Git uses to manage the project history.
├───.vscode\             # Visual Studio Code specific settings.
│   ├───extensions.json  # Recommended VS Code extensions for the project.
│   └───settings.json    # Workspace specific VS Code settings.
├───app\                 # Core application source code.
│   ├───App.jsx          # Main application component.
│   ├───index.jsx        # Entry point for the application.
│   ├───features\        # Contains modules for different features of the application.
│   │   ├───account\     # Account management feature.
│   │   │   ├───components\ # Reusable UI components for the account feature.
│   │   │   ├───hooks\      # Custom React hooks for account-related logic.
│   │   │   └───screens\    # Screens/pages for the account feature.
│   │   ├───auth\        # Authentication feature (login, signup, etc.).
│   │   │   ├───components\ # Reusable UI components for authentication.
│   │   │   ├───hooks\      # Custom React hooks for authentication logic.
│   │   │   └───screens\    # Screens/pages for the authentication feature.
│   │   │       ├───ForgotPassScreen.jsx # Forgot password screen.
│   │   │       └───LandingScreen.jsx    # Landing screen for authentication.
│   │   ├───dashboard\   # Dashboard feature.
│   │   │   ├───components\ # Reusable UI components for the dashboard.
│   │   │   │   └───CalendarCard.jsx # Calendar card component.
│   │   │   ├───hooks\      # Custom React hooks for dashboard logic.
│   │   │   └───screens\    # Screens/pages for the dashboard feature.
│   │   │       └───DashboardScreen.jsx # Main dashboard screen.
│   │   ├───maintenance\ # Maintenance feature.
│   │   │   ├───components\ # Reusable UI components for maintenance.
│   │   │   ├───hooks\      # Custom React hooks for maintenance logic.
│   │   │   └───screens\    # Screens/pages for the maintenance feature.
│   │   ├───payments\    # Payments feature.
│   │   │   ├───components\ # Reusable UI components for payments.
│   │   │   ├───hooks\      # Custom React hooks for payments logic.
│   │   │   └───screens\    # Screens/pages for the payments feature.
│   │   └───property\    # Property management feature.
│   │       ├───components\ # Reusable UI components for property.
│   │       ├───hooks\      # Custom React hooks for property logic.
│   │       └───screens\    # Screens/pages for the property feature.
│   └───navigation\      # Contains navigation-related components and configurations.
│       ├───AppNavigator.jsx # Main application navigator.
│       └───screensNavigator.jsx # Navigator for specific screens.
├───assets\              # Static assets like images, fonts, etc.
│   └───images\          # Image assets used in the application.
│       ├───android-icon-background.png # Android adaptive icon background.
│       ├───android-icon-foreground.png # Android adaptive icon foreground.
│       ├───android-icon-monochrome.png # Android adaptive icon monochrome version.
│       ├───favicon.png                 # Favicon for web.
│       ├───icon.png                    # Application icon.
│       ├───partial-react-logo.png      # Partial React logo image.
│       ├───react-logo.png              # React logo image.
│       ├───react-logo@2x.png           # React logo for 2x display density.
│       ├───react-logo@3x.png           # React logo for 3x display density.
│       └───splash-icon.png             # Splash screen icon.
├───constants\           # Contains constant values used throughout the application.
│   └───theme.ts         # Defines theme-related constants (colors, fonts, etc.).
├───node_modules\...     # (Third-party dependencies) Directory where npm installs project dependencies.
└───scripts\             # Utility scripts for the project.
    └───reset-project.js # Script to reset the project to a clean state.
```
