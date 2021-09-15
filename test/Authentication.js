const assert = require('assert');
const Authenticator = require('../src/Authentication.js');

describe('Authentication ', function() {
    it('must retrieve a token', async function(){
        let a = new Authenticator();
        let token = await a.getToken();
        assert.ok(token);      
    });

    it('must be a valid token', async function(){
        let a = new Authenticator();
        let token = await a.getToken();
        assert.ok(token.startsWith('smslt_'));
    });
})