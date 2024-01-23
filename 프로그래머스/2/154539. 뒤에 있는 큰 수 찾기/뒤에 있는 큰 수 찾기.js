function solution(numbers) {
    var answer = Array.from({length: numbers.length}, () => -1);
    
    for(let i = numbers.length - 2; i >= 0; i--){
        let cur = numbers[i];
          for(let j=i+1; i<numbers.length; j++){
            let curj = numbers[j]
            if(cur < curj){
                answer[i] = curj;
                break;
            };
              
            if(answer[j] === -1) break;
              
            if (cur < answer[j]) {
                answer[i] = answer[j];
                break;
            }  
          }
            
        }    
    
    return answer;
}