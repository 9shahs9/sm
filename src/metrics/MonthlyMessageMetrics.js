class MessageMetricsMonthly {
    
    constructor(posts){
        this.posts = posts;
    }
    averageLength = [];
    maxLength = [];
    compute(){
        let metric = [];
        for (let i in this.posts){
            let post = this.posts[i];
            let d = new Date(post.created_time);
            let data = metric[d.getMonth()];
            data = this.getAgg(post,data);
            metric[d.getMonth()] = data;
            this.averageLength[d.getMonth()] = data.average;
            this.maxLength[d.getMonth()] = data.maxLen;
        }
        return {'averagePerMonth': this.averageLength, 'longestPerMonth': this.maxLength};
    }

    getAgg(post, current_metric) {
        let len = this.getPostLen(post);
        if (current_metric == undefined || current_metric == null) {
            current_metric = {
                totalCount: 1, 
                totalLength: len, 
                average: len, 
                maxLen: len };
        }
        else {
            current_metric.totalCount +=1;
            current_metric.totalLength += len;
            current_metric.average = current_metric.totalLength/current_metric.totalCount;
            if(current_metric.maxLen < len){
                current_metric.maxLen = len;
            }
        }
        return current_metric;

    }
    getPostLen(post){
        return post.message.length;
    }

}

module.exports = MessageMetricsMonthly;