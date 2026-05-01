# 💳 Omini — Gestão Financeira Inteligente

O **Omini** é um ecossistema robusto para gerenciamento de finanças pessoais, focado na centralização de transações, controle de cartões de crédito e acompanhamento de metas de economia. O sistema oferece uma visão analítica e detalhada da saúde financeira, integrando um backend escalável a um frontend reativo e de alta performance.

## 🛠️ Stack Tecnológica

A escolha da stack foi pautada em **segurança de tipos**, **manutenibilidade** e **performance**:

* **Backend (`Node.js`, `TypeScript` & `Express`):** Implementado seguindo princípios de **Clean Architecture** e **SOLID**. A separação clara entre camadas (Controllers, Services e Repositories) garante uma lógica de negócio protegida e testável.
* **Frontend (`React`, `TypeScript` & `Vite`):** Utilização do Vite para um build ultra-rápido e TypeScript para garantir a integridade dos dados em toda a interface.
* **Gerenciamento de Estado e Lógica (`Custom Hooks`):** Centralização da lógica de negócio em hooks customizados (como `useTransactions` e `useMyCards`), facilitando a reutilização de código e mantendo os componentes de UI limpos.
* **Estilização (`TailwindCSS`):** Adoção de uma abordagem utility-first para garantir uma interface moderna, responsiva e com alta performance de renderização.
* **Qualidade e Padronização:** Uso de `ESLint` para manter o código em conformidade com as melhores práticas do mercado.

## 🏗️ Arquitetura e Diferenciais Técnicos

### Domínio e Robustez no Backend
O backend utiliza o conceito de **Domain-Driven Design (DDD)** simplificado. Entidades como `Transaction`, `CreditCard` e `Goal` possuem regras de negócio próprias, enquanto a camada de `Services` orquestra as operações complexas, garantindo que os controllers permaneçam leves e focados apenas em lidar com as requisições HTTP.

### UX Analítica e Processamento de Dados
No frontend, o sistema implementa o hook `useTransactionsStats`, que processa dinamicamente grandes volumes de transações para gerar estatísticas categorizadas (como alimentação, transporte e lazer). Isso permite que o usuário visualize seus gastos de forma intuitiva através de componentes de progresso e resumos financeiros.

### UI Modular e Design Consistente
A interface foi construída de forma modular. Componentes como o `CreditCard` e `ProgressBar` são independentes e configuráveis, permitindo que o sistema cresça sem comprometer a consistência visual ou gerar débitos técnicos na UI.

## 🚀 Como Executar o Projeto

### Pré-requisitos
* Node.js (LTS).
* NPM ou Yarn.

### Passo a Passo

1.  **Backend:**
    ```bash
    cd omini-backend
    npm install
    npm run dev
    ```

2.  **Frontend:**
    ```bash
    cd omini-frontend
    npm install
    npm run dev
    ```

---

> **Nota de Desenvolvimento:** Este projeto reflete minha expertise na construção de aplicações full-stack modernas, priorizando a organização do código através de padrões arquiteturais e a entrega de uma experiência de usuário rica em dados e interatividade.
