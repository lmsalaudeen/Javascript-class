function divReplacement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 ==0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) 
            arr[i] = "yu-gi-oh";
        else if (arr[i] % 2 ==0 && arr[i] % 5 == 0) 
            arr[i] = "yu-oh";
        else if (arr[i] % 3 ==0 && arr[i] % 5 == 0) 
            arr[i] = "gi-oh";
        else if (arr[i] % 2 == 0 && arr[i] % 3 == 0) 
            arr[i] = "yu-gi";
        else  if (arr[i] % 2 == 0) 
            arr[i] = "yu";
        else if (arr[i] % 3 == 0) 
            arr[i] = 'gi';
        else if (arr[i] % 5 == 0) 
            arr[i] = "oh";
        else
            arr[i] = arr[i];   
        }
    console.log(arr);
    return arr;
}

let oneHundred = new Array(100);
for (let i = 0; i < oneHundred.length; i++) {
    oneHundred[i] = i + 1; 
}
divReplacement(oneHundred);

let thirty = new Array(30);
for (let i = 0; i < thirty.length; i++) {
    thirty[i] = i + 1; 
}
divReplacement(thirty);


    