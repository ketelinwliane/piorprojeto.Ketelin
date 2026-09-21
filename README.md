## 🎨 Sobre o Projeto

O **Cadastro Impossível** é um projeto desenvolvido para o desafio prático **UI vs. UX & A Engenharia do Erro**, com o objetivo de explorar, na prática, os problemas causados por uma interface mal planejada e uma experiência de usuário confusa.

A proposta do projeto é transformar um simples cadastro em uma experiência propositalmente caótica. Para isso, foram implementados diversos comportamentos que normalmente devem ser evitados em aplicações reais, como botões com funções inesperadas, mensagens de erro contraditórias, validações confusas, elementos que mudam de comportamento, campos que podem apagar informações, excesso de alertas e problemas de hierarquia visual.

### 😈 O que foi implementado?

O usuário precisa passar por diferentes etapas para concluir o cadastro, encontrando obstáculos ao longo do caminho:

* 🔀 **Botões com comportamentos inesperados**, fazendo ações diferentes do texto apresentado.
* 📝 **Validações confusas**, com mensagens de erro pouco claras ou contraditórias.
* 🔐 **Sistema de senha propositalmente absurdo**, contendo regras incompatíveis entre si.
* 👁️ **Botão de visualização da senha**, que também aumenta o nível de frustração.
* 🧹 **Campos que podem apagar informações automaticamente**, obrigando o usuário a refazer parte do processo.
* 🏃 **Botão "Finalizar" que pode fugir da posição original**, dificultando sua utilização.
* 🔔 **Mensagens e alertas inesperados**, interrompendo o fluxo do usuário.
* 🔄 **Navegação inconsistente**, fazendo determinados botões voltar para etapas anteriores.
* 🎨 **Poluição visual**, utilizando cores, tamanhos, bordas e elementos propositalmente exagerados.
* 📊 **Contador de frustração**, que registra o nível de dificuldade encontrado durante a utilização.
* 🔢 **Contador de tentativas**, registrando quantas interações foram necessárias para concluir o cadastro.
* 🕵️ **Elemento secreto**, permitindo que usuários persistentes descubram uma maneira alternativa de avançar.
* 🏆 **Tela final**, apresentada somente após o usuário conseguir superar os obstáculos do sistema.

### 🎯 Objetivo do projeto

O objetivo não é simplesmente criar um site "feio" ou difícil de utilizar. A intenção é **compreender por que determinadas práticas de UI e UX são importantes**.

Cada comportamento problemático foi pensado para representar uma situação que poderia prejudicar a experiência de um usuário em um sistema real. Dessa forma, durante o desenvolvimento e o playtest, podemos observar como as pessoas reagem a uma interface que não segue padrões convencionais de usabilidade.

O projeto também permite comparar a experiência propositalmente ruim com uma possível versão ideal, identificando quais decisões de design deveriam ser modificadas para tornar o sistema mais **claro, previsível, acessível e eficiente**.

### 🧪 Playtest

Durante o playtest, outros participantes deverão tentar completar o cadastro sem receber previamente informações sobre as "pegadinhas" existentes.

Serão observados aspectos como:

* Quais elementos causaram mais confusão;
* Quais botões foram escolhidos pelos usuários;
* Quantas tentativas foram necessárias;
* Em quais etapas os usuários tiveram mais dificuldade;
* Quais mensagens foram interpretadas de maneira diferente da intenção original;
* Quais elementos provocaram maior frustração;
* Se os usuários conseguiram descobrir como chegar à tela final.

Os resultados serão utilizados para relacionar as dificuldades observadas com conceitos de **UI, UX, usabilidade, acessibilidade e heurísticas de Nielsen**.

### 💡 Aprendizado

Ao construir deliberadamente uma experiência ruim, torna-se mais fácil perceber a importância de uma experiência bem planejada.

O projeto demonstra, de maneira prática, que uma interface visualmente funcional não necessariamente proporciona uma boa experiência. Botões, mensagens, formulários, cores, feedbacks e regras precisam trabalhar de maneira consistente para que o usuário consiga compreender o sistema e realizar seus objetivos sem dificuldades desnecessárias.

> **"Se conseguimos criar conscientemente uma experiência ruim, também conseguimos identificar como transformá-la em uma experiência melhor."**
