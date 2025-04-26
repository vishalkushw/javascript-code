var count = 0;
        var myInt;

        function myFun() {
            document.getElementById("demo").innerHTML = "Happy Birthday, bro!";
            clearInterval(myInt); 
        }

        myInt = setInterval(function() {
            count++;
            document.getElementById("counter").innerHTML = count;

            if (count >= 5) {
                myFun(); 
            }
        }, 2000); 

        function myStopnow() {
            clearInterval(myInt); 
        }
       
