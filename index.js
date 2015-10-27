'use strict';
module.exports = function (number) {
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < (number || 40); i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
};
