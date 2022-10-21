// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// @params = {}
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

const twoSum =(nums, target)=>{
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
    }
}

const twoSumImprov =(nums, target)=>{
    let pop = nums.shift()
    let length = nums.length
    let notFound = true
    let indexCount = 0
    while(notFound){
        for(let i = 0; i<length; i++){
            if(pop + nums[i] === target){
                notFound = false
                return [indexCount, i + indexCount + 1]
            }
        }
        pop = nums.shift()
        length = nums.length
        indexCount++
    }
}

const twoSumImprov2 =(nums, target)=>{
    for(let i = 0; i<nums.length; i++){
        let compliment = nums[i] > target ? nums[i] - target:target - nums[i] 
        let indexOfCompliment = nums.indexOf(compliment)
        if(indexOfCompliment !== -1){
            return [i, indexOfCompliment]
        }
    }
}

console.log(twoSumImprov2([2,7,11,15], 9))
console.log(twoSum([2,7,11,15], 9))

console.log(twoSumImprov([2,7,11,15], 18))
