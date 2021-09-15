rp = require('request-promise');

class Posts {

    buildRequest(token, page){
        let data = {
            sl_token: token,
            page: page
        };
        let req_details = {
            uri: 'https://api.supermetrics.com/assignment/posts',
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            qs: data
          };
          return req_details;
      }


getPosts(token, page){
    return rp(this.buildRequest(token, page));
}


}

module.exports = Posts;

