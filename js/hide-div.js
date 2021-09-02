export default function InitHideDiv() {
    const titules = document.querySelectorAll('[data-hide]')

    function HideDiv(e) {
        const data = e.target.dataset.hide;
        const title = document.querySelector(`[data-hide=${data} ]`);
        const hasAtivo = title.classList.contains('ativo');

        const div = document.querySelector(`.${data}`);
        div.classList.toggle('show');

        hasAtivo ? title.classList.remove('ativo') : title.classList.add('ativo')
    }

    titules.forEach(title => {
        title.addEventListener('click', HideDiv);
    })

}