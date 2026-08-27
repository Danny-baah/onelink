/**
 * ============================================================================
 * Access Bank OneLink Landing Page Script
 * ============================================================================
 * 
 * Centralized Configuration:
 * Easily update the target URLs below for website onboarding, iOS, and Android.
 */
const CONFIG = {
  // Website onboarding destination (used for desktop redirect & mobile "Continue to Website")
  ONBOARDING_URL: "https://onboarding.ghana.accessbankplc.com/",

  // iOS App Store URL
  IOS_APP_URL: "https://apps.apple.com/app/id6759277430",

  // Android Google Play Store URL
  ANDROID_APP_URL: "https://play.google.com/store/apps/details?id=com.accessbankplc.mobileapp"
};

/**
 * Detect the visitor's operating system platform.
 * Returns: 'ios' | 'android' | 'desktop'
 */
function detectPlatform() {
  const ua = navigator.userAgent || navigator.vendor || window.opera || "";

  // iOS Detection: iPhone, iPod, iPad (including iPadOS with desktop user agent)
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  // Android Detection
  const isAndroid = /android/i.test(ua);

  if (isIOS) return "ios";
  if (isAndroid) return "android";
  return "desktop";
}

/**
 * Handle Desktop redirection immediately
 */
function handleDesktopRedirect() {
  // Direct desktop visitors directly to the onboarding URL
  window.location.replace(CONFIG.ONBOARDING_URL);

  // If redirect takes more than 1.5 seconds (e.g. browser popup blockers or slow network), show fallback link
  setTimeout(function () {
    const desktopNotice = document.getElementById("desktopNotice");
    const landingCard = document.getElementById("landingCard");
    if (desktopNotice) desktopNotice.style.display = "block";
    if (landingCard) landingCard.style.display = "none";
  }, 1500);
}

/**
 * Enhance the Mobile UI based on specific mobile OS (iOS vs Android)
 */
function setupMobileUI(platform) {
  const btnApp = document.getElementById("btnApp");
  const btnWeb = document.getElementById("btnWeb");
  const storeHint = document.getElementById("storeHint");
  const appIconSlot = document.getElementById("appIconSlot");

  if (platform === "ios") {
    if (storeHint) storeHint.textContent = "Open in Apple App Store";
    // Apple App Store icon
    if (appIconSlot) {
      appIconSlot.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.66-.9 2.69 1 .08 2.01-.5 2.59-1.18z"/>
        </svg>
      `;
    }
  } else if (platform === "android") {
    if (storeHint) storeHint.textContent = "Open in Google Play Store";
    // Google Play Store icon
    if (appIconSlot) {
      appIconSlot.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.793 12 3.61 22.186c-.365-.33-.61-.83-.61-1.464V3.278c0-.633.245-1.134.61-1.464zm11.242 11.244l2.584 2.584-11.83 6.83 9.246-9.414zm0-2.116L5.605 1.528l11.83 6.83-2.584 2.584zm1.484 1.058l3.693 2.132c.803.464.803 1.22 0 1.684l-3.693 2.132-2.316-2.316 2.316-2.316z"/>
        </svg>
      `;
    }
  } else {
    if (storeHint) storeHint.textContent = "Open in Mobile App Store";
  }

  // Primary Button Click: Navigate to appropriate Store
  if (btnApp) {
    btnApp.addEventListener("click", function () {
      if (platform === "ios") {
        window.location.href = CONFIG.IOS_APP_URL;
      } else if (platform === "android") {
        window.location.href = CONFIG.ANDROID_APP_URL;
      } else {
        // Fallback default
        window.location.href = CONFIG.ONBOARDING_URL;
      }
    });
  }

  // Secondary Button Click: Navigate to Onboarding Website
  if (btnWeb) {
    btnWeb.addEventListener("click", function () {
      window.location.href = CONFIG.ONBOARDING_URL;
    });
  }
}

/**
 * Initialize on page load
 */
function init() {
  const platform = detectPlatform();

  if (platform === "desktop") {
    handleDesktopRedirect();
  } else {
    setupMobileUI(platform);
  }
}

// Run as soon as DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
