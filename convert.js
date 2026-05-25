const fs = require('fs');
const path = require('path');

const screens = [
    { html: 'catalogo.html', jsx: 'src/app/page.tsx' },
    { html: 'produto.html', jsx: 'src/app/produtos/[id]/page.tsx' },
    { html: 'carrinho.html', jsx: 'src/app/carrinho/page.tsx' },
    { html: 'checkout.html', jsx: 'src/app/checkout/page.tsx' },
    { html: 'sucesso.html', jsx: 'src/app/sucesso/page.tsx' }
];

function htmlToJsx(html) {
    // Extrair o conteúdo dentro do <body>
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : html;

    // Remover tags de script
    bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // Replace class= with className=
    bodyContent = bodyContent.replace(/class=/g, 'className=');

    // Replace for= with htmlFor=
    bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');

    // Remove onclick and onchange attributes
    bodyContent = bodyContent.replace(/onclick="[^"]*"/g, '');
    bodyContent = bodyContent.replace(/onchange="[^"]*"/g, '');

    // Replace readonly with readOnly
    bodyContent = bodyContent.replace(/readonly(?:="")?/g, 'readOnly');
    
    // Replace checked="" with defaultChecked
    bodyContent = bodyContent.replace(/checked(?:="")?/g, 'defaultChecked');

    // Handle inline styles briefly
    bodyContent = bodyContent.replace(/style="([^"]+)"/g, (match, p1) => {
        if (p1.includes("background-image")) {
            const urlMatch = p1.match(/url\(['"]?(.*?)['"]?\)/);
            if (urlMatch) {
                return `style={{ backgroundImage: "url('${urlMatch[1]}')" }}`;
            }
        }
        if (p1.includes("font-variation-settings")) {
            return `style={{ fontVariationSettings: "'FILL' 1" }}`;
        }
        return `style={{}}`; // Fallback
    });

    // Handle self-closing tags
    bodyContent = bodyContent.replace(/<img([^>]*?)\/?>/g, '<img$1 />');
    bodyContent = bodyContent.replace(/<input([^>]*?)\/?>/g, '<input$1 />');
    bodyContent = bodyContent.replace(/<hr([^>]*?)\/?>/g, '<hr$1 />');
    bodyContent = bodyContent.replace(/<br([^>]*?)\/?>/g, '<br$1 />');
    
    // Fix any instances of <img ... /> />
    bodyContent = bodyContent.replace(/\/\s*>\s*\/\s*>/g, '/>');

    // Fix comments
    bodyContent = bodyContent.replace(/<!--(.*?)-->/gs, '{/* $1 */}');

    return `export default function Page() {\n  return (\n    <>\n      ${bodyContent}\n    </>\n  );\n}\n`;
}

screens.forEach(screen => {
    const htmlPath = path.join(__dirname, screen.html);
    const jsxPath = path.join(__dirname, screen.jsx);
    
    if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        const jsx = htmlToJsx(html);
        
        fs.mkdirSync(path.dirname(jsxPath), { recursive: true });
        fs.writeFileSync(jsxPath, jsx, 'utf8');
        console.log(`Converted ${screen.html} to ${screen.jsx}`);
    } else {
        console.log(`File not found: ${screen.html}`);
    }
});
