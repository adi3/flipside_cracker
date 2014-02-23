var analyticsId = 'UA-36037014-3';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', analyticsId]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file:"solver.js"});
});