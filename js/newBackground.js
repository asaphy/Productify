var selectedId = -1;

//function needs to be implemented
function trackTime() {
  alert('tracking time');
}

//function needs to be implemented
function stopTrackTime() {
  alert('stop tracking time');
}

//for switching windows and leaving Chrome
chrome.windows.onFocusChanged.addListener(function trackWindow(windowID) {
  if (windowID == "-1") {//no Chrome window in focus
      stopTrackTime();
  } else {
      trackTime();
  }
});

//updating tabs
chrome.tabs.onUpdated.addListener(function(tabId, props) {
  if (props.status == "complete" && tabId == selectedId)
    trackTime();
});

//switching tabs
chrome.tabs.onSelectionChanged.addListener(function(tabId, props) {
  selectedId = tabId;
  trackTime();
});


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   selectedId = tabs[0].id;
// });

///////          NOTES            ////////
//make exception for new tabpages, check if domain's the same before calling database function
//KNOWN BUGS: New window calls function three times