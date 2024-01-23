function solution(progresses, speeds) {
    var answer = [];
    let que = [];
    while(true){
        if(progresses.length === 0) break;
        for(let i=0; i<progresses.length; i++){
        progresses[i] += speeds[i]
       
        }
        for(let i=0; i<progresses.length; i++){
             while(progresses[0] >= 100){
          if(progresses[i] < 100){
              break;
          } else {
            que.push(progresses.shift())
            speeds.shift()  
          }
        }
        }
        if(que.length > 0) {
            answer.push(que.length);
            que.length = 0;   
        }
    }
    return answer;
}