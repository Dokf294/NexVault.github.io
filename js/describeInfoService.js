const slots = document.querySelectorAll(".slot-services");
let openedSlot = null;

function arrowAnim(arrow, deg) {
    if (arrow) arrow.style.transform = `rotate(${deg}deg)`;
}

function closeSlot(btn) {
    if (!btn) return;
    const text = btn.querySelector('.text');
    const button = btn.querySelector('.button');
    const arrow = btn.querySelector('.stat-deployed svg');

    text.style.maxHeight = '0';
    button.style.maxHeight = '0';
    text.style.opacity = '0';
    button.style.opacity = '0';
    arrowAnim(arrow, 0);

    btn.dataset.open = "false";

    let img = document.querySelector("." + btn.dataset.image);
    if (img) img.style.opacity = "0";
}

function openSlot(btn) {
    if (!btn) return;
    const text = btn.querySelector('.text');
    const button = btn.querySelector('.button');
    const arrow = btn.querySelector('.stat-deployed svg');

    if (!text.dataset.maxHeight)
        text.dataset.maxHeight = text.scrollHeight + 'px';

    if (!button.dataset.maxHeight)
        button.dataset.maxHeight = (button.scrollHeight + 80) + 'px';

    text.style.maxHeight = text.dataset.maxHeight;
    button.style.maxHeight = button.dataset.maxHeight;
    text.style.opacity = '1';
    button.style.opacity = '1';
    arrowAnim(arrow, 180);

    btn.dataset.open = "true";

    let img = document.querySelector("." + btn.dataset.image);
    if (img) img.style.opacity = "1";
}

slots.forEach((btn, index) => {
    btn.dataset.open = "false";

    btn.addEventListener('click', () => {
        const isOpen = btn.dataset.open === "true";

        
        if (isOpen) {
            return;
        }

        if (openedSlot && openedSlot !== btn) {
            closeSlot(openedSlot);
        }

        openSlot(btn);
        openedSlot = btn;
    });

    if (index === 0) {
        openSlot(btn);
        openedSlot = btn;
    }
});


