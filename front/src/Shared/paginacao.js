import React from "react";

export function Paginacao({ total, porPagina, paginaAtual, onPageChange }) {
    const totalPages = Math.ceil(total / porPagina);
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => onPageChange(number)}
                disabled={paginaAtual === number}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }