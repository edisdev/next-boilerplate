module.exports = { 
	'*.{js,jsx}':[
		'eslint --fix',
		'git add'
	],
	'src/**/*.js': [
		'eslint --fix',
		'git add'
	]
}
