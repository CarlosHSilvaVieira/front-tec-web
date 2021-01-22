import React from "react";
import { useDispatch } from "react-redux";
import {  history} from "../../store/store"
import "./card.module.css";

const Card = ({ produto }) => {
  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(addCarrinho(produto));
    history.push("/carrinho");
  };

  if (!produto) {
    return null;
  }

  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "20px 0px 0px 0px", maxHeight: "24rem" }}
    >
      <img src={"/images/screen.jpg"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{produto.nome}</h5>
        <p className="card-text">{produto.descricao}</p>
        <p className="card-text">R${produto.valor_unitario}</p>
        <button type={"button"} className="btn btn-primary" onClick={(e) => handleBuy()}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
