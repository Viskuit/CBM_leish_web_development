document.addEventListener('DOMContentLoaded', () => {
    fetch('./JSON/lang_selector.json')
        .then(response => response.json())
        .then(data => {
            window.descriptions = data;
            changeLanguage();
        });
});

function changeLanguage() {
    const languageSelector = document.getElementById('languageSelector');
    const description = document.getElementById('description');

    if (window.descriptions) {
        description.textContent = window.descriptions[languageSelector.value];
    }
}
