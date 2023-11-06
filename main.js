
let string = "";
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

/*
    .button - 55 {
    align - self: center;
    background - color: #fff;
    background - image: none;
    background - position: 0 90 %;
    background - repeat: repeat no - repeat;
    background - size: 4px 3px;
    border - radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border - style: solid;
    border - width: 2px;
    box - shadow: rgba(0, 0, 0, .2) 15px 28px 25px - 18px;
    box - sizing: border - box;
    color: #41403e;
    cursor: pointer;
    display: inline - block;
    font - family: Neucha, sans - serif;
    font - size: 1rem;
    line - height: 23px;
    outline: none;
    padding: .75rem;
    text - decoration: none;
    transition: all 235ms ease -in -out;
    border - bottom - left - radius: 15px 255px;
    border - bottom - right - radius: 225px 15px;
    border - top - left - radius: 255px 15px;
    border - top - right - radius: 15px 225px;
    user - select: none;
    -webkit - user - select: none;
    touch - action: manipulation;
}

.button - 55:hover {
    box - shadow: rgba(0, 0, 0, .3) 2px 8px 8px - 5px;
    transform: translate3d(0, 2px, 0);
}

.button - 55:focus {
    box - shadow: rgba(0, 0, 0, .3) 2px 8px 4px - 6px;
}
*/