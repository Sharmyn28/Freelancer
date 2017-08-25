var content = document.getElementById('containerGrid');
var sourcePic = ['cabin.png','cake.png','circus.png','game.png','safe.png','submarine.png'];

for(var i in sourcePic){
	var div = document.createElement('div');
	var img = document.createElement('img');
	div.setAttribute('class','div-image');
	img.src = 'assets/img/portfolio/'+ sourcePic[i];
	div.appendChild(img);
	content.appendChild(div);
}

var modal = document.getElementById('modal');
var close = document.getElementById('close');
var btnClose = document.getElementById('btn-close');
var contentImage = document.getElementById('viewImage');
var classImage = document.getElementsByClassName('div-image');

content.addEventListener("click",function(event){
	if (event.target.tagName == "IMG"){
		modal.style.display = "block";
		contentImage.src = event.target.src;
		contentImage.id = event.target.id;
	}
});
content.addEventListener("mouseover",function(event){
	if (event.target.tagName == "IMG"){
		//event.target.style.backgroundColor = '#18bc9c';
		//event.target.style.backgroundColor = 'red';
		var div = document.createElement('div');
		div.setAttribute('class','div-imageOver');
		//div.style.backgroundColor = "lightblue";
		content.appendChild(div);
		
		console.log('funciona');
	}
});

close.addEventListener("click",function(){
	modal.style.display = "none";
});

btnClose.addEventListener("click",function(){
	modal.style.display = "none";
});