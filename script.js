document.getElementById('contactLink').addEventListener('click', function() {
    var popup = document.getElementById('contactPopup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});
