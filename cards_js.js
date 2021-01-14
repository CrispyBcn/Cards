let list = document.querySelector('.fullclick');
list.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
        e.target.parentNode.style.transition = '0.5s';
        e.target.parentNode.className = 'todelete';
    }
});
list.addEventListener('transitionend', e => {
    if (e.target.classList.contains('todelete')) {
        e.target.remove();
    }    
});