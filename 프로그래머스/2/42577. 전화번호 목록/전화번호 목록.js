function solution(phone_book) {
    let answer = true;
    let arr = [...phone_book]
    arr = arr.sort()
    for(let i=0; i<arr.length; i++){
    const regex = new RegExp(`^${arr[i]}`)
        let nextStr = arr[i+1]
        if(regex.test(nextStr)) return false;
    }
    return answer
}