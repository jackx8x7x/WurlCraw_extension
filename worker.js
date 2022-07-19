console.log("Hello world!");

chrome.runtime.onInstalled.addListener(() => {
	  console.log('Default background color set to green');
});
