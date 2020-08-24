const nums=[1,-2,3,-4,5,-6,-7,8];
for(let i=0;i<nums.length;i++){
    const result = nums[i]
    
    // if(result>3){
    //     break;
    // }
    // console.log(result);
    if(result<0){
        continue;
    }
    console.log(result);
} 
