
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U DEAR NAJWA ANANTA -REI').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 260); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};