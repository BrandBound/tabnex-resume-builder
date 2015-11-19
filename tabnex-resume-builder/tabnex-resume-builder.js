Users = new Mongo.Collection("users");

if (Meteor.isClient) {
	// Meteor.subscribe("users");

	Template.personalDetailsForm.helpers({
		
	});

	Template.personalDetailsForm.events({
		'submit form': function (event) {
			event.preventDefault();
			var firstName = event.target.firstName.value;
			var lastName = event.target.lastName.value;
			var fullName = firstName + " " + lastName;
			var email = event.target.email.value;
			var phone = event.target.phone.value;
			var summary = event.target.summary.value;
			var passObj = {
				"name": fullName,
				"email": email,
				"phone": phone,
				"summary": summary
			}
			console.log(fullName);
			Meteor.call("addUser", passObj);
			console.log("ay");
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup

	});

	// Meteor.publish("users", function () {
	// 	return Users.find();
	// });
}

Meteor.methods({
	addUser: function(obj) {
		Users.remove({});
		console.log(obj);	
		Users.insert(obj);
	}
});
