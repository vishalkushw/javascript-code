   function pattern(){
        let num=4;
        let str="";
        for(let i=0;i<num;i++){
            for(let j=4;j>i;j--){
                str+=j+" ";
                }
                str+="<br>";
            }
     document.getElementById("demo").innerHTML=str;
    }
    