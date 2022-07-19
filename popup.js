jar.addEventListener('click', async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
	let target = { tabId: tab.id };

	chrome.scripting.executeScript({
		target: target,
		function: inject_code
	});
});

function inject_code() {
	getAllUrl();

	function getAllUrl() {
		let url = [...document.querySelectorAll('[src]')].map(x => x.src);
		let href = [...document.querySelectorAll('[href]')].map(x => x.href);
		url.push(...href);
		(new Set(url)).forEach(x => {
			console.log(x);
		});
	};
};
