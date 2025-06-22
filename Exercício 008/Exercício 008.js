// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

vendas = [                                                                  // Declara o array vendas com a estrutura de 'cliente' e 'total'.
    {cliente: 101, total: 150.30},
    {cliente: 102, total: 200.90},
    {cliente: 103, total: 75.90},
    {cliente: 104, total: 300.30},
    {cliente: 101, total: 80.50},
    {cliente: 102, total: 120.60},
    {cliente: 103, total: 250.50},
    {cliente: 104, total: 50.90},
    {cliente: 101, total: 180.40},
    {cliente: 102, total: 90.80},
    {cliente: 103, total: 110.90},
    {cliente: 104, total: 220.70},
    {cliente: 101, total: 40.10},
    {cliente: 102, total: 160.20},
    {cliente: 103, total: 95.50},
    {cliente: 104, total: 130.90},
    {cliente: 101, total: 70.20},
    {cliente: 102, total: 210.10},
    {cliente: 103, total: 30.90},
    {cliente: 104, total: 170.50}
]


const totalCliente = vendas.reduce((acc, {cliente, total}) =>               // Declara e a arrow function 'totalCliente' que usa o método reduce usando um acumulador (acc) e desestrutura o objeto atual extraindo {clientes e total}.
    {acc[cliente] = (acc[cliente] || 0) + total;                            // Verifica se o cliente já está no acumulador, se não, usa 0 (zero) como valor ('||' que faz isso) e somo com o total do cliente que está sendo processado no objeto.
    return acc},                                                            // Retorna o acumulador atualizado para a próxima iteração.
    {})                                                                     // Inicia um objeto vazio para que o acumulador possa armazenar as chaves cliente e total.

console.log(totalCliente)                                                   // Exibe no terminal o resultado da constante 'totalCliente'