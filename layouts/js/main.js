
const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileMenuModal = document.querySelector('#mobile-menu-modal');
const body = document.querySelector('body');

const bookmark = document.querySelector('#bookmark');
const bookmarkContainer = document.querySelector('#bookmark-container');

const supportModal =document.querySelector('#support-modal');
const suport = document.querySelector('#support')
const supportExit = document.querySelector('#support-exit');

// Hamburger menu for mobile devices

hamburgerMenu.addEventListener('click', () => {
    let img = hamburgerMenu.src;
    if (img.indexOf('hamburger.svg') != -1) {
        hamburgerMenu.src = 'images/icon-close-menu.svg';
        mobileMenuModal.classList.remove('hidden');
        // body.style.overflowY = "hidden";
    }
    else {
        hamburgerMenu.src = 'images/icon-hamburger.svg';
        mobileMenuModal.classList.add('hidden');
        // body.style.overflowY = "unset";
    }
})

// Open and close support modal

support.addEventListener('click', () => {
    supportModal.classList.remove('hidden');
});

supportExit.addEventListener('click', () => {
    supportModal.classList.add('hidden');
});

// Change status of bookmark button

bookmarkContainer.addEventListener('click', () => {
    let img = bookmark.src;
    const text = bookmarkContainer.querySelector('span');
    if (img.indexOf('bookmark.svg') != -1) {
        bookmark.src = 'images/icon-check.svg';
        text.innerText = 'Bookmarked';
        text.classList.remove('text-gray-500');
        text.classList.add('text-primary-light');
    }
    else {
        bookmark.src = 'images/icon-bookmark.svg';
        text.innerText = 'Bookmark';
        text.classList.remove('text-primary-light');
        text.classList.add('text-gray-500');
    }
});

// Open modal for select pledges

const selectBtn = document.querySelectorAll('.btn--select');
const projectsModal = document.querySelector('#projects-modal');
const projectsExit = document.querySelector('#projects-exit');
const projectsContainer = document.querySelector('#projects-container');


selectBtn.forEach((e) => {
    e.addEventListener('click', () => {
        let height = e.scrollHeight;
        projectsContainer.style.top = (height * 7) + 'px';
        projectsModal.classList.remove('hidden');
    });
});


// Open and close radio button containers

const projectInput = document.querySelectorAll('.project-input');

projectInput[3].disabled = true; // Disable radio button for out of stock

extendProject();

projectsExit.addEventListener('click', () => {
    projectsModal.classList.add('hidden');
})

function extendProject() {
    for (let i = 0; i < projectInput.length; i++) {
        projectInput[i].addEventListener('change', () => {
            let projContainer = projectInput[i].parentElement.parentElement.parentElement;
            let projExtend = projContainer.querySelector('.extend-project');
            if (projectInput[i].checked === true) {
                projContainer.classList.add('border-primary-dark');
                projExtend.classList.remove('hidden');
            }
            closeAll(projectInput[i]);
        });
    }
}

function closeAll(except) {
    for (let i = 0; i < projectInput.length; i++) {
        let a = projectInput[i].parentElement.parentElement.parentElement;
        let b = a.querySelector('.extend-project');
        if (projectInput[i] !== except) {
            a.classList.remove('border-primary-dark');
            b.classList.add('hidden');
        }
    }
}

