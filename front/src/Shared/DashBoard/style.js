import styled from "styled-components";
import Vendas from "../../Imagens/vendas.png";
import DinheiroEntrada from "../../Imagens/dinheiro-entrada.png";
import DinheiroSaida from "../../Imagens/dinheiro-saida.png";
import Compras from "../../Imagens/compras.png";

export const Geral = styled.section`
    width: 90%;
    height: calc(90% - 100px);
    position: relative;
    margin: auto;
    top: 20px;

    -webkit-box-shadow: 0px 10px 11px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 11px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 11px -6px rgba(0,0,0,0.75);
`;

export const MenuSuperior = styled.section`
    width: 100%;
    height: 50px;
    margin: auto;
    top: 20px;
    display: flex;
`;

export const Titulo = styled.p`
    margin: auto;
    color: #6D6D6D;
    font-weight: 700;
`;

export const Conteudo = styled.section`
    width: 100%;
    height: calc(100vh - 250px);
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const CardVendas = styled.section`
    width: calc(50% - 50px);
    height: 200px;
    margin: auto;
    margin-bottom: 20px;
    background-color: aliceblue;
    -webkit-box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    position: relative;

    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    border-left: 10px solid #009D94;
    color: #009D94;
`;

export const CardEntrada = styled.section`
    width: calc(50% - 50px);
    height: 200px;
    margin: auto;
    margin-bottom: 20px;
    background-color: aliceblue;
    -webkit-box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    position: relative;

    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    border-left: 10px solid #00719D;
    color: #00719D;
`;

export const CardCompras = styled.section`
    width: calc(50% - 50px);
    height: 200px;
    margin: auto;
    margin-bottom: 20px;
    background-color: aliceblue;
    -webkit-box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    position: relative;

    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    border-left: 10px solid #9D0000;
    color: #9D0000;
`;

export const CardSaida = styled.section`
    width: calc(50% - 50px);
    height: 200px;
    margin: auto;
    margin-bottom: 20px;
    background-color: aliceblue;
    -webkit-box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 11px -6px rgba(0,0,0,0.75);
    position: relative;

    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    border-left: 10px solid #620000;
    color: #620000;
`;
export const TituloCard = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-left: 20px;
`;

export const Texto = styled.p`
    font-size: 30px;
    font-weight: 600;
    margin-top: 50px;
    margin-left: 20px;
    color: #4D4D4D;
`;

export const ImagemVendas = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    right: 10px;
    bottom: 10px;

    background-image: url(${Vendas});
    background-position: center;
    background-size: contain;
`;

export const ImagemEntrada = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    right: 10px;
    bottom: 10px;

    background-image: url(${DinheiroEntrada});
    background-position: center;
    background-size: contain;
`;

export const ImagemCompras = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    right: 10px;
    bottom: 10px;

    background-image: url(${Compras});
    background-position: center;
    background-size: contain;
`;


export const ImagemSaida = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    right: 10px;
    bottom: 10px;

    background-image: url(${DinheiroSaida});
    background-position: center;
    background-size: contain;
`;


