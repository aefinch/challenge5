var gallery = 
["https://lumiere-a.akamaihd.net/v1/images/character_themuppets_animal_9d53d6e7.jpeg?region=0,0,300,300",
"https://lumiere-a.akamaihd.net/v1/images/character_themuppets_gonzo_9c3596c6.jpeg?region=0,0,300,300",
"https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0,0,300,300",
"https://vignette1.wikia.nocookie.net/muppet/images/e/e5/Janice_m15.jpg/revision/latest?cb=20151008230827",
"https://vignette2.wikia.nocookie.net/muppet/images/6/61/Scooter_photo.jpg/revision/latest?cb=20120206211033",
"https://upload.wikimedia.org/wikipedia/en/5/59/Beaker_%28Muppet%29.jpg",
"https://i.kinja-img.com/gawker-media/image/upload/s--mpAcvSIH--/c_scale,f_auto,fl_progressive,q_80,w_800/z1at3bhcab9thso9jjdj.jpg",
"https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/0b9/e9/2b5c9192bb2f3438-e1491321131619.png",
"https://s-media-cache-ak0.pinimg.com/originals/e8/61/75/e86175e1827082a4c5557ee25470fb2f.jpg",
"https://upload.wikimedia.org/wikipedia/en/b/b5/Rowlf_the_Dog.jpg"];
var galleryString = "";
for (var i=0; i< gallery.length; i++) {
	
	if(i%3===0){
		galleryString +=`<div class="row">`;
	}
	galleryString+=`<div class="col-xs-6 col-md-4">`;
	galleryString+=`<a href="#" class="thumbnail">`;
	galleryString+=`<img src="${gallery[i]}" alt="muppets">`;
	galleryString+=`</a></div>`;
    if(i%3===2){
    	galleryString+=`</div>`;
    }
}


$("#container").html(galleryString);