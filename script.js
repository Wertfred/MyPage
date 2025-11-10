const btn = document.getElementById('toggle-about');
const about = document.getElementById('about-block');
let expanded = false;
const moreText = "Опыт: более 5 лет в сфере front-end и back-end разработки. Владею HTML, CSS, JavaScript, React и Node.js. Реализовал десятки успешных проектов для малого и среднего бизнеса.";
const initialText = "Привет! Я занимаюсь созданием современных и адаптивных веб-сайтов. Всегда открыт для новых проектов и сотрудничества.";

btn.addEventListener('click', () => {
    if (!expanded) {
        about.innerHTML = initialText + "<br><br><strong>" + moreText + "</strong>";
        btn.textContent = 'Скрыть';
    } else {
        about.textContent = initialText;
        btn.textContent = 'Показать больше';
    }
    expanded = !expanded;
});
