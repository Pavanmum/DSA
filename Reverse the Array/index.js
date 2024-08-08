// # Reverse the Array Its a better approach to reverse the array in place without using any extra space.It directly replace one element with another element in the array.
// # Time complexity is O(n) and space complexity is O(1)


function reverseArray(arr){
    console.log(arr)
    let p1= 0 ,p2 = arr.length-1;
    while(p1<p2){
        let temp = arr[p1]
        arr[p1] = arr[p2]
        arr[p2] = temp
        p1++
        p2--
    }
    console.log(arr)
}

reverseArray([1,2,3,4])


