var theData;

module.exports = {

	setData: function(data) {
		theData = data;
	},

	getData: function() {
		return theData;
	},

	square: function (t) {
		return t * t;
	},

	add: function (x,y) {
		return x+y;
	},

	mul: function (x,y) {
		return x*y;
	}

};
