const liveBg = document.getElementById('live-bg');

const images = [
    "../assets/svg/companysDarkWhite/AAA.svg",
    "../assets/svg/companysDarkWhite/AV-new.svg",
    "../assets/svg/companysDarkWhite/champion.svg",
    "../assets/svg/companysDarkWhite/AV.svg"
];

const gap = 600;           // ⚠ сначала gap
const speed = 0.5;         // px за кадр

let cols = Math.ceil(window.innerWidth / gap) + 2;
let rows = 16;

const logos = [];
let index = 0;

// создаём сетку
for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        const img = document.createElement('img');
        img.src = images[index % images.length];
        img.className = 'imagelogo';

        const pos = { el: img, x: 220+x * gap, y: y * gap };
        img.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

        logos.push(pos);
        liveBg.appendChild(img);
        index++;
    }
}

// обработчик resize
// window.addEventListener('resize', () => {
//     logos.forEach(logo => liveBg.removeChild(logo.el));
//     logos.length = 0;

//     cols = Math.ceil(window.innerWidth / gap) + 2;
//     rows = 8;
//     index = 0;

//     for (let y = 0; y < rows; y++) {
//         for (let x = 0; x < cols; x++) {
//             const img = document.createElement('img');
//             img.src = images[index % images.length];
//             img.className = 'imagelogo';

//             const pos = { el: img, x: 220+x * gap, y: y * gap };
//             img.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

//             logos.push(pos);
//             liveBg.appendChild(img);
//             index++;
//         }
//     }
// });

// анимация
function animate() {
    for (const logo of logos) {
        logo.y -= speed;

        // wrap вниз
        if (logo.y < -gap) {
            logo.y += rows * gap;
        }

        logo.el.style.transform = `translate(${logo.x}px, ${logo.y}px)`;
    }

    requestAnimationFrame(animate);
}

animate();


