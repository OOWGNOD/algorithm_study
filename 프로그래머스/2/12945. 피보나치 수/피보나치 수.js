function solution(n) {
    let answer = [0,1]
    for(let i=2; i<=n; i++){
        let sum = answer[i-1]+ answer[i-2]
        answer.push(sum % 1234567)
    }
    return answer[n]
}