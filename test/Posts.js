const assert = require('assert');
const Authenticator = require('../src/Authentication.js');
const Posts = require('../src/Posts.js');

describe('Retrieve posts ', async function() {
    it('Fetch valid token and retrieve posts on first page', async function(){
        let a = new Authenticator();
        let token = await a.getToken();
        let p = new Posts();
        let posts = JSON.parse(await p.getPosts(token,1)).data.posts;
        assert.equal(posts.length,100);
    });
})