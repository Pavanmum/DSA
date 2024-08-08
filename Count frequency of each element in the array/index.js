

function countFrequency(arr){
    let freq = {}
    for(let i=0;i<arr.length;i++){
        console.log(freq)
        if(freq[arr[i]]){
            freq[arr[i]]++
        }else{
            freq[arr[i]] = 1
        }
    }
    console.log(freq)
}

countFrequency([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]) // { '1': 4, '2': 4, '3': 4, '4': 4 }