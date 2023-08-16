function lonelyinteger(a) {
    // Write your code here
    for(let i of a){
        let acc = 0
        for(let j of a){
            if(i === j) acc ++
        }
        if(acc === 1) return i
    }
}

console.log(lonelyinteger([1,2,3,4,3,2,1]));