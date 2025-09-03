interface EnvironmentConfig {
	adminUrl: string;
	homeUrl: string;
}

const getEnvironmentConfig = (): EnvironmentConfig  => {
	const hostname: string = window.location.hostname;

	 const configs: Record<string, EnvironmentConfig> = {
		// Production
		'jaustis.lt': {
			adminUrl: 'https://admin.jaustis.lt',
			homeUrl: 'https://jaustis.lt',
		},
		'www.jaustis.lt': {
			adminUrl: 'https://admin.jaustis.lt',
			homeUrl: 'https://jaustis.lt',
		},
		'admin.jaustis.lt': {
			adminUrl: 'https://admin.jaustis.lt',
			homeUrl: 'https://jaustis.lt',
		},

		// Demo Production
		'demo.jaustis.lt': {
			adminUrl: 'https://admin.demo.jaustis.lt',
			homeUrl: 'https://demo.jaustis.lt',
		},
		'www.demo.jaustis.lt': {
			adminUrl: 'https://admin.demo.jaustis.lt',
			homeUrl: 'https://demo.jaustis.lt',
		},
		'admin.demo.jaustis.lt': {
			adminUrl: 'https://admin.demo.jaustis.lt',
			homeUrl: 'https://demo.jaustis.lt',
		},

		// Development
		'jaustis.dulevicius.dev': {
			adminUrl: 'https://admin.jaustis.dulevicius.dev',
			homeUrl: 'https://jaustis.dulevicius.dev',
		},
		'www.jaustis.dulevicius.dev': {
			adminUrl: 'https://admin.jaustis.dulevicius.dev',
			homeUrl: 'https://jaustis.dulevicius.dev',
		},
		'admin.jaustis.dulevicius.dev': {
			adminUrl: 'https://admin.jaustis.dulevicius.dev',
			homeUrl: 'https://jaustis.dulevicius.dev',
		},

		// Demo Development
		'jaustis.demo.dulevicius.dev': {
			adminUrl: 'https://admin.jaustis.demo.dulevicius.dev',
			homeUrl: 'https://jaustis.demo.dulevicius.dev',
		},
		'www.jaustis.demo.dulevicius.dev': {
			adminUrl: 'https://admin.jaustis.demo.dulevicius.dev',
			homeUrl: 'https://jaustis.demo.dulevicius.dev',
		},
		'admin.jaustis.demo.dulevicius.dev': {
			adminUrl: 'https://admin.jaustis.demo.dulevicius.dev',
			homeUrl: 'https://jaustis.demo.dulevicius.dev',
		},

		// Local
		localhost: {
			adminUrl: 'http://admin.localhost:5173',
			homeUrl: 'http://localhost:5173',
		},
	};

	return configs[hostname] || configs['localhost'];
};

export default getEnvironmentConfig;