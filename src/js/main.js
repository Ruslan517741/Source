
import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2022-01-01';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider div', '.glazing a', '.glazing_content', 'active');
    tabs('.decoration_item', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons > span', '.balcon_icons_img ', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
    
    
/* let q = {
    one: 1,
    onqe: 1,
    onqee: 1
};
const newObj = {};

q = {...newObj};
 */




});