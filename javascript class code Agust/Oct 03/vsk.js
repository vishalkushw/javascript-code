document.getElementById("btn1").addEventListener("click",dataSave);
document.getElementById("btn2").addEventListener("click",dataDisplay);

function dataSave(){
        let rollno=getElementById("rno").value;
        let name=getElementById("nm").value;
        let city=getElementById("ct").value;
        let fees=getElementById("fs").value;
        let api = "http://localhost:3000/student";
        fetch(api,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "rollno":rollno,
                "name":name,
                "city":city,
                "fees":fees 
            })
        }).then((res)=>{
            alert("data save");
        });

}

async function dataDisplay(){
     let MyData="";
    let api="http://localhost:3000/student";

    const myobj= await fetch(api);
    const Data= await myobj.json();

    Data.map((key)=>{
        MyData+=`<h1> Rollno: ${key.rollno} </h1>
               <h1> Student name: ${key.name} </h1>
               <h1> city: ${key.city} </h1>
               <h1> fees: ${key.fs} </h1>
        `
    })
    document.getElementById("demo").innerHTML=MyData;
}