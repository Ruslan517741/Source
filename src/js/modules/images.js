const images = () => {
    const mainClass = document.querySelector('.works'),
          image = mainClass.querySelectorAll('.preview'),
          links = mainClass.querySelectorAll('a'); 

/*     function linkDefault() {
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        });
    } 
    linkDefault(); */
    
    image.forEach((img, i) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            let elem = document.createElement('div'),
            newImg = document.createElement('img'),
            atribute = links[i].getAttribute('href');

            elem.classList.add('popup');
            mainClass.appendChild(elem);
            elem.appendChild(newImg);
            
            elem.style.display = "flex";
            elem.style.justifyContent = 'center';
            elem.style.alignItems = 'center';
            newImg.src = `${atribute}`;
            newImg.alt = 'img';
            newImg.style.maxWidth = '60%';
            newImg.style.maxHeight = '80%';
            const close = mainClass.querySelector('.popup'); 
            close.addEventListener('click', (e) => {
                if (e.target === close) {
                    elem.remove();
                    console.log(1);
                }
                console.log(close);
            });
            
        });
        
/*             if (e.target === close) {
                elem.remove();
            } */
        
    });

    

};

export default images;