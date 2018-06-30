  document.getElementById('heading').innerHTML = localStorage['title'] 
  document.getElementById('content').innerHTML = localStorage['text'] 

  setInterval(function() { // fuction that is saving the innerHTML of the div
	localStorage['title'] = document.getElementById('heading').innerHTML; // heading div
	localStorage['text'] = document.getElementById('content').innerHTML; // content div
  }, 1000);



for( var elms=document.getElementsByClassName('post'), L=elms.length
   ; L--
   ; elms[L].innerHTML=elms[L].getAttribute('placeholder')
   );

for( var elms=document.getElementsByClassName('post2'), L=elms.length
   ; L--
   ; elms[L].innerHTML=elms[L].getAttribute('placeholder')
   );