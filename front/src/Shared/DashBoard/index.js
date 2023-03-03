import React from "react";
import {Geral, MenuSuperior, Conteudo, CardVendas, CardEntrada, CardCompras, CardSaida, Titulo, TituloCard, Texto, ImagemVendas, ImagemEntrada, ImagemCompras, ImagemSaida} from "./style";


function PesquisarProduto(){
    return(
        <Geral>
            <MenuSuperior>
                <Titulo>Produto mais vendido: Chave Tipo 2</Titulo>
                <Titulo>Produto mais comprado: Parafuso Tipo 1</Titulo>
            </MenuSuperior>
            <Conteudo>
                <CardVendas>
                    <TituloCard> Total de vendas nesse mês </TituloCard>
                    <Texto> 270 itens </Texto>
                    <ImagemVendas></ImagemVendas>
                </CardVendas>
                
                <CardCompras>
                    <TituloCard> Total de compras nesse mês </TituloCard>
                    <Texto> 150 itens </Texto>
                    <ImagemCompras></ImagemCompras>
                </CardCompras>

                <CardEntrada>
                    <TituloCard> Valor de entrada nesse mês </TituloCard>
                    <Texto> R$ 60.000 </Texto>
                    <ImagemEntrada></ImagemEntrada>
                </CardEntrada>
                
                <CardSaida>
                    <TituloCard> Valor de saida nesse mês </TituloCard>
                    <Texto> R$ 32.000 </Texto>
                    <ImagemSaida></ImagemSaida>
                </CardSaida>
            </Conteudo>
        </Geral>
    )
}

export default PesquisarProduto;