import React from "react";
import AtualizarEstoque from "../Shared/AtualizarEstoque";
import PesquisarProduto from "./PesquisarProduto";
import DashBoard from "./DashBoard";

export function FlipComponent(props) {
    const { statusTela } = props;

    if (statusTela === "1") {
        return <AtualizarEstoque />;
    }else if (statusTela === "2") {
        return <PesquisarProduto />;
    }else {
        return <DashBoard />;
    }
}