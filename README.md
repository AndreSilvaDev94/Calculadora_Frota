# 🚗 Calculadora de Frota

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Uma aplicação web moderna e responsiva para calcular o custo de combustível de uma frota de veículos de forma simples e rápida.

## 📝 Descrição

Este projeto foi idealizado com base em desafios reais de gestão de frotas, visando otimizar o cálculo rápido de custos operacionais para pequenos e médios gestores.

A interface é limpa, moderna e totalmente responsiva, adaptando-se a qualquer tamanho de tela, seja em desktops, tablets ou smartphones.

## ✨ Funcionalidades

-   Cálculo de custo em tempo real.
-   Interface de usuário minimalista e focada na usabilidade.
-   Campos de entrada claros e com ícones representativos.
-   Design totalmente responsivo.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna de desenvolvimento web:

-   **[Next.js](https://nextjs.org/):** Framework React para produção, com renderização no servidor e geração de sites estáticos.
-   **[React](https://react.dev/):** Biblioteca para construir interfaces de usuário.
-   **[TypeScript](https://www.typescriptlang.org/):** Superset de JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenibilidade.
-   **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS utility-first para criar designs customizados rapidamente.
-   **[ShadCN/UI](https://ui.shadcn.com/):** Coleção de componentes de UI reutilizáveis, construídos com Radix UI e Tailwind CSS.

## 🚀 Como Executar o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/AndreSilvaDev94/Calculadora_Frota.git
    cd Calculadora_Frota
    ```

2.  **Instale as dependências:**
    Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, execute o comando abaixo no terminal:
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Abra no navegador:**
   Abra http://localhost:3000 (ou a porta indicada no seu terminal após rodar o comando)

## 📂 Estrutura do Projeto

A estrutura de arquivos principal do projeto é a seguinte:

```
/
├── src/
│   ├── app/
│   │   ├── globals.css     # Estilos globais
│   │   ├── layout.tsx      # Layout principal da aplicação
│   │   └── page.tsx        # A página principal da calculadora
│   │
│   ├── components/
│   │   └── ui/             # Componentes da biblioteca ShadCN/UI
│   │
│   └── lib/
│       └── utils.ts        # Funções utilitárias
│
├── next.config.ts          # Configurações do Next.js
├── tailwind.config.ts      # Configurações do Tailwind CSS
└── package.json            # Dependências e scripts do projeto
```
