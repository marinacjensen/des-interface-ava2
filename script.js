const areaPreview = document.getElementById('preview');


function criarCabecalho() {
  const titulo = document.getElementById('inputTituloHeader').value;
  const img = document.getElementById('inputImgHeader').value;
  const corFundo = document.getElementById('corFundoHeader').value;
  const corTexto = document.getElementById('corTextoHeader').value;
  const tamanhoFonte = document.getElementById('tamanhoTextoHeader').value;
  const espacamento = document.getElementById('espacamentoHeader').value;
  const alinhamento = document.getElementById('alinhamentoHeader').value;
  const borda = document.getElementById('bordaHeader').value;

  const headerAntigo = areaPreview.querySelector('header');
  if (headerAntigo) headerAntigo.remove();

  const novoHeader = document.createElement('header');
  novoHeader.style.cssText = `
    background-color: ${corFundo};
    border: ${borda};
    display: flex;
    gap: ${espacamento}px;
    align-items: center;
    justify-content: ${alinhamento};
    padding: 10px;
  `;

  if (img) {
    const imagem = document.createElement('img');
    imagem.src = img;
    imagem.alt = 'Imagem Header';
    imagem.style.cssText = 'max-height: 100px; max-width: 150px;';
    novoHeader.appendChild(imagem);
  }

  if (titulo) {
    const tituloH1 = document.createElement('h1');
    tituloH1.innerText = titulo;
    tituloH1.style.cssText = `color: ${corTexto}; font-size: ${tamanhoFonte}px;`;
    novoHeader.appendChild(tituloH1);
  }

  areaPreview.prepend(novoHeader);
}


function criarMenu() {
  const menuAntigo = areaPreview.querySelector('nav');
  if (menuAntigo) menuAntigo.remove();

  const listaItens = document.getElementById('inputItensMenu').value.split(',').map(e => e.trim()).filter(Boolean);
  const imgMenu = document.getElementById('inputImgMenu').value;
  const posImg = document.getElementById('posicaoImgMenu').value;
  const corFundo = document.getElementById('corFundoMenu').value;
  const corTexto = document.getElementById('corTextoMenu').value;
  const borda = document.getElementById('bordaItensMenu').value;
  const tamanhoFonte = document.getElementById('tamanhoFonteMenu').value;
  const espacamento = document.getElementById('espacamentoItensMenu').value;

  const nav = document.createElement('nav');
  nav.style.cssText = `
    background-color: ${corFundo};
    display: flex;
    flex-direction: ${posImg === 'top' ? 'column' : 'row'};
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  `;

  if (imgMenu) {
    const imagem = document.createElement('img');
    imagem.src = imgMenu;
    imagem.alt = 'Imagem Menu';
    imagem.style.cssText = 'max-width: 100px; max-height: 100px;';
    nav.appendChild(imagem);
  }

  const ul = document.createElement('ul');
  ul.style.cssText = `display: flex; flex-direction: row; list-style: none; gap: ${espacamento}px; margin: 0; padding: 0;`;

  listaItens.forEach(txt => {
    const li = document.createElement('li');
    li.textContent = txt;
    li.style.cssText = `color: ${corTexto}; border: ${borda}; padding: 8px 12px; font-size: ${tamanhoFonte}px;`;
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  areaPreview.appendChild(nav);
}


function adicionarCardGaleria() {
  const imgUrl = document.getElementById('inputImgCard').value;
  const titulo = document.getElementById('inputTituloCard').value;
  const desc = document.getElementById('inputDescCard').value;
  const corFundo = document.getElementById('corFundoCard').value;
  const corTexto = document.getElementById('corTextoCard').value;
  const borda = document.getElementById('bordaCard').value;
  const largura = document.getElementById('larguraCard').value;
  const altura = document.getElementById('alturaCard').value;
  const espacamento = document.getElementById('gapCards').value;
  const direcao = document.getElementById('direcaoGaleria').value;

  let galeria = document.getElementById('galeria');
  if (!galeria) {
    galeria = document.createElement('section');
    galeria.id = 'galeria';
    galeria.style.cssText = 'display: flex; flex-wrap: wrap; margin-top: 20px;';
    areaPreview.appendChild(galeria);
  }

  galeria.style.flexDirection = direcao;
  galeria.style.gap = `${espacamento}px`;

  const card = document.createElement('div');
  card.className = 'card';
  card.style.cssText = `
    background-color: ${corFundo};
    color: ${corTexto};
    border: ${borda};
    width: ${largura}px;
    height: ${altura}px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  `;

  if (imgUrl) {
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = 'Imagem do Card';
    img.style.cssText = 'max-width: 100%; max-height: 100px;';
    card.appendChild(img);
  }

  if (titulo) {
    const h3 = document.createElement('h3');
    h3.innerText = titulo;
    card.appendChild(h3);
  }

  if (desc) {
    const p = document.createElement('p');
    p.innerText = desc;
    card.appendChild(p);
  }

  galeria.appendChild(card);
}

function resetarGaleria() {
  const galeria = document.getElementById('galeria');
  if (galeria) galeria.remove();
}

const listaCamposForm = [];

function addCampoForm() {
  const tipo = document.getElementById('tipoCampoForm').value;
  const label = document.getElementById('labelCampoForm').value;
  if (!label) return alert('Informe o label do campo!');
  listaCamposForm.push({ tipo, label });
  alert(`Campo "${label}" adicionado!`);
}

function gerarForm() {
  const titulo = document.getElementById('tituloFormulario').value;
  const corFundo = document.getElementById('corFundoForm').value;
  const borda = document.getElementById('bordaForm').value;
  const corTexto = document.getElementById('corTextoForm').value;
  const corCampo = document.getElementById('corCamposForm').value;
  const bordaCampo = document.getElementById('bordaCamposForm').value;

  const formAntigo = areaPreview.querySelector('form');
  if (formAntigo) formAntigo.remove();

  const form = document.createElement('form');
  form.style.cssText = `background-color: ${corFundo}; border: ${borda}; padding: 20px; margin-top: 20px;`;

  if (titulo) {
    const h3 = document.createElement('h3');
    h3.innerText = titulo;
    h3.style.color = corTexto;
    form.appendChild(h3);
  }

  listaCamposForm.forEach(({ tipo, label }, i) => {
    const campoWrapper = document.createElement('div');
    campoWrapper.style.marginBottom = '10px';

    const campoLabel = document.createElement('label');
    campoLabel.innerText = `${label}:`;
    campoLabel.style.cssText = `display: block; color: ${corTexto}`;

    let input;
    if (tipo === 'select') {
      input = document.createElement('select');
      input.innerHTML = '<option value="">Selecione</option><option>Opção 1</option><option>Opção 2</option>';
    } else if (tipo === 'radio') {
      input = document.createElement('div');
      input.innerHTML = `
        <label><input type="radio" name="radio${i}" value="1" /> Sim</label>
        <label><input type="radio" name="radio${i}" value="0" /> Não</label>
      `;
    } else {
      input = document.createElement('input');
      input.type = tipo;
    }

    if (tipo !== 'radio') {
      input.style.cssText = `background-color: ${corCampo}; border: ${bordaCampo}; color: ${corTexto}; padding: 4px; width: 100%;`;
    }

    campoWrapper.appendChild(campoLabel);
    campoWrapper.appendChild(input);
    form.appendChild(campoWrapper);
  });

  areaPreview.appendChild(form);
}

function limparForm() {
  const form = areaPreview.querySelector('form');
  if (form) form.remove();
  listaCamposForm.length = 0;
}

function criarRodape() {
  const texto = document.getElementById('inputTextoFooter').value;
  const tamanho = document.getElementById('tamanhoFonteFooter').value;
  const corTexto = document.getElementById('corTextoFooter').value;
  const corFundo = document.getElementById('corFundoFooter').value;
  const alinhamento = document.getElementById('alinhamentoFooter').value;

  const rodapeAntigo = areaPreview.querySelector('footer');
  if (rodapeAntigo) rodapeAntigo.remove();

  const rodape = document.createElement('footer');
  rodape.innerText = texto;
  rodape.style.cssText = `font-size: ${tamanho}px; color: ${corTexto}; background-color: ${corFundo}; text-align: ${alinhamento}; padding: 10px; margin-top: 20px;`;

  areaPreview.appendChild(rodape);
}

function montarHTMLFinal() {
  return `<!DOCTYPE html><html lang="pt-br"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Título da Página</title></head><body>${areaPreview.innerHTML}</body></html>`;
}

function mostrarHtmlGerado() {
  const codigoFinal = montarHTMLFinal();
  document.getElementById('codigoHTML').textContent = codigoFinal;
}

function salvarHtml() {
  localStorage.setItem('paginaHTML', montarHTMLFinal());
  alert('Página salva no LocalStorage!');
}

function carregarHtml() {
  const conteudo = localStorage.getItem('paginaHTML');
  if (!conteudo) return alert('Nada salvo.');
  const bodyMatch = conteudo.match(/<body>([\s\S]*)<\/body>/i);
  if (bodyMatch && bodyMatch[1]) {
    areaPreview.innerHTML = bodyMatch[1].trim();
    document.getElementById('codigoHTML').textContent = conteudo;
    alert('Código carregado com sucesso!');
  } else {
    alert('Erro ao carregar conteúdo.');
  }
}

function limparHtml() {
  localStorage.removeItem('paginaHTML');
  document.getElementById('codigoHTML').textContent = '';
  alert('LocalStorage limpo!');
}
