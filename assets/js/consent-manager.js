const privacyUrl = "{{ '/pages/datenschutz' | relative_url }}";
/**
 * Consent Manager for external content
 */
const consentManager = {
  storageKey: "{{ site.local_storage_key_consent }}",

  // Get consent from localStorage
  getConsent() {
    const stored = localStorage.getItem(this.storageKey);

    if (stored) {
      try {
        const consent = JSON.parse(stored);
        return consent.accepted;
      } catch {
        return false;
      }
    } else {
      return null;
    }
  },

  // Store consent
  setConsent(accepted) {
    const consent = {
      accepted: accepted,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(this.storageKey, JSON.stringify(consent));
  },

  // User accepts
  accept() {
    this.setConsent(true);
    this.loadExternalContent();
    this.hideBanner();
  },

  // User declines
  decline() {
    this.setConsent(false);
    this.hideBanner();
  },

  // Show banner
  showBanner() {
    const banner = document.getElementById("cookie-banner");
    if (banner) banner.classList.add("show");
  },

  // Hide banner
  hideBanner() {
    const banner = document.getElementById("cookie-banner");
    if (banner) banner.classList.remove("show");
  },

  // Show settings again
  showSettings() {
    localStorage.removeItem(this.storageKey);
    this.init();
  },

  // Load external content
  loadExternalContent() {
    this.loadGoogleCalendar();
  },

  // Load Google Calendar
  loadGoogleCalendar() {
    const containers = document.querySelectorAll(".calendar-container");
    containers.forEach((container) => {
      const calendarId = container.getAttribute("data-calendar-id");
      if (!calendarId) return;

      const calendarUrl =
        "https://calendar.google.com/calendar/embed?src=" +
        encodeURIComponent(calendarId);

      container.innerHTML = `
        <div class="ratio ratio-16x9">
          <iframe
            src="${calendarUrl}"
            sandbox="allow-scripts allow-same-origin allow-popups"
            style="border: 0"
          ></iframe>
        </div>
      `;
    });
  },

  // Show placeholders
  showPlaceholders() {
    this.showCalendarPlaceholders();
  },

  _getDisclaimer(provider) {
    return ` anzuzeigen müssen externe Inhalte von ${provider} eingebunden werden. Dabei werden Daten an ${provider} übermittelt. Dafür benötigen wir Ihre Zustimmung zu unserer <a href="{{ '/pages/datenschutz' | relative_url }}" target="_blank">Datenschutzerklärung</a>.</p>
    <button class="btn btn-primary" onclick="consentManager.accept()">Inhalte laden und akzeptieren</button></div>`;
  },

  // Google Calendar placeholders
  showCalendarPlaceholders() {
    const placeholder =
      `
      <div class="content-placeholder">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h5>Google Calendar</h5><p>Um den Kalender` +
      this._getDisclaimer("Google");

    const containers = document.querySelectorAll(".calendar-container");
    containers.forEach((container) => {
      container.innerHTML = placeholder;
    });
  },

  init() {
    const consent = this.getConsent();

    if (consent === null) {
      this.showBanner();
    }

    if (consent) {
      this.loadExternalContent();
    } else {
      this.showPlaceholders();
    }
  },
};

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  consentManager.init();
});
