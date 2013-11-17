
if (Meteor.isClient) {
  Meteor.startup(function () {
  	Session.setDefault("likedPids",[]);
  	Session.setDefault("gift",false);
  });
}

Template.index.profile = function () {
  return Profiles.find().fetch();
};

Template.index.gift = function(){
	var s = Session.get('gift');
	if (s){
		return true;
	}
	return false;
}

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

Template.profile.events({
	"click .btn-like" : function(e,tmpl){
		var pid = $(e.srcElement).closest(".profile").attr('pid');
   		var p = Session.get('likedPids');
   		if (p.indexOf(pid) < 0){
			Profiles.update(
			{
				"_id" : pid 
			},
	   		{ 
	   			$inc: { likes: 1 } 
	   		});   			
   		}
   		p.push(pid);
   		Session.set("likedPids", p);
	},
	"click .btn-gift" : function(e,tmpl){
		var pid = $(e.srcElement).closest(".profile").attr('pid');
		Session.set("gift",pid);
	}
});