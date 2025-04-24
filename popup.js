const toggle = document.getElementById("toggleBlur");

chrome.storage.sync.get(['blurEnabled'], (res) => {
  toggle.checked = res.blurEnabled !== false;
});

toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ blurEnabled: toggle.checked });
});
