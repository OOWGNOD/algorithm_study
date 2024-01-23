function solution(n) {
    var answer = 0;
    let now = 1, count = 1, plusNum = 0;

   
  for(let i = 0; i <= n; i++) {
  	if(n%i === 0 && i%2 === 1) answer++;
  }
        
    return answer;
}