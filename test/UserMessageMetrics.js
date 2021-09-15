const userStats = require('../src/metrics/UserMessageMetrics.js');
const posts = require('./SampleData.js');
const assert = require('assert');

describe('User Stats', function () {
    it('must return a non null result', function () {
        let m = new userStats(posts);
        assert.ok(m.compute());
    });

    it('must compute values accurately', function(){
        let expected = '{"user_3":4,"user_2":3.5,"user_0":3,"user_11":6,"user_13":3.5,"user_14":5,"user_1":4,"user_5":3,"user_16":8,"user_8":3.5,"user_19":4.5,"user_6":4,"user_7":3.5,"user_12":3,"user_10":3,"user_18":4,"user_17":2.5,"user_15":2.5,"user_4":2,"user_9":4}';
        let m = new userStats(posts);
        assert.equal(expected, JSON.stringify(m.compute()));
    });
});
