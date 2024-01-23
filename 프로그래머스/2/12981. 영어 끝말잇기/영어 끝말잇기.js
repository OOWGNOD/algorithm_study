function solution(n, words) {
    let before = words[0];
    let turn = 1;
    for(let i=1; i<words.length; i++){
        let player = i % n +1
        let word = words[i]
        if(before[before.length-1] !== word[0]){
            return [player, turn]
        }
        if(words.findIndex((item) => word === item) !== i){
            return [player, turn]
        }
        before = word
        if(player === n) turn++
    }
    return [0,0]
}