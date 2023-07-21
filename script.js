function switchImg(buttonName) {
    const imgElement = document.querySelector(`.${buttonName} img`);
    let imgToSwitch = '';
    if (buttonName === 'deafen') {
        if (imgElement.getAttribute('src') == 'images/undeafen.svg') {
            imgToSwitch = 'deafened.svg';
        } else {
            imgToSwitch = 'undeafen.svg';
        }
    } else {
        if (imgElement.getAttribute('src') == 'images/unmute.svg') {
            imgToSwitch = 'muted.svg';
        } else {
            imgToSwitch = 'unmute.svg';
        }
    }
    console.log(`images/${imgToSwitch}`);
    imgElement.src = `images/${imgToSwitch}`;
}

const dcButtonsRaw = document.getElementsByClassName('dc-button');
const dcButtons = Array.prototype.slice.call(dcButtonsRaw);
dcButtons.forEach(button => {
    button.addEventListener('click', () => {
        dcButtons.forEach(button => button.classList.remove('active-dc-button'));
        button.classList.add('active-dc-button');
    })
})

const tabs = Array.prototype.slice.call(document.getElementsByClassName('tab'));
const friendTabButtons = Array.prototype.slice.call(document.querySelector('.friend-tabs').getElementsByTagName('button'));
friendTabButtons.forEach(button => {
    button.addEventListener('click', () => selectTab(button));
})

function selectTab(button) {
    friendTabButtons.forEach(button => button.classList.remove('active-ft'))
    button.classList.add('active-ft');
    tabs.forEach(tab => {
        tab.classList.add('closed-tab');
        tab.classList.remove('active-tab');
    })
    const tab = document.querySelector(`.${button.innerHTML.toLowerCase()}-friends-tab`);
    tab.classList.add('active-tab');
    tab.classList.remove('closed-tab');
    console.log(tab.classList);
}

selectTab(document.querySelector('.online-friends-tab-button'));
