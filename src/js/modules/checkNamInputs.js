const checkNamInputs = (selector) => {
    const numImputs = document.querySelectorAll(selector);

    numImputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
            if (item.value.length <= 1) {
                item.value = item.value.replace(/0/, '');
            }
            
        });
    });
};


export default checkNamInputs;