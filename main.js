let index = 0,
head_index = 0;
const bg_images = document.querySelectorAll('.bg_images img');
const dots = document.querySelectorAll('dot');
const heading = document.querySelector('.heading');
const head = document.querySelectorAll('.heading h1');
const info = document.querySelector('.info');
const para = document.querySelectorAll('.info p');
const cards = document.querySelectorAll('.cards');
const card = document.querySelectorAll('card');
const next_btn = document.getElementById('next_btn');
const prev_btn = document.getElementById('prev_btn');

const bg_changer = () => {
    for(let bg_img = 0; bg_img<bg_images.length; bg_img++){
        bg_images[bg_img].style.opacity = 0;
        bg_images[bg_img].style.transition = '0.5s'
    }
    bg_images[index-1].style.opacity = 1;
    bg_images[index-1].style.transition = '0.5s'
}

const head_first_clone = head[0].cloneNode(true);
const para_first_clone = para[0].cloneNode(true);
const head_last_clone = head[head.length-1].cloneNode(true);
const para_last_clone = para[para.length-1].cloneNode(true);
head_first_clone.id = 'fclone';
para_first_clone.id = 'fclone';
head_last_clone.id = 'lclone';
para_last_clone.id = 'lclone';
heading.append(head_first_clone);
info.append(para_first_clone);
heading.prepend(head_last_clone);
info.prepend(para_last_clone);

let head_height = head[head_index].clientHeight;
let para_height = para[head_index].clientHeight;
console.log(para_height)

heading.addEventListener('transitionend',()=>{
    let head = document.querySelectorAll('.heading h1');
    if(head[head_index].id === head_first_clone.id){
        heading.style.transition='none';
        info.style.transition='none';
        head_index = 1;
        heading.style.transform = `translateY(-${head_index*head_height}px)`;
        info.style.transform = `translateY(-${head_index*para_height}px)`;
        console.log('success' + head[head_index].id);
    }
    
    if(head[head_index].id === head_last_clone.id){
        heading.style.transition='none';
        head_index = 1;
        // heading.cloneNode(true);
        heading.style.transform = `translateY(-${head_index*head_height}px)`;
        console.log('success2' + head[head_index].id);
    }
})

const head_changer_nxt = () => {
    let head = document.querySelectorAll('.heading h1');
    let para = document.querySelectorAll('.info p');
    if(head_index>=head.length-1) return;
    head_index++;
    heading.style.transform = `translateY(-${head_index*head_height}px)`;
    info.style.transform = `translateY(-${head_index*para_height}px)`;
    heading.style.transition = `1s`;
    info.style.transition = `1s`;
    // console.log(head.length)
    console.log(head_index)
}

next_btn.addEventListener('click',()=>{
    index++;
    if(index>bg_images.length){
        index = 1;
    }
    head_changer_nxt();
    bg_changer();
    // console.log(index)
})
