function solution(genres, plays) {
    var answer = [];
    let music = new Map();
    
    for(let i=0; i<genres.length; i++){
        if(!music.get(genres[i])){
            music.set(genres[i], [{originIndex : i, plays : plays[i]}])
        } else {
            music.get(genres[i]).push({originIndex: i, plays :plays[i]})
        }
    }
    
    let sum = {};
    music.forEach((val,key) => {
        
        let sumNum = val.reduce((acc,cur) => {
            return acc + cur["plays"]
        },0);
        sum[key] = sumNum;
    });
    
    for (const [key, val] of Object.entries(sum)) {
        music.get(key).push({sum :val})
    }
    
    let musicToArr = [...music];
    let sorted = musicToArr.sort((a,b) => b[1].at(-1)["sum"] - a[1].at(-1)["sum"])
    sorted.forEach((val,key) => {
        let sortPlays = val[1].sort((a,b) => b["plays"] - a["plays"]);
            for(let i=0; i<=1; i++){
                if(sortPlays[i]["originIndex"] !== undefined){
                    answer.push(sortPlays[i]["originIndex"])
                }
            }    
    })
    return answer;
}