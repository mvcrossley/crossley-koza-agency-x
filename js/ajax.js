(function(){

	var httpRequest,
	pageSwitch = document.querySelector('#switchSection'),
	navButton = document.querySelectorAll('.navButton'),
	homePage = document.querySelector('#home'),
	i;


		for(i=0; i<navButton.length; i++){
			navButton[i].addEventListener('click', clickedButton, false);
			navButton[i].addEventListener('click', function(e) {makeRequest(e.currentTarget.id+'.html');}, false);



			function clickedButton(e){
				console.log("clicked!");
				console.log(e.currentTarget.id);
			}

			function makeRequest(url){
				httpRequest = new XMLHttpRequest();
				//var buttonID = url.currentTarget.id;

				if(!httpRequest){ // Checking to make sur ethe browser isn't too old	
					alert('Giving up, your browser is too old!');
					return false; // This exits out of a function, will execute the next line after function is closed
				}

				httpRequest.onreadystatechange = showResult;				
				httpRequest.open('GET', url); //Passing in a url through a get protocol, in this case, the "text.txt" file
				httpRequest.send(); 
			}

			function showResult()
			{
				if(httpRequest.readyState === XMLHttpRequest.DONE) {
					if(httpRequest.status === 200) {
						var response =  httpRequest.responseText;
						pageSwitch.innerHTML = response;
					}else{
						console.log('There was a problem with your request.');
					}
				}
			}

			

			
			window.addEventListener('load', function() {makeRequest('home.html');}, false);
		
		
	}

})();
