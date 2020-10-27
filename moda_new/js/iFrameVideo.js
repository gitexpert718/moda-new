function showVideo() {
	url = 'https://www.youtube.com/embed/MOkExQYxH-c?autoplay=1&mute=0';
	var iframe1 = document.getElementById("iFrameID1");
	iframe1.style.display = "block";
	var ifrm = document.createElement('iframe');
	ifrm.setAttribute('id', 'ifrm'); // assign an id
	ifrm.setAttribute('class', 'iFrameIDForVideo'); // assign an id

	document.body.appendChild(ifrm); // to place at end of document
	ifrm.src = url;
}
function closeVideo(){
	var iframe = document.getElementById("iFrameID1");
	var iframe1 = document.getElementById("ifrm");
	iframe.style.display= 'none';
	iframe1.remove();
}
