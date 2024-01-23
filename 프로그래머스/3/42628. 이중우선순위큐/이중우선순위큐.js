function solution(operations) {
    var answer = [];
    for(let x of operations){
        const splt = x.split(" ")
        if(splt[0] === 'I'){
            answer.push(Number(splt[1]))
        } else if(splt[0] === 'D' && splt[1] === "1"){
            answer.splice(answer.indexOf(Math.max(...answer)),1);
        } else if(splt[0] === 'D' && splt[1] === "-1"){
            answer.splice(answer.indexOf(Math.min(...answer)),1)
        }
    }
    return answer = answer.length === 0 ? [0,0] : [Math.max(...answer),Math.min(...answer)];
}