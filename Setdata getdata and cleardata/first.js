document.getElementById("setbtn").addEventListener("click",dataSet);
document.getElementById("getbtn").addEventListener("click",dataGet);
document.getElementById("clearbtn").addEventListener("click",clearData);

function dataSet(){
    let firstNm=document.getElementById("fnm").value;
    let lastNm=document.getElementById("lnm").value;
    window.localStorage.setItem("firstname",firstNm);
    window.localStorage.setItem("lastname",lastNm);
    alert("your data set in local storage");

}

function dataGet(){
    let myfnm= window.localStorage.getItem("firstname");
    let mylnm= window.localStorage.getItem("lastname");
    document.getElementById("ans").innerHTML="Hii my name is "+myfnm +" "+mylnm + " from bhopal ";

}

function clearData(){
    window.localStorage.clear();
    alert("local dat clear");
}
