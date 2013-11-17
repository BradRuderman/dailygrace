var testData=[{"content": "",
  "images": [],
  "items": ["Organic Rocolla"],
  "producer": "Suprema",
  "url": ""},
 {"content": "Coke Farm is a 200+ acre farm near Aromas, California about 75 miles from San Francisco, harvesting over fifty crop varieties, has been producing organically grown fruits and vegetables for over thirty years. As a company, Coke Farm is dedicated to providing delicious, healthy,  organic produce not only as a service to our customers, but also for the  betterment of the environment and the health of our hard-working employees. ",
  "images": ["https://dchtm6r471mui.cloudfront.net/hackpad.com_4FBHS7JAJmb_p.91541_1384651002016_coke-family.jpg", "https://dchtm6r471mui.cloudfront.net/hackpad.com_4FBHS7JAJmb_p.91541_1384651047715_Coke%20Farm%20Team.jpg"],
  "items": ["Organic Green Cabbage"],
  "producer": "Coke Farm",
  "url": ""},
 {"content": "",
  "images": [],
  "items": ["Organic Alfalfa Sprouts"],
  "producer": "Banner Mountain Sprouts",
  "url": ""},
 {"content": "",
  "images": [],
  "items": ["Oregano - Pesticide Free"],
  "producer": "Gourmet Specialities",
  "url": ""},
 {"content": "",
  "images": [],
  "items": ["Chives-Pest Free"],
  "producer": "K & C Specialties, Ca",
  "url": ""}];

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