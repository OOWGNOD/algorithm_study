function solution(s) {
    var answer = '';
    const splitS = s.split(' ').sort((a,b) => a-b)
    return answer = `${splitS[0]} ${splitS[splitS.length -1]}`;
}