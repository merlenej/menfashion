var sliderEl = document.getElementById("slider");
var buttonLeftEl = document.getElementById("buttonLeft");
var buttonRightEl = document.getElementById("buttonRight");
let thumbnails = document.getElementsByClassName("thumbnail");

buttonLeftEl.addEventListener("click", () => {
	sliderEl.scrollLeft -= 125;
});
buttonRightEl.addEventListener("click", () => {
	sliderEl.scrollLeft += 125;
});

const maxScrollLeft = sliderEl.scrollWidth - sliderEl.clientWidth;

function autoPlay() {
	if( sliderEl.scrollLeft > maxScrollLeft - 1){
		sliderEl.scrollLeft -= maxScrollLeft;
	}else{
		sliderEl.scrollLeft += 1;
	}
	
}

let play = setInterval(autoPlay, 50);	

for( i = 0; i < thumbnails.length; i++){
	thumbnails[i].addEventListener("mouseover", () => {
	  clearInterval(play);
	})
	thumbnails[i].addEventListener("mouseout", () => {
		return play = setInterval(autoPlay, 50);
	  })
}

