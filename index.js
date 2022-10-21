const buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
    button.addEventListener('click', (event) =>{
        const card = button.parentNode;
        const image = button.querySelector('img');
        const card_body = card.querySelector('.collapse')

        console.log(card_body.classList.contains('show'));
        if(!card_body.classList.contains('show')){
        
            image.classList.add('rotate');
            button.classList.add('bold');
        }
        else if(card_body.classList.contains('show')){
            image.classList.remove('rotate');
            button.classList.remove('bold');
        }
    });
});


