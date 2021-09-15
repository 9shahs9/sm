class MessageMetricsWeekly {
    constructor(posts){
        this.posts = posts;
    }

    compute(){
        let weeklyCount = [];
        for (let i in this.posts){
            let post = this.posts[i];
            let d = new Date(post.created_time);
            let week = this.getWeekNumber(d);
            if (weeklyCount[week] == null) {
                weeklyCount[week] = 1;
            }else{
                weeklyCount[week] = weeklyCount[week]+1;
            }
        }
        return {'weeklyCount': weeklyCount};
    }

    getWeekNumber(d) {
        var oneJan = new Date(d.getFullYear(), 0, 1);
        var numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));
        var result = Math.floor((1 + numberOfDays) / 7);
        return result;
    }
}

module.exports =MessageMetricsWeekly;