function solution(n) {
    var answer = 0;
    let min = n;
    const s = n.toString(2).split("").filter((val) => val === "1");
    while(true){
        min++
        let filtMin = min.toString(2).split("").filter((val) => val === "1")
        if(filtMin.length === s.length ){
            answer = min;
            break;
        }
    }
    return answer;
}