chrome.webRequest.onBeforeRequest.addListener(function (request) {
	if(request.url.indexOf("distributor") > -1) { //pub = on bloque
		return {cancel: true}; 
	} else if(request.url.indexOf("vp_player") > -1) { //ressources lentes = on redirige vers les locales
		return {
            redirectUrl: chrome.extension.getURL('ressources/as3_vp_player_2.4.15.23.1.swf')
        };
	}
        
}, {
    urls: ["http://fr-canalplus.videoplaza.tv/proxy/distributor/*", 
	"http://fr-canalplus.videoplaza.tv/proxy/as3_vp_player" ]
}, ["blocking"]); 