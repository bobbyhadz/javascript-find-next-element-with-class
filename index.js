console.log('bobbyhadz.com');

const box = document.getElementById('box');

let third;

let placeholder = box.nextElementSibling;

while (placeholder) {
  if (placeholder.classList.contains('third')) {
    third = placeholder;
    break;
  }

  placeholder = placeholder.nextElementSibling;
}

console.log(third); // 👉️ div.third
