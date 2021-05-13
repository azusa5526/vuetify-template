import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
	theme: {
		themes: {
			light: {
				primary: '#008DA9',
				secondary: '#C9C889',
				accent: '#C6D4B0',
				info: '#8BB4A3',
				success: '#D1DB55',
				warning: '#F9B15F',
				error: '#CD084D'
			}
		},
		dark: false
	}
};

export default new Vuetify(opts);
