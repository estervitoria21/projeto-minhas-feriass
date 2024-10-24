const button = document.getElementById('changeColorButton');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8'];

button.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
git add .
git commit -m "Criar site sobre cores"
git push origin main
