function listSquared(m, n) {
    var sum_arr=[];
    var num_arr=[];
    
    while(m<=n)
    {
        num_arr.push(m);
        var i=1;
        var sum=0;
        while(i<=m)
        {
            if(m%i===0)
            {
                sum+=i*i;
            }
            i++;
        }
        sum_arr.push(sum);
        m++;
    }
    
    var ans_arr=[];
    var j=0;
    while(j<sum_arr.length)
    {
        var temp=[];
        var k=Math.round(Math.sqrt(sum_arr[j]));
        if(k*k===sum_arr[j])
        {
            temp.push(num_arr[j]);
            temp.push(sum_arr[j]);
            ans_arr.push(temp);
        }
        j++;
    }
    return ans_arr;
}

listSquared(42, 250)