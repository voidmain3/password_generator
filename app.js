const characters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()<>?/-_{][}|';

const passText = document.querySelector('h3');
const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy-btn')

const passwordGenerate = () => {
    let password = "";
    for(let i=0; i<20; i++) {
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}

generateBtn.addEventListener('click', ()=> {
    console.log('clicked')
    passText.innerHTML =  passwordGenerate();
})

copyBtn.addEventListener('click', ()=> {
    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = passText.innerText;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };
      copyToClipboard();
})


