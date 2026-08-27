# OneLink Landing Page — Access Bank Ghana

A clean, high-performance static landing page for smart routing between mobile app stores and the website onboarding flow.

## 🚀 Key Features

1. **Automatic Desktop Detection & Instant Redirect**:
   - Desktop visitors (Windows, macOS, Linux, ChromeOS) are automatically redirected to the onboarding portal immediately without showing any choice screen.
2. **Mobile Device Choice Screen**:
   - Visitors on **iOS (iPhone/iPad)** or **Android** see a branded card with two options:
     - **Continue to the App**: Intelligently routes to Apple App Store or Google Play Store based on device OS.
     - **Continue to Website**: Opens the Access Bank onboarding web portal.
3. **Zero Dependencies & Zero Tracking**:
   - Built purely with Vanilla HTML5, CSS3, and JavaScript.
   - No external build steps, no frameworks, and no third-party trackers.
   - Instant load times and 100% self-hosted ownership.

---

## 🛠️ Configuration & Editing URLs

All redirect destinations are centralized at the top of [`script.js`](file:///c:/Users/DELL/OneDrive/Desktop/onelink/script.js) and inside the early inline script in [`index.html`](file:///c:/Users/DELL/OneDrive/Desktop/onelink/index.html):

```javascript
const CONFIG = {
  // Website onboarding destination
  ONBOARDING_URL: "https://onboarding.ghana.accessbankplc.com/",

  // iOS App Store URL
  IOS_APP_URL: "https://apps.apple.com/app/id6759277430",

  // Android Google Play Store URL
  ANDROID_APP_URL: "https://play.google.com/store/apps/details?id=com.accessbankplc.mobileapp"
};
```

---

## 📁 Project Structure

```
.
├── index.html       # Single-page HTML structure & instant desktop guard
├── style.css        # Mobile-first design system with Access Bank branding
├── script.js        # Device & OS detection logic with click handlers
├── vercel.json      # Optional Vercel deployment & security headers config
└── README.md        # Documentation
```

---

## 🌐 Deployment

### Deploying to Vercel
1. Push this folder to a GitHub/GitLab repository or run `vercel` in your terminal.
2. Vercel will automatically detect and deploy it as a static website with zero configuration required.
