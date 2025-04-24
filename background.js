// Placeholder for future features (e.g., analytics, notifications)
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ blurEnabled: true });
  });
  