// TODO: To replace request-promise with a axios as request-promise is deprecated.
// request-promise module for making async http calls to sm uris.

rp = require('request-promise');

/**
 * Authenticator module is responsible providing token for api calls.
 * 
 */

class Authenticator {

    token = null;

    buildRequest() {
        // TODO: implement change over to a config based load of request params.

        let data = JSON.stringify({
            'client_id': 'ju16a6m81mhid5ue1z3v2g0uh',
            'email': 'shashank.bezgoan@gmail.com',
            'name': 'Shashank'
        });


        let req_details = {
            url: 'https://api.supermetrics.com/assignment/register',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            },
            body: data
        };
        return req_details;
    }

    getAuth() {
        return rp(this.buildRequest());
    };

    async fetchAndParseToken() {
        let response = await this.getAuth();
        this.token = JSON.parse(response).data.sl_token;
        return this.token;
    }

    async getToken() {
        try {
            if (this.token === null) {
                await this.fetchAndParseToken();
            }
            return this.token;
        } catch (e) {
            console.log(e);
        }
    }

    // Not tested.
    //This is just a semantic indication.
    async refreshToken() {
        setInterval(await this.fetchAndParseToken(), 3500000)
    }

}

module.exports = Authenticator;


async function local_test() {
    let a = new Authenticator();
    let token = await a.getToken();
    console.log(typeof (token));
    console.log(token.startsWith('smslt'));
}

// local_test();