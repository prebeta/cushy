// background.js

//listens for ctrl+z message from content script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "ctrl z" ) {
      alert("ctrl + z");
    }
  }
);