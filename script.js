// Selecciona todos los botones de redimir
const redeemButtons = document.querySelectorAll('.redeem-btn');

// Agrega un evento de clic a cada botón
redeemButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Elimina el bono (el contenedor padre del botón)
    const bono = e.target.closest('.bono');
    bono.style.display = 'none';
  });
});
