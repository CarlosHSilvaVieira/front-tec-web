import * as url from "./url";

export const API_URL = "http://localhost:3005/api/";
export const AUTHOR_API = "autor";
export const PUBLISHING_API = "editora";
export const BOOK_API = "produto";
export const USER_API = "usuario";
export const EMPLOYEER_API = "usuario";


export const menus = [
  {
    title: "Area Logada",
    itens: [
      {
        nome: "Inicio",
        href: url.EMPLOYEER_BASE,
      },
    ],
  },
  {
    title: "Produtos",
    itens: [
      {
        nome: "Gerenciar Produtos",
        href: url.EMPLOYEER_BOOK,
      },
    ],
  },
  {
    title: "Vendas",
    itens: [
      {
        nome: "Gerenciar Vendas",
        href: url.EMPLOYEER_SALES,
      },
    ],
  },
  {
    title: "Autores",
    itens: [
      {
        nome: "Gerenciar Autores",
        href: url.EMPLOYEER_AUTHOR,
      },
    ],
  },
  {
    title: "Editoras",
    itens: [
      {
        nome: "Gerenciar Editoras",
        href: url.EMPLOYEER_PUSHING,
      },
    ],
  },
  {
    title: "Funcionários",
    itens: [
      {
        nome: "Gerenciar Funcionários",
        href: url.EMPLOYEER_MANEGER,
      },
    ],
  },
];

export const menus_usuarios = [
  {
    title: "Area Logada",
    itens: [
      {
        nome: "Inicio",
        href: url.USER_BASE,
      },
    ],
  },
  {
    title: "Minhas compras",
    itens: [
      {
        nome: "Gerenciar Produtos",
        href: url.USER_MY_BUYS,
      },
    ],
  },
];
