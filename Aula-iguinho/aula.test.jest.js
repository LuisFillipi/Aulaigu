const lista = ["Banana", "melão", "Melancia", "maça"];

/** Verifica se um array contém um item */
test("Identifica 'maça' no array", () => {
    expect(lista).toContain("maça"); // Verifica se o array contém 'maça'
    expect(lista).not.toContain("maracuja"); // Verifica se o array NÃO contém 'maracuja'
    expect(lista).toHaveLength(4); // Verifica se o array tem comprimento igual a 4
});

/** Verifica se um valor é nulo ou indefinido */
const valorNulo = null;
const valorIndefinido = undefined;

test("Verifica se o valor é nulo ou indefinido", () => {
    expect(valorNulo).toBeNull(); // Verifica se o valor é null
    expect(valorIndefinido).toBeUndefined(); // Verifica se o valor é undefined
});

/** Testando igualdade de objetos */
const objeto1 = { nome: "Ford", modelo: "Ka" };
const objeto2 = { nome: "Ford", modelo: "Ka" };

test("Verifica se dois objetos são iguais", () => {
    expect(objeto1).toEqual(objeto2); // Verifica se dois objetos têm o mesmo valor
});

/** Verifica se o valor é maior ou menor que um número específico */
const valor = 10;

test("Verifica se o valor é maior que 5 e menor que 15", () => {
    expect(valor).toBeGreaterThan(5); // Verifica se o valor é maior que 5
    expect(valor).toBeLessThan(15); // Verifica se o valor é menor que 15
});

/** Verifica se uma string contém um texto específico */
const frase = "O rápido carro marrom saltou sobre o cão preguiçoso.";

test("Verifica se a frase contém a palavra 'carro'", () => {
    expect(frase).toMatch(/carro/); // Verifica se a string contém a palavra 'carro'
    expect(frase).not.toMatch(/gato/); // Verifica se a string NÃO contém a palavra 'gato'
});

/** Verifica se uma função lança um erro com uma mensagem específica */
function retornaErroEspecifico() {
    throw new Error("Erro específico!");
}

test("Retorna um erro com uma mensagem específica", () => {
    expect(() => retornaErroEspecifico()).toThrow("Erro específico!"); // Verifica se a função lança um erro com a mensagem "Erro específico!"
});

/** Testando funções assíncronas que falham */
const fetchErro = async () => {
    throw new Error("Falha ao buscar dados");
};

test("Espera que a função assíncrona falhe com uma mensagem de erro", async () => {
    await expect(fetchErro()).rejects.toThrow("Falha ao buscar dados"); // Verifica se uma função assíncrona lança um erro específico
});

/** Testando números próximos */
const valorDecimal = 0.1 + 0.2;

test("Verifica se o valor está próximo de 0.3", () => {
    expect(valorDecimal).toBeCloseTo(0.3); // Verifica se o valor está próximo de 0.3 (útil para cálculos com ponto flutuante)
});

/** Verifica se todos os itens de um array atendem a uma condição */
const numeros = [2, 4, 6, 8];

test("Verifica se todos os números são pares", () => {
    numeros.forEach(numero => {
        expect(numero % 2).toBe(0); // Verifica se todos os números no array são pares
    });
});

/** Testando se uma função retorna uma média correta */
const calculaMedia = (numeros) => {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
};

test("Verifica se a média dos valores está correta", () => {
    const valores = [10, 20, 30, 40];
    expect(calculaMedia(valores)).toBeCloseTo(25); // Verifica se a média dos valores é 25
});

/** Verifica se o array não contém um item específico */
test("Verifica se o array não contém 'Laranja'", () => {
    expect(lista).not.toContain("Laranja"); // Verifica se o array NÃO contém 'Laranja'
});

/** Verifica se o array contém exatamente os mesmos itens, na mesma ordem */
const listaOrdenada = ["Banana", "melão", "Melancia", "maça"];

test("Verifica se o array contém exatamente os mesmos itens na mesma ordem", () => {
    expect(lista).toEqual(listaOrdenada); // Verifica se os arrays são exatamente iguais
});

/** Testando se uma função retorna um valor definido */
const retornaValor = () => 42;

test("Verifica se a função retorna um valor definido", () => {
    expect(retornaValor()).toBeDefined(); // Verifica se o retorno da função não é undefined
    expect(retornaValor()).toBe(42); // Verifica se o retorno da função é 42
});
function soma(a, b) {
    return a + b;
}

test("soma 1 + 4 e retorna 5", () => {
    expect(soma(1, 4)).toBe(5); // Verifica se a soma de 1 e 4 é igual a 5
    expect(soma(2, 3)).toBe(5); // Verifica se a soma de 2 e 3 é igual a 5
});

test("18 é maior de idade", () => {
    const numero = 18;
    expect(20).toBeGreaterThan(numero); // Verifica se 20 é maior que 18
    expect(18).toBeGreaterThanOrEqual(numero); // Verifica se 18 é maior ou igual a 18
    expect(soma(2.5, 2.5)).toEqual(5); // Verifica se a soma de 2.5 e 2.5 é igual a 5
});

function contemLetraI(palavra) {
    return palavra.includes("I") || palavra.includes("i");
}

test("procura letra I na palavra", () => {
    const palavra = "Inteligente";
    expect(contemLetraI(palavra)).toBe(true); // Verifica se a palavra contém a letra "I"
    expect(contemLetraI("banana")).toBe(false); // Verifica se a palavra NÃO contém a letra "I"
    expect(palavra).toMatch(/I/i); // Verifica se a palavra contém a letra "I", ignorando maiúsculas/minúsculas
});
/** Função que retorna o quadrado de um número */
function quadradoNum(numero) {
    return numero * numero;
}

test("retorna o quadrado do numero", () => {
    expect(quadradoNum(2)).toBe(4); // Verifica se o quadrado de 2 é 4
    expect(quadradoNum(2)).toBeGreaterThan(3); // Verifica se o quadrado de 2 é maior que 3
    expect(quadradoNum(2)).toBeLessThan(5); // Verifica se o quadrado de 2 é menor que 5
});

/** Função que soma dois números */
function soma(a, b) {
    return a + b;
}

test("soma 1 + 4 e retorna 5", () => {
    expect(soma(1, 4)).toBe(5); // Verifica se a soma de 1 e 4 é igual a 5
    expect(soma(2, 3)).toBe(5); // Verifica se a soma de 2 e 3 é igual a 5
});

test("18 é maior de idade", () => {
    const numero = 18;
    expect(20).toBeGreaterThan(numero); // Verifica se 20 é maior que 18
    expect(18).toBeGreaterThanOrEqual(numero); // Verifica se 18 é maior ou igual a 18
    expect(soma(2.5, 2.5)).toEqual(5); // Verifica se a soma de 2.5 e 2.5 é igual a 5
});

/** Função que verifica se uma palavra contém a letra 'I' */
function contemLetraI(palavra) {
    return palavra.includes("I") || palavra.includes("i");
}

test("procura letra I na palavra", () => {
    const palavra = "Inteligente";
    expect(contemLetraI(palavra)).toBe(true); // Verifica se a palavra contém a letra "I"
    expect(contemLetraI("banana")).toBe(false); // Verifica se a palavra NÃO contém a letra "I"
    expect(palavra).toMatch(/I/i); // Verifica se a palavra contém a letra "I", ignorando maiúsculas/minúsculas
});

/** Função que retorna a média de um array de números */
const calculaMedia = (numeros) => {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
};

test("Verifica se a média dos valores está correta", () => {
    const valores = [10, 20, 30, 40];
    expect(calculaMedia(valores)).toBeCloseTo(25); // Verifica se a média dos valores é 25
});

/** Verifica se o array contém itens específicos */
const lista = ["Banana", "melão", "Melancia", "maça"];

test("Identifica 'maça' no array", () => {
    expect(lista).toContain("maça"); // Verifica se o array contém 'maça'
    expect(lista).not.toContain("maracuja"); // Verifica se o array NÃO contém 'maracuja'
    expect(lista).toHaveLength(4); // Verifica se o array tem comprimento igual a 4
});

test("Verifica se o array não contém 'Laranja'", () => {
    expect(lista).not.toContain("Laranja"); // Verifica se o array NÃO contém 'Laranja'
});

test("Verifica se o array contém exatamente os mesmos itens na mesma ordem", () => {
    const listaOrdenada = ["Banana", "melão", "Melancia", "maça"];
    expect(lista).toEqual(listaOrdenada); // Verifica se os arrays são exatamente iguais
});