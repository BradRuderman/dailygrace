var testData=
[
 {"content": ["Coke Farm is a 200+ acre farm near Aromas, CA about 75 miles from San Francisco, harvesting over 50 crop varieties, has been producing organically grown fruits and vegetables for over 30 years. "],
  "images": ["https://dchtm6r471mui.cloudfront.net/hackpad.com_4FBHS7JAJmb_p.91541_1384651002016_coke-family.jpg", "https://dchtm6r471mui.cloudfront.net/hackpad.com_4FBHS7JAJmb_p.91541_1384651047715_Coke%20Farm%20Team.jpg","https://dchtm6r471mui.cloudfront.net/hackpad.com_4FBHS7JAJmb_p.91543_1384674501626_Screen%20Shot%202013-11-16%20at%2010.17.01%20PM.png"],
  "items": ["Organic Green Cabbage"],
  "producer": "Coke Farm",
  "url": "http://cokefarm.com/"},
 {"content": ["For more than  25 years, Banner Mountain Sprouts have been producing 100% organic full-line sprouts, offering 20 different varieties, in Elk Grove, California about 72 miles from San Francisco."],
  "images": ["https://dchtm6r471mui.cloudfront.net/hackpad.com_4FBHS7JAJmb_p.91541_1384701891570_sprouts2.jpg","https://dchtm6r471mui.cloudfront.net/hackpad.com_4FBHS7JAJmb_p.91543_1384674473855_Screen%20Shot%202013-11-16%20at%2010.22.50%20PM.png"],
  "items": ["Organic Alfalfa Sprouts"],
  "producer": "Banner Mountain Sprouts",
  "url": "http://www.bannermountainsprouts.com/index.html"},
  {"content": ["K&C Specialties has been committed to the local, sustainable model of food distribution for decades, long before it became a trend. Over the years, They’ve also researched and sourced products nationally and globally to find the very best the world has to offer so they can share those products with their customers."],
  "images": ["https://dchtm6r471mui.cloudfront.net/hackpad.com_4FBHS7JAJmb_p.91543_1384674434445_Screen%20Shot%202013-11-16%20at%2010.19.39%20PM.png","https://dchtm6r471mui.cloudfront.net/hackpad.com_4FBHS7JAJmb_p.91543_1384674413108_Screen%20Shot%202013-11-16%20at%2010.15.48%20PM.png"],
  "items": ["Chives-Pest Free"],
  "producer": "K & C Specialties, Ca",
  "url": "http://www.kandcspecialties.com/mission.html"}]


if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Profiles.find().fetch().length == 0){
			for (var i=0;i<testData.length;i++){
				var id = Profiles.insert({
					"content" : testData[i]['content'],
					"images" : testData[i]['images'],
					"items" : testData[i]['items'],
					"url" : testData[i]['url'],
					"producer" : testData[i]['producer'],
          "likes" : 0
				});
				console.log(id);
			}
		}
	});
}
