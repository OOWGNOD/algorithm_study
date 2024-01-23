function solution(prices) {
    var answer = Array.from({length: prices.length},()=>1);
    
    for(let i=0; i<prices.length; i++){
        let stack = [prices[i]];
        for(let j=i+1;j<prices.length; j++){
            if(prices[i] <= prices[j]){
                stack.push(prices[j])
            } else {
                stack.push(prices[i])
                break;
            }
        }
        answer[i] = stack.length-1;
        answer[answer.length-1] = 0
    }
    return answer;
}