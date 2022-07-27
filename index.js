const person = ['I am ', 'You are ', 'He is ', 'She is ', 'It is ', 'We are ', 'They are ', 'I was ', 'You were ', 'He was ', 'She was ', 'It was ', 'We were ', 'They were ', 'Scrooge McDuck is ', 'Scrooge McDuck was ', 'Bugs Bunny is ', 'Bugs Bunny was ', 'Bart is ', 'Bart was ', 'Homer is ', 'Homer was ', 'Marge is ', 'Marge was ', 'Maggie is ', 'Maggie was ', 'Lisa is ', 'Lisa was ', 'Ned Flanders is ', 'Ned Flanders was '];
const action = ['running ', 'going ', 'swimming ', 'watching ', 'sleeping ', 'reading ', 'playing ', 'studying ', 'traveling ', 'eating ', 'driving ', 'wearing ', 'standing '];
const preposition = ['to ', 'at ', 'in ', 'on ', 'next to ', 'across ', 'behind ', 'toward ', 'about '];
const description = ['a little ', 'a big ', 'a small ', 'a green ', 'a red ', 'a blue ', 'an orange ', 'a strong ', 'a silly ', 'a goofy ', 'a pink ', 'a purple '];
const place = ['gym', 'library', 'house', 'car', 'bus', 'tractor', 'building', 'plane', 'park', 'forest', 'mountain', 'river', 'desert', 'bar', 'beer', 'drink', 'beverage', 'pants', 'shorts', 'skirt', 'dress'];

const showMsg = () => {
    let [ pers, act, prepos, descr, plc ] = ['', '', '', '', '', ''];
    const msgsDisplay = document.querySelector('#msgs-content');
    let i = (arr) => Math.floor(Math.random() * arr.length);
    [ pers, act, prepos, descr, plc ] = [ person[i(person)], action[i(action)], preposition[i(preposition)], description[i(description)], place[i(place)] ];
    
    return msgsDisplay.textContent = pers + act + prepos + descr + plc + '.';
};

const randomColorInteger = (max) => {
    return Math.floor(Math.random() * (max * 1))
};

const randomColor = () => {
    let r = randomColorInteger(255);
    let g = randomColorInteger(255);
    let b = randomColorInteger(255);
    
    return document.querySelector('.msgs-body').style.backgroundColor = `rgb(${r} ${g} ${b})`;
};

const masterFunction = () => {
    showMsg();
    randomColor();
};