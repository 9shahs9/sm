const weekly = require('../src/metrics/WeeklyMessageMetrics.js');
const posts = require('./SampleData.js');
const assert = require('assert');

describe('Weekly Stats', function () {
    it('must return a non null result', function () {
        let m = new weekly(posts);
        assert.ok(m.compute());
    });

    it('must compute values accurately', function(){
        let expected = '{"weeklyCount":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,36,37,15]}';
        let m = new weekly(posts);
        assert.equal(expected, JSON.stringify(m.compute()));
    });
});
