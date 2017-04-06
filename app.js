var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltcf7ab57a8e5c2deb')
// .setHost('localhost')
// .setPort(8000)
.setHost("dev-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('blt805b19c9d3020cf0')

var extensionSDK = app.Extension({
	secret_key     : 'blt7dc393e982f98a97',
	extension_key	 : 'devtest',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


