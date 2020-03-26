const http = require('http');

const pdfMake = require('./pdfmake/pdfmake.js');
const vfsFonts = require('./pdfmake/vfs_fonts');

const hostname = '127.0.0.1';
const port = 3000;

pdfMake.vfs = vfsFonts.pdfMake.vfs;
var items = require('./data.json')
const server = http.createServer((req, res) => {

    const docDefinition = {
        content: [
            
            {
                text: 'Documento: 674902 | Emissão:  03/03/2020 13:45:12',
                margin:[0, 0, 0, 20],
                style: 'data',
                alignment: 'right'
            },
            {
                image: 'data:image/jpg;base64,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',
                width: 30,
                height: 40,
                absolutePosition: {x:50, y:50}
            },
            {
                text: 'Muda Gestão Agrícola',
                style: 'titlemuda',
                alignment: 'center'
            },
            {
                text: 'Grupo Nagano',
                style: 'header',
                margin:[0, 10],
                alignment: 'center'
            },
            {
                text: 'Relatório entrada e saída de estoque',
                style: 'name',
                margin:[0, 10],
                alignment: 'left'
            },
            {canvas: [{type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1}]},
            {
                style: 'info',
                text: 'Referente ao dia 01/03/2020 até 03/03/2020 ',
            },
            {
                style: 'info',
                fontSize: 10,
                text: 'Estoque: Almoxarifado | '+ items.length+' transações encontradas',
            },
            {
                style: 'info',
                text: 'Produto: Teste 01',
            },
            {canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 1}],margin:[0, 0, 0, 5]},
            {
                margin:[0, 5],
                text: 'Descritivo',
                style: 'name',
                alignment: 'left'
            },
            {
                style: 'tableExample',
                table: {
                    widths: [25,30,50,30,50,40,35,40,30,30],
                    body: [
                        [{text: 'TIPO', style: 'tableHeader'},
                            {text: 'CÓD. PRODUTO', style: 'tableHeader'},
                            {text: 'PRODUTO', style: 'tableHeader'},
                            {text: 'CÓD. MÁQUINA', style: 'tableHeader'},
                            {text: 'MÁQUINA', style: 'tableHeader'},
                            {text: 'DESTINO', style: 'tableHeader'},
                            {text: 'DATA', style: 'tableHeader'},
                            {text: 'NOTA', style: 'tableHeader'},
                            {text: 'PREÇO', style: 'tableHeader'},
                            {text: 'TOTAL', style: 'tableHeader'}],
                    ]
                },
                layout: 'lightHorizontalLines'
            },
            {canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 1}],margin:[0, 10, 0, 10]},
            {
                text: 'Muda Gestão Agrícola',
                style: 'titlemuda',
                alignment: 'center'
            },
            {
                text: '03/03/2020',
                style: 'info',
                alignment: 'center'
            },

        ],
        styles: {
            titlemuda: {
                fontSize: 11
            },
            header: {
                fontSize: 20,
                bold: true,
            },
            tableExample: {
                fontSize: 6.5,
                margin: [0, 10, 0, 10],
            },
            tableHeader: {
                bold: true,
                width: 10
            },
            data: {
                fontSize: 10,
            },
            info: {
                margin: [0, 5, 0, 0],
                fontSize: 10,
            },
            name: {
                margin: [0, 0, 0, 5],
            }
        }

    };
    
    docDefinition.content.forEach(el=>{
        if(el.style =='tableExample'){
            items.forEach(e=>{
                var item = [e.input ? 'Entrada': 'Saida', e.productid || 'n/c', 'Produto' || 'n/c', e.machine || 'n/c', 'Máquina' || 'n/c', e.destiny || 'n/c', e.date || 'n/c', e.url || 'n/c', e.price || 'n/c', e.amount || 'n/c'];
                el.table.body.push(item);
            })
        }
    })
    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.getBase64((data)=>{
        res.writeHead(200,
            {
                'Content-Type': 'application/pdf',
                'Content-Disposition':'attachment;filename="pedido.pdf"'
            });

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        res.end(download);
    });

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});