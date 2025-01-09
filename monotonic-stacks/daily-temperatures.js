/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0)
    const stack = []
    
    for (let i = 0; i < temperatures.length; i++) {
        const currentTemp = temperatures[i]

        while (stack.length > 0 && temperatures[stack[stack.length-1]] < currentTemp) {
            const prevDay = stack.pop()
            answer[prevDay] = i - prevDay
        }
        stack.push(i)
    }

    return answer

};

// Time complexity: O(n)
// Space complexity: O(n)

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
console.log(dailyTemperatures([30, 40, 50, 60]))
