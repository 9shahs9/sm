const monthly = require('../src/metrics/MonthlyMessageMetrics.js');
const posts = require('./SampleData.js');
const assert = require('assert');

describe('Monthly Stats', function () {
    it('must return a non null result', function () {
        let m = new monthly(posts);
        assert.ok(m.compute());
    });

    it('must compute values accurately', function(){
        let expected = '{"averagePerMonth":[null,null,null,null,null,null,null,360.84090909090907,435.14285714285717],"longestPerMonth":[null,null,null,null,null,null,null,732,741]}';
        let m = new monthly(posts);
        assert.equal(expected, JSON.stringify(m.compute()));
    });
});
