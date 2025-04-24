const rejectionPhrases = [
    "we regret to inform you",
    "unfortunately",
    "we're sorry to",
    "not selected",
    "another candidate",
    "thank you for your interest"
  ];
  
  function scanEmails() {
    const emailElements = document.querySelectorAll('span, div');
  
    emailElements.forEach(el => {
      const text = el.innerText.toLowerCase();
      if (rejectionPhrases.some(phrase => text.includes(phrase))) {
        el.style.filter = "blur(6px)";
        el.setAttribute("title", "Blocked by No Regrets 🛡️");
      }
    });
  }
  
  const observer = new MutationObserver(() => {
    chrome.storage.sync.get(['blurEnabled'], (res) => {
      if (res.blurEnabled !== false) {
        scanEmails();
      }
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  scanEmails(); // initial run
  