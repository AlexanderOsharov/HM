document.getElementById('mainVideo').addEventListener('ended', function () {
    this.load();
    this.play();
}, false);

// Получаем элементы модального окна
var modal = document.getElementById("qrModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var closeModal = document.getElementById("closeModal");

// Получаем все элементы QR-кода
var qrImages = document.querySelectorAll('.qr-code-icon');

qrImages.forEach(function(qrImage) {
    qrImage.addEventListener('click', function() {
        modal.style.display = "block"; // Отображаем модальное окно
        modalImg.src = this.src; // Устанавливаем источник изображения
        captionText.innerHTML = this.alt; // Устанавливаем подпись
    });
});

// Закрываем модальное окно при нажатии на крестик
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при нажатии вне изображения
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
