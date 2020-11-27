import axios from 'axios';

export default {
	// Send the email
	sendemail: function (sendData) {
		return axios.post('/api/send', sendData);
	},
};
