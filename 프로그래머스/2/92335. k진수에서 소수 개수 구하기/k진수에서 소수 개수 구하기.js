function isPrime(num) {
	if(num <= 1) return false;
 	for(let i = 2; i <= Math.sqrt(num); i++) {
  		if(num % i === 0) return false;
	} 
    return true; 
}

function solution(n, k) {
    var answer = 0;
    let toK = n.toString(k)
    let toArr = toK.split("0")
    for(let x of toArr){
        if(isPrime(Number(x))){
            answer++
        }
    }
    return answer;
}