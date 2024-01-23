function solution(s) {
    var answer = [];
    let check = /^[0-9]+$/;
    let sumStr = "";
    let str = new Map();
    for(let x of s){
        if(check.test(x)){
            sumStr += x;
        } else {
            let toNumStr = Number(sumStr)
            if(str.has(toNumStr)) str.set((toNumStr),str.get(toNumStr)+1) 
            else str.set(toNumStr,0)
            sumStr = "";
        }
    }
    str.delete(0);
    let sortStr = [...str].sort((a,b) => b[1] - a[1])
    sortStr.forEach((el) => {
        answer.push(el[0])
    })
    return answer;
}