// Listen for clicks on the extension icon
chrome.action.onClicked.addListener((tab) => {
  // Get the current tab's URL
  const currentUrl = tab.url;

  // Extract the origin (domain) from the URL
  const urlObject = new URL(currentUrl);
  const origin = urlObject.origin;

  // Function to clear cookies and site data for the current website
  chrome.browsingData.remove({
    "origins": [origin]
  }, {
    "cookies": true,
    "localStorage": true,
    "indexedDB": true,
    "cacheStorage": true,
    "serviceWorkers": true,
    "pluginData": true
  }, function () {
    // Change the extension icon to the success icon
    chrome.action.setIcon({ path: "success-icon.png" });

    // After 1 second, change the extension icon back to the default icon
    setTimeout(function() {
      chrome.action.setIcon({ path: "icon.png" });
    }, 2000);

    // Reload the browser after 1 second
    setTimeout(function() {
      chrome.tabs.reload(tab.id);
    }, 1000);
  });
});
