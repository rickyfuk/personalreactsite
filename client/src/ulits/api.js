import axios from 'axios';

export default {
	// Send the emai
	sendemail: function (sendData) {
		return axios.post('/api/send', sendData);
	},
};
