function solution(n,a,b)
{
    var answer = 0;
    let PL = a;
    let EN = b;
    while(Math.floor(PL) !== Math.floor(EN)){
        PL = PL%2 === 0 ? PL/2 : (PL+1)/2;
        EN = EN%2 === 0 ? EN/2 : (EN+1)/2;
        console.log(PL,EN)
        answer++
    }
    
    return answer;
}