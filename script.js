﻿const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const joinPopup = document.querySelector('.joinbtn');
const iconClose = document.querySelector('.icon-close');
const submit = document.querySelector('.submbutton input');

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

joinPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove ('active-popup');
});

submit.addEventListener('click', () => {
    wrapper.classList.add ('active');
});

