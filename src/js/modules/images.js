import {calcScroll} from './modals';

const images = () => {
    const mainClass = document.querySelector('.works'),
          image = mainClass.querySelectorAll('.preview'),
          links = mainClass.querySelectorAll('a'),
          scroll = calcScroll(); 
    
    image.forEach((img, i) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            let elem = document.createElement('div'),
            newImg = document.createElement('img'),
            atribute = links[i].getAttribute('href');

            elem.classList.add('popup');
            elem.classList.add('faded');
            mainClass.appendChild(elem);
            elem.appendChild(newImg);
            
            elem.style.display = "flex";
            elem.style.justifyContent = 'center';
            elem.style.alignItems = 'center';
            newImg.src = `${atribute}`;
            newImg.alt = 'img';
            newImg.style.maxWidth = '60%';
            newImg.style.maxHeight = '80%';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            const close = mainClass.querySelector('.popup'); 
            close.addEventListener('click', (e) => {
                if (e.target === close) {
                    elem.remove();
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                }
            });
        });
    });
};
export default images;