
import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider div', '.glazing a', '.glazing_content', 'active');
    tabs('.decoration_item', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons > span', '.balcon_icons_img ', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    
let q = {
    one: 1,
    onqe: 1,
    onqee: 1
};
const newObj = {};

q = {...newObj};

console.log(q);




});