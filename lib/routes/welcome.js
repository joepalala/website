'use strict';
const Ejs = require('ejs');

const rootHandler = (request, h) => {
      return 'hello world!';
	
	//{ 
	//      title: 'examples/ejs/templates/basic | Hapi ' + request.server.version,
        //message: 'Hello Ejs!' 
      //:};
};

module.exports = {
    method: 'get',
    path: '/',
    options: {
        handler: async (request, h) => { return rootHandler(request,h); }
	}
};
