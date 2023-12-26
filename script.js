//your JS code here. If required.
let browserInfo=document.getElementById("browser-info");
document.addEventListener("DOMContentLoaded",function(){
	let user=navigator.userAgent
	let browserName=navigator.appName;
	let appVersion=navigator.appVersion;
	browserInfo.innerText="You are using "+browserName+" version "+appVersion;
})