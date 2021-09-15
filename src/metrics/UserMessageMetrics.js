const monthlyStats = require('./MonthlyMessageMetrics.js');

class UserMessageMetrics {

    constructor(posts){
        this.posts = posts;
    }

    compute(){
        return this.monthlyAverages(this.monthlyCountsPerUser());
    }

    getUserMonthlyAverage(userData){
        let totalPosts = 0;
        let totalMonths = 0;
        for (let i = 0; i < userData.length;i++){
            if(userData[i] != null){
                totalPosts = totalPosts + userData[i];
                totalMonths = totalMonths + 1;
            }
        }
        return totalPosts/totalMonths;
    }

    monthlyAverages(usersMonthlyStat){
        let userMonthlyAvgs = {};
        for (let user in usersMonthlyStat){
            let userData = usersMonthlyStat[user];
            userMonthlyAvgs[user] = this.getUserMonthlyAverage(userData);
        }
        return userMonthlyAvgs;
    }

    monthlyCountsPerUser(){
        let usersMonthlyStat = {};
        for (let i = 0; i < this.posts.length; i++){
            let post = this.posts[i];
            let oneUserStats = usersMonthlyStat[post.from_id];
            let d = new Date(post.created_time);
            if (oneUserStats === undefined || oneUserStats === null) {
                oneUserStats = [];
                oneUserStats[d.getMonth()] = 1;
            }else{
                if(oneUserStats[d.getMonth()] === undefined || oneUserStats[d.getMonth()] === null) {
                    oneUserStats[d.getMonth()] = 1;
                }
            }
            oneUserStats[d.getMonth()] = oneUserStats[d.getMonth()] + 1;
            usersMonthlyStat[post.from_id] = oneUserStats; 
        }
        return usersMonthlyStat;
    }

    // sortPostsbyUser(){
    //     let userPostsMap = {};
    //     for (let i in this.posts){
    //         let post = this.posts[i];
    //         if (userPostsMap[post.from_id] === undefined || userPostsMap[post.from_id] ==null ){
    //             userPostsMap[post.from_id] = [];
    //         }
    //         userPostsMap[post.from_id].push(post);
    //     }
    //     return userPostsMap;
    // }
}

module.exports = UserMessageMetrics;

