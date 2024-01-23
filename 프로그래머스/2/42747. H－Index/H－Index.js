function solution(citations) {
    citations.sort((a,b) => a-b)
    let answer = 0;
    for(let i=0; i<citations.length; i++){
        let stack=0;
        for(let j=i; j<citations.length; j++){
            if(citations[j] >= citations[i]){
            stack++            
            }
            
        }
        answer = stack
        if(citations[i] >= answer) return answer
    }
    return answer = 0
}