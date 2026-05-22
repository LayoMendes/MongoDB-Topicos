db.clientes.insertMany([
{ nome: "Ana Souza", idade: 28, cidade: "Patos de Minas", interesses: ["notebook", "fone"] },
{ nome: "Bruno Lima", idade: 35, cidade: "Uberlandia", interesses: ["smartphone"] },
{ nome: "Carla Mendes", idade: 22, cidade: "Patos de Minas", interesses: ["perifericos"] },
{ nome: "Diego Alves", idade: 41, cidade: "Belo Horizonte", interesses: ["notebook", "monitor"] }
])

db.produtos.insertMany([
{ nome: "Notebook Dell Inspiron", categoria: "Notebook", preco: 10, estoque: 10, processador: "i5", ram_gb: 16 },
{ nome: "Smartphone Galaxy S23", categoria: "Smartphone", preco: 15, estoque: 15, tela_polegadas: 6.1 },
{ nome: "Cabo HDMI 2.1", categoria: "Acessorio", preco: 60, estoque: 80, comprimento_m: 2 },
{ nome: "Monitor LG 27\"", categoria: "Monitor", preco: 1000, estoque: 8, resolucao: "4K" }
])

db.pedidos.insertMany([
{ cliente: "Ana Souza", itens: [{ produto: "Notebook Dell Inspiron", qtd: 1, preco: 4500 }], status: "pago" },
{ cliente: "Bruno Lima", itens: [{ produto: "Smartphone Galaxy S23", qtd: 1, preco: 3200 }, { produto: "Cabo HDMI 2.1", qtd: 2, preco: 60 }], status: "pago" },
{ cliente: "Carla Mendes", itens: [{ produto: "Cabo HDMI 2.1", qtd: 1, preco: 60 }], status: "pendente" },
{ cliente: "Diego Alves", itens: [{ produto: "Monitor LG 27\"", qtd: 2, preco: 1000 }], status: "pago" }
])

db.clientes.updateOne(
{ nome: "Ana Souza" },
{ $push: { interesses: { $each: ["monitor", "teclado mecanico"] } } }
)