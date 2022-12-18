let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

const showInfo = () => {
    moreInfo.style.display = 'block';
}

const hideInfo = () => {
    moreInfo.style.display = 'none';
}

readMore.addEventListener('click', showInfo);
readMore.addEventListener('dblclick', hideInfo);