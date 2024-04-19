
const searchParams = new URLSearchParams(window.location.search);
var target_url = searchParams.get("qr");
console.log("sending to: " + target_url);


