(function(){

	var img = document.querySelector(".tmnlImg");
	var name = document.querySelector(".tmnlName");
	var caseP = document.querySelector(".tmnlCase");
	var text = document.querySelector(".tmnlText");
	var tmnlCon = document.querySelector("#tmnlCon");

	//console.log(tmnlCon);

	/*tmnlObject.forEach(name, function(){
		console.log();
		tmnlCon.innerHTML = '<h2>'+element+'</h2>';
	});*/

	// function tmnlContent(){

	// 	console.log (tmnlCon);

	// 	for (var i in tmnlObject){
	// 		var newDiv = document.createElement('div');
	// 		newDiv.className = 'object';
	// 		newDiv.innerHTML = '<div class=\'testimonial small-12 medium-4 large-4 columns\'>'+tmnlObject[i].pic+tmnlObject[i].name+tmnlObject[i].case+tmnlObject[i].testimonial+'</div>';
	// 		document.body.appendChild(newDiv);
	// 	}



	// 		// for(var j in tmnlObject){
	// 		// 	//console.log(j);
				
	// 		// 	//tmnlCon.innerHTML += '<div class="large-12 columns"></div>';	
	// 		// 	//var newDiv = tmnlCon.createElement('div');

	// 		// 	//newDiv;			
	// 		// 	var tmnlObj = tmnlObject[j];

	// 		// 	for (var i in tmnlObj){
	// 		// 		//console.log(i);
	// 		// 		//console.log(tmnlObj[i]);
	// 		// 		var arrayOutput = document.createElement('div');
	// 		// 		var tObj = tmnlObj[i];
					
	// 		// 			if(i === 'name'){
	// 		// 				var newN = document.createElement('p');
	// 		// 			}


	// 		// 		arrayOutput.className = 'object';
	// 		// 		document.body.appendChild(arrayOutput);
					
	// 		// 	}
	// 		// }
	// }

	//window.addEventListener("load", tmnlContent, false);

	/*
		for (var i in tmnlObject){
			var newDiv = document.createElement('div');
			newDiv.className = 'object';
			newDiv.innerHTML = '<h2>'+tmnlObject[i]+'</h2>';
			document.body.appendChild(newDiv);
		}
	*/
	

/*	var cars = ['Saab','Volvo','BMW','GC','Nissan','Ford'];
for (var c in cars) {
    var newElement = document.createElement('div');
    newElement.id = cars[c]; 
    newElement.className = "car";
    newElement.innerHTML = cars[c];
    document.body.appendChild(newElement);
}*/

	//window.addEventListener('load', tmnlDump, false);

})();

/*
	var theImages = document.querySelectorAll(".image-holder");
	var heading = document.querySelector(".heading");
	var title = document.querySelector(".main-copy h2");
	var paragraph = document.querySelector(".main-copy p");
	var appliedClass;

	function changeElements()
	{
		heading.classList.remove(appliedClass); //Clears any existing classes so that it may change back each time
		title.classList.remove(appliedClass);

		heading.classList.add(this.id);
		title.classList.add(this.id);
		
		appliedClass = this.id;
		title.firstChild.nodeValue = dynamicContent[this.id].headline; //These are accessing parts of an object located in contentObject
		paragraph.firstChild.nodeValue = dynamicContent[this.id].text;
	}

	[].forEach.call(theImages, function(image) {
		image.addEventListener('click', changeElements, true);
	});

	title.firstChild.nodeValue = dynamicContent["spring"].headline; //These change the content on load
	paragraph.firstChild.nodeValue = dynamicContent["spring"].text;
	heading.classList.add("spring");
*/