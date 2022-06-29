# Exercicíos

**Exercício 1:** Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:
Entrada: **PEDRO**
```
PEDRO
PEDR
PED
PE
P
```

**Exercício 2:** Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
* Para embaralhar uma palavra faça: scrambled_word = **"".join(random.sample(word, len(word)))**
* O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: r**andom.choice(["word1", "word2", "word3"]) -> "word2".**

**Exercício 3:** Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

 **Exercício 4:** Dado o seguinte [arquivo](https://assets.app.betrybe.com/computer-science/python/entrada-saida/books-346aab4788ea58d4c3aa988632da100b.json) no formato JSON, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.
Saída:
```
categoria,porcentagem
Python,0.23201856148491878
Java,0.23201856148491878
PHP,0.23201856148491878
```
# Bônus

**Exercício 5:** Utilizando o arquivo [pokemons.json](https://assets.app.betrybe.com/computer-science/python/entrada-saida/pokemons-7c0899befff422fc465b37f9ce0f4661.json), vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária "Quem é esse pokemon?" até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.

Exemplo: O pokemon sorteado pelo programa é **butterfree**; a pessoa usuária chuta **charizard**; o programa deve exibir **b**. Em seguida, a pessoa chuta **blastoise**; o programa deve exibir **bu**; e assim por diante até a pessoa acertar.
** Você pode utilizar o método *choice* do modulo *random* para sortear aleatoriamente um pokemon. Ex: **random.choice(pokemon) -> {"name": "Pikachu" }.**