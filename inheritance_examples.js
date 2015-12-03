
var Person = Backbone.Model.extend({

	getFullName: function() {
		return this.get("firstName") + " " + this.get("lastName");
	},

	defaults: {
		firstName: "Bob",
		lastName: "Smith"
	}

});

var person = new Person({
	firstName: "John", lastName: "Jones"
});
console.log(person.getFullName());


var childScope = $scope.$new();

$scope.getFullName = function() {
	return this.firstName + " " + this.lastName;
}
childScope.firstName = "Bob";
childScope.lastName = "Smith;"

console.log(childScope.getFullName());

class Person {

	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;

	}

	getFullName: function() {
		return this._firstName + " " + this._lastName;
	}

	get firstName() {
		return this._firstName;
	}

	set firstName(value) {
		this._firstName = value;
	}

	get lastName() {
		return this._lastName;
	}

	set lastName(value) {
		this._lastName = value;
	}
}

class Employee extends Person {

}

var person = new Person("Jimmy", "Johns");
console.log(person.getFullName());
