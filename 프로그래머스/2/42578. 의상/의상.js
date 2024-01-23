function solution(clothes) {
    let answer = 1;
    let wear = {};
    clothes.forEach(i => {
        let key = i[1]
        if(wear[key] === undefined){
            wear[key] = [i[0]]
        } else {
            wear[key].push(i[0])
        }
    });
    for(let [key,val] of Object.entries(wear)){
        answer *= (wear[key].length+1)
    }
    answer -=1;
    return answer;
}