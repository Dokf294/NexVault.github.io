const limitNumeric = 9;

function SetCount(container) {
    const input = container.querySelector('#input input');
    const plus = container.querySelector('#plus');
    const minus = container.querySelector('#minus');

    plus.addEventListener('click', () => {
        let val = parseInt(input.value) || 0;
        input.value = Math.min(limitNumeric, val + 1);
    });
    minus.addEventListener('click', () => {
        let val = parseInt(input.value) || 0;
        input.value = Math.max(0, val - 1);
    });
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '');

        if (Number(input.value) > limitNumeric) {
            input.value = limitNumeric;
        };
    });

}
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.date-package .buttons');
    buttons.forEach(bt => SetCount(bt));
});


