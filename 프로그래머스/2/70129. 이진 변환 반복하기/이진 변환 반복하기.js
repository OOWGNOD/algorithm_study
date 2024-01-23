function conversion(n){
    let stack = [];
    for(let x of n){
        if(x === "1"){
            stack.push(x)
        }
    }
    return [n.length - stack.length, Number(stack.length).toString(2)]
}

function solution(s) {
    let sum = 0;
    let tryN = 0;
    while(true){
        tryN++
        sum += conversion(s)[0];
        s = conversion(s)[1];
        if(s === "1") break;
    }
    return [tryN,sum];
}