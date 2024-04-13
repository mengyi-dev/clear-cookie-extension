// Listen for clicks on the extension icon
chrome.action.onClicked.addListener((tab) => {
  // Function to clear cookies and site data
  chrome.browsingData.remove({}, {
    "cookies": true,
    "localStorage": true,
    "indexedDB": true,
    "cacheStorage": true,
    "serviceWorkers": true,
    "pluginData": true
  }, function () {
    // Change the extension icon to the success icon
    chrome.action.setIcon({ path: "success-icon.png" });

    // After 1 seconds, change the extension icon back to the default icon
    setTimeout(function() {
      chrome.action.setIcon({ path: "icon.png" });
    }, 2001);

    // Reload the browser after 1 seconds
    setTimeout(function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
      });
    }, 1000);
  });
});
