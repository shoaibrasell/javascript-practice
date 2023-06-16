var numbers = [4,5,6,33,2,32,12,66,77,45,102];
    for(var i= 0; i<numbers.length; i++){
        var number = numbers[i];
        if(number  > 40)
        {
            continue;
        }
        console.log(number);
    }