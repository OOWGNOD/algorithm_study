function solution(priorities, location) {
    var answer = 0;
    let que = [];
    let max_value = Math.max(...priorities);
    
    for(let i=0; i<priorities.length; i++){
        que.push(i);
    }
    
    while(priorities.length !== 0){
        max_value = Math.max(...priorities);
        
        if(priorities[0] < max_value){
            priorities.push(priorities.shift());
            que.push(que.shift())
        } else {
            answer++
            priorities.shift()
            if(que.shift() === location){
            return answer;
        }
        }
        
    }
}