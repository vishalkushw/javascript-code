function Area() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    
        let area = length * width;
        document.getElementById("result").innerHTML = "The area of rectangle is " + area;
}