
Template.index.profile = function () {
  return Profiles.find().fetch();
};


Template.image_carousel.rendered = function () {  
  var profiles = Profiles.find().fetch();
  for (var i=0;i<profiles.length;i++){
  	var id = "#img-carousel-" + profiles[i]._id;
	$(id).owlCarousel({
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true
	});
  }
}