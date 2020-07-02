const banner = document.createElement("div");
banner.id = "my-dev-env-banner";
banner.innerHTML = "My Awesome Banner";
document.body.appendChild(banner);

chrome.runtime.onMessage.addListener((request, sender, sendResp) => {
	if (request.env != null) {
		banner.innerHTML = request.env;
		banner.classList.add(`env-${request.env}`);
	}
});
