const Authenticator = require('../src/Authentication.js');
const Posts = require('../src/Posts.js');

async function debug_posts_length(){
    let a = new Authenticator();
    let token = await a.getToken();

    let p = new Posts();
    let posts = JSON.parse(await p.getPosts(token, 1)).data.posts;
    console.log(posts.length);
}
