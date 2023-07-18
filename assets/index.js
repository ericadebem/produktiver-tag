/* const getName = () => {
    const name = document.getElementById('name').value;
    if (name === '') {
        alert('Por favor, insira seu nome');
    localStorage.setItem('name', name); 
    }
};|*/

const redirect = () => {
    const name = document.getElementById('name').value;
    if (name === '' || name.length < 3) {
        alert('Oh Oh! Ungültiger Name :(');
    } else {
        localStorage.setItem('name', name);
        location.href = './pages/main.html'; 
    }
};  
    const welcomeMessage = `Hallo, ${localStorage.getItem('name')}!`;
    document.body.getElementById('#welcomeMessage').innerHTML = welcomeMessage;
    