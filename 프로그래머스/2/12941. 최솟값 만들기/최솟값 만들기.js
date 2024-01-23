function solution(A,B){
    var answer = 0;
    A.sort((a,b) => a-b) 
    B.sort((a,b) => b-a)
    return answer = A.reduce((sum, curr, i) => sum + curr * B[i], 0);
}