
const monthlyStats = require('./metrics/MonthlyMessageMetrics.js');
const weeklyStats = require('./metrics/WeeklyMessageMetrics.js');
const userStats = require('./metrics/UserMessageMetrics.js');


class SuperMetrics {
    metrics = [];

    constructor(posts) {
        this.posts = posts;
        this.computeAggs();
    }

    getMetrics() {
        return this.metrics;
    }

    computeAggs() {
        let results = [];
        
        let mStats = new monthlyStats(this.posts);
        let wStats = new weeklyStats(this.posts);
        let uStats = new userStats(this.posts);

        results.push(mStats.compute());
        results.push(wStats.compute());
        results.push(uStats.compute());
        
        this.metrics = results;
    }
}

module.exports = SuperMetrics;