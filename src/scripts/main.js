'use strict';

const trList = [...document.querySelectorAll('tr')];

trList.forEach((tr) => {
  const copy = tr.cells[1].cloneNode(true);

  tr.cells[tr.children.length - 2].insertAdjacentElement('afterend', copy);
});
