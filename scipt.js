let btnCheck = document.querySelector('.btn-check'),
    headerList = document.querySelector('.header-list'),
    absoluteBtn = document.querySelector('.absolute-buttons'),
    leftSidebar = document.querySelector('.left-sidebar'),
    rightSidebar = document.querySelector('.right-sidebar');
    
btnCheck.addEventListener('click', (event)=>{
    event.preventDefault();
    headerList.classList.toggle('active');
})
window.addEventListener('click', (event)=>{
    if(!event.target.closest('.header-list') && !event.target.closest('.btn-check')){
        headerList.classList.remove('active');
    }
    if(!event.target.closest('.left-sidebar') && !event.target.closest('.absolute-buttons')) leftSidebar.classList.remove('active');
    if(!event.target.closest('.right-sidebar') && !event.target.closest('.absolute-buttons')) rightSidebar.classList.remove('active');
})
absoluteBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    if(event.target.closest('.profile-button')) leftSidebar.classList.toggle('active');
    if(event.target.closest('.news-buton')) rightSidebar.classList.toggle('active');
})