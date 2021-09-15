
const monthlyStats = require('./metrics/MonthlyMessageMetrics.js');
const weeklyStats = require('./metrics/WeeklyMessageMetrics.js');
const userStats = require('./metrics/UserMessageMetrics.js');


class SuperMetrics {
    metrics = {};

    constructor(posts) {
        this.posts = posts;
        this.computeAggs();
    }

    getMetrics() {
        return this.metrics;
    }

    computeAggs() {
        let mStats = new monthlyStats(this.posts);
        let wStats = new weeklyStats(this.posts);
        let uStats = new userStats(this.posts);

        this.metrics['monthlyStats'] = mStats.compute();
        this.metrics['weeklyStats'] = wStats.compute();
        this.metrics['userStats'] = uStats.compute();
        
    }
}

module.exports = SuperMetrics;