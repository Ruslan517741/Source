const tabs = (blockNamesSelector, buttonSelector, contentSelector, activeClass, display = 'block') => {
    const blockNames = document.querySelectorAll(blockNamesSelector),
            buttons = document.querySelectorAll(buttonSelector),
            contents = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        buttons.forEach(btn => {
            btn.classList.remove(activeClass);
        });
        contents.forEach(content => {
            content.style.display = 'none';
        });
    }

    function showTabContent(i = 1) {
        buttons[i].classList.add(activeClass);
        contents[i].style.display = display;
    }

    hideTabContent();
    showTabContent();

    blockNames.forEach((block, i) => {
        block.addEventListener('click', () => {
            hideTabContent();
            showTabContent(i);
        });
    });
};

export default tabs;

//Другой способ c делегированием событий
/* const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs; */
