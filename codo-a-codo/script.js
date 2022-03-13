
function challenge() {
    let input = document.getElementById('radio').value;
    let radio = parseInt(input);
    const pi = 3.14;
    let area = pi * (radio * radio);
    alert(`El área del círculo es ${area}`);
}