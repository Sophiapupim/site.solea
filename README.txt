PROJETO SITE SOLEA

Arquivos:
- index.html: estrutura do site
- style.css: cores, fontes, layout e responsividade
- script.js: clique nos produtos para abrir o WhatsApp e menu mobile
- assets/: logo e fotos usadas no site

COMO ABRIR NO VS CODE
1. Extraia o arquivo solea_vscode.zip.
2. Abra o VS Code.
3. Vá em File > Open Folder (Arquivo > Abrir Pasta).
4. Escolha a pasta solea_vscode.
5. Abra o arquivo index.html.
6. Para visualizar, clique com o botão direito em index.html e escolha
   "Open with Live Server" (se tiver a extensão Live Server instalada).
   Se não tiver, pode abrir o index.html diretamente no navegador.

WHATSAPP
O número está no começo de script.js:
const WHATSAPP_NUMBER = "5511987804994";
Para trocar, use o formato: código do país + DDD + número, só números.

PRODUTOS
Para adicionar uma peça, copie um bloco <a class="product"...> no index.html,
troque data-product, imagem, nome, descrição e texto alternativo.
Coloque a nova foto dentro da pasta assets.

CAPA DO SITE
A imagem horizontal capa-solea.jpg, enviada pela dona da marca, é usada no banner principal.
Para trocar a capa futuramente, substitua esse arquivo mantendo o mesmo nome.
