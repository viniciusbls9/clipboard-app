# Clipboard
Clipboard é uma aplicação para macOS desenvolvida com TauriJS, ReactJS, Typescript e Jest. Ela salva as informações copiadas para a área de transferência, permitindo resgatar dados previamente copiados.

## Tecnologias Utilizadas
- TauriJS: Framework para criar aplicações desktop.
- ReactJS: Biblioteca JavaScript para construir interfaces de usuário.
- Typescript: Superset do JavaScript que adiciona tipagem estática.
- Jest: Framework de testes em JavaScript.

## Estrutura do Projeto
O projeto está organizado da seguinte forma:

```sh
src/
├── components/    # Componentes React da aplicação
├── hooks/         # Hooks personalizados
├── utils/         # Funções utilitárias
├── src-tauri/     # Codigo Rust e de configurações do TauriJS
```

## Instalação
Para instalar e executar a aplicação localmente, siga os passos abaixo:

1. Clone o repositorio:
    ```sh
    git clone https://github.com/seu-usuario/clipboard.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd clipboard
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```
4. Execute a aplicação:
    ```sh
    npm run test
    ```


## Features futuras
- [ ] Fazer pesquisas de textos, caso a lista esteja muito grande
- [ ] Aparecer um "preview" de uma foto tirada print
- [ ] Salvar os textos copiados
- [ ] Sincronizar os dados com uma aplicação web
