# 🎯 Jogo da Palavra Secreta

Este é um jogo simples feito com React, onde o jogador precisa adivinhar a palavra secreta com base em uma categoria fornecida. O objetivo é acertar todas as letras antes que as tentativas acabem.

## 🚀 Funcionalidades

- Seleção aleatória de palavras por categoria
- Tentativas limitadas para adivinhação
- Pontuação por acertos
- Tela de início, jogo e fim
- Reinício do jogo após término

## 🧠 Lógica do jogo

- Uma palavra é sorteada junto com sua categoria
- O jogador tenta adivinhar letra por letra
- Letras corretas são reveladas
- Letras erradas descontam tentativas
- Ao acertar todas as letras: nova palavra e +100 pontos
- Ao errar todas as tentativas: game over

## ⚙️ Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/jogo-palavra-secreta-react.git
   ```

2. Acesse o diretório:
   ```bash
   cd jogo-palavra-secreta-react
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npm start
   ```

5. Acesse em:
   ```
   http://localhost:3000
   ```

---

### 🎓 Créditos

Este projeto foi desenvolvido como parte dos estudos no curso ["React do Zero a Maestria (c/ Hooks, Context, Firebase)"](https://www.udemy.com/course/react-do-zero-a-maestria-hooks-context-api-firebase/) disponível na plataforma Udemy, ministrado por Matheus Battisti da Hora de Codar.