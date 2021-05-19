const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i in nums){
    if(i == 5){
        break;
    }
    console.log(`i = ${i} = ${nums[i]}`);
}

for (let x in nums) {
    if (x == 5) {
        continue;
    }
    console.log(`x = ${x} = ${nums[x]}`);
}

externo: for( y in nums){
    for( z in nums){
        if(y == 2 && z == 3) break externo
        console.log(`par = ${y}, ${z}`);
    }
}