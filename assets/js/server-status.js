const prom = new Prometheus.PrometheusDriver({
	endpoint: 'https://status.mhrtech.my',
	baseURL: 'metrics',
	auth: {
		username: 'owner',
		password: 'ub4gqVtH57njrMkQ',
	},
})

var owner = 'ub4gqVtH57njrMkQ'