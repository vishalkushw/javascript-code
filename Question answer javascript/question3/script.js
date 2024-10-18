
function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

document.getElementById('btn').addEventListener('click', function() {
    let inputText = document.getElementById('input').value;
    let capitalizedText = capitalizeFirstLetter(inputText);
    document.getElementById('result').innerText = capitalizedText;
});