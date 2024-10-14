document.getElementById("btn1").addEventListener("click", mycal);

function mycal() {
    let physics = Number(document.getElementById("phy").value);
    let chemistry = Number(document.getElementById("che").value);
    let math = Number(document.getElementById("math").value);
    let english = Number(document.getElementById("eng").value);
    let hindi = Number(document.getElementById("hindi").value);

    let totalmarks = physics + chemistry + math + english + hindi;
    let per = (totalmarks / 500) * 100;

    document.getElementById("ans1").innerHTML = "Total marks: " + totalmarks;
    document.getElementById("ans2").innerHTML = "Percentage: " + per.toFixed(2) + "%";
}
