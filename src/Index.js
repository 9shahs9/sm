const Authenticator = require('./Authentication.js');
const Posts = require('./Posts.js');
const SuperMetrics = require('./SuperMetrics.js');
const beautify=require('json-beautify');

// TODO: Authenticator must ideally cache the token and only refresh after expiry.
// For caching token, need to break the Promise mechanism, which I have no clue how to do at moment.

async function getToken(){
    const auth = new Authenticator();
    const token = await auth.getToken();
    return token;
}

async function main(){
    try{
        let allPosts = [];
        let token = await getToken();
        console.log(token);
        const posts = new Posts();
        
        for (let i = 0; i < 10; i++){
            let myPosts = JSON.parse(await posts.getPosts(token,i)).data.posts;
            allPosts = allPosts.concat(myPosts);
        }
        
        sp = new SuperMetrics(allPosts);
        console.log(beautify(sp.getMetrics(), null,2,100));
        
    }catch(e){
        console.log(e);
    } 
}

main();