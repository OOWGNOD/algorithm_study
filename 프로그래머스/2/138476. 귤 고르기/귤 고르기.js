function solution(k, tangerine) {
    let answer = 0;
    let obj = new Map();
    for(let i=0; i<tangerine.length; i++){
        const target = obj.get(tangerine[i])
        obj.set(tangerine[i], target ? target + 1: 1)
    }
    const val = Array.from(obj.values()).sort((a,b) => b-a);
    for(let i=0; i<tangerine.length; i++){
        if(k <= 0) break;
        k -= val[i];
        answer++
    }
    
    return answer;
}