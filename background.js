chrome.webRequest.onBeforeRequest.addListener(function (request) {
	if(
		request.url.indexOf("piximedia.fr") > -1 ||
		request.url.indexOf("broadcast.pm") > -1 ||
    request.url.indexOf("adsafeprotected.com") > -1 ||
    request.url.indexOf("fwmrm.net") > -1 ||
    request.url.indexOf("nuggad.net") > -1 ||
    request.url.indexOf("revsci.net") > -1 ||
    request.url.indexOf("openad.tf1.fr") > -1 ||
    request.url.indexOf("churccivic.com") > -1
	) { //banniere pub = on bloque
		return {cancel: true};
	} else if(
		request.url.indexOf("static.canal-plus.net/pub/") > -1 ||
		request.url.indexOf("2mdn.net") > -1 ||
    request.url.indexOf("wat.tv/get/externalpubhigh") > -1||
    request.url.indexOf("slpubmedias.tf1.fr") > -1
	) { //vidéo pub = on redirige vers vidéo vide
		return {
            redirectUrl: chrome.extension.getURL('ressources/empty.mp4')
        };
	}
        
}, {
    urls: [
    	"*://static.canal-plus.net/pub/*",
			"*://broadcast.pm/*",
			"*://*.piximedia.fr/*",
			"*://*.2mdn.net/*",
			"*://*.fwmrm.net/*",
			"https://www.wat.tv/get/externalpubhigh/*",
      "*://slpubmedias.tf1.fr/*",
      "*://*.adsafeprotected.com/*"

		]
}, ["blocking"]);