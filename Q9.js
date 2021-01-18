alert("Q9 Find Armstrong numbers!");
    for(i = 1; i < 100; ++i){
        for(i2 = 0; i2 < 100; ++i2){
            for(i3 = 0; i3 < 100; ++i3){
                let sumPower = (i*i*i + i2*i2*i2 + i3*i3*i3);
                let adds = (i * 100 + i2 * 10 +  i3);
                if (sumPower === adds) {     
                    alert(sumPower);
                }
            }
        }
  }
