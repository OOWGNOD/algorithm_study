function solution(cacheSize, cities) {
    var answer = 0;
    const cache = [];
    if(cacheSize===0) return cities.length * 5
    cities.forEach((el) => {
        let lower = el.toLowerCase();
        const index = cache.indexOf(lower);
        answer += cache.includes(lower) ? 1: 5;
        if(cache.length < cacheSize){
            cache.push(lower);
        } else {
           if(cache.includes(lower)){
            cache.splice(index,1);
            } else {
                cache.shift();
            }
            cache.push(lower)
        }
    })
    return answer;
}