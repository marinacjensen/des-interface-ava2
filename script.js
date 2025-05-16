let page = document.getElementById('generatedPage');

function addHeader() {
  const text = document.getElementById('headerText').value;
  const color = document.getElementById('headerBgColor').value;
  const header = `<header style="background:${color}; padding:10px;"><h1>${text}</h1></header>`;
  page.innerHTML += header;
}

function addMenuItem() {
  const item = document.getElementById('menuItem').value;
  let menu = document.getElementById('menu');
  if (!menu) {
    menu = document.createElement('nav');
    menu.id = 'menu';
    menu.innerHTML = '<ul id="menuList"></ul>';
    page.appendChild(menu);
  }
  document.getElementById('menuList').innerHTML += `<li>${item}</li>`;
}

function addGalleryCard() {
  const desc = document.getElementById('galleryText').value;
  const fileInput = document.getElementById('galleryImage');
  const file = fileInput.files[0];

  if (!file) {
    alert("Selecione uma imagem para o card.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    let gallery = document.getElementById('gallery');
    if (!gallery) {
      gallery = document.createElement('section');
      gallery.id = 'gallery';
      page.appendChild(gallery);
    }
    gallery.innerHTML += `<div class="card"><img src="${e.target.result}" alt="Imagem do card"><p>${desc}</p></div>`;
  };
  reader.readAsDataURL(file);
}

function addFormField() {
  const label = document.getElementById('formLabel').value;
  const type = document.getElementById('formType').value;
  let form = document.getElementById('form');
  if (!form) {
    form = document.createElement('form');
    form.id = 'form';
    page.appendChild(form);
  }
  form.innerHTML += `<label>${label}: <input type="${type}" class="form-control mb-2"></label>`;
}

function addFooter() {
  const text = document.getElementById('footerText').value;
  const footer = `<footer style="background:#ddd; padding:10px;">${text}</footer>`;
  page.innerHTML += footer;
}

function generateHTML() {
  const html = `<!DOCTYPE html>
<html lang=\"pt-br\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>Título da Página</title>
  <style>${document.querySelector('style')?.textContent || ''}</style>
</head>
<body>
${page.innerHTML}
</body>
</html>`;
  document.getElementById('htmlCode').textContent = html;
}

function saveHTML() {
  generateHTML();
  const code = document.getElementById('htmlCode').textContent;
  localStorage.setItem('generatedHTML', code);
}

function loadHTML() {
  const code = localStorage.getItem('generatedHTML');
  if (code) {
    page.innerHTML = new DOMParser().parseFromString(code, 'text/html').body.innerHTML;
    document.getElementById('htmlCode').textContent = code;
  }
}

function clearStorage() {
  localStorage.removeItem('generatedHTML');
  alert('LocalStorage limpo!');
}
