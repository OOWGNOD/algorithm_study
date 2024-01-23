function solution(elements) {
    let answer = new Set();
    let len = elements.length;
    let circle = [...elements, ...elements.slice(0, len-1)];
    for(let i=0; i<len; i++){
        let sum = 0;
        for(let j=0; j<len; j++){
            sum += circle[i+j];
            answer.add(sum);
        }
    }
    return answer.size;
}