chrome.tabs.onUpdated.addListener(() => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const activeTab = tabs[0];
		const url = activeTab.url;
		let env = null;
		switch (url) {
			case "https://jessler.com/":
				env = "production";
				break;
			case "https://jessler-dev.carrd.co/":
				env = "dev";
				break;
			case "https://jessler-staging.carrd.co/":
				env = "staging";
				break;
			default:
				break;
		}
		chrome.tabs.sendMessage(activeTab.id, {
			env: env,
		});
	});
});
