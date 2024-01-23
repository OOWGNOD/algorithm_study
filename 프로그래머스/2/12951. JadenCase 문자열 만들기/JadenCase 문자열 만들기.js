function solution(s) {
    var answer = '';
    let arr = s.split("")
    let newArr = []
    
    for(let i=0; i<arr.length; i++){
        if(i === 0 || arr[i-1] === " "){
            newArr.push(arr[i].toUpperCase())
        } else {
            newArr.push(arr[i].toLowerCase())
        }  
        answer = newArr.join("")
    }
    return answer;
}