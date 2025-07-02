import { createContext, useState, useContext } from "react";

export const FavoritosContext = createContext();            //Cria o contexto
FavoritosContext.displayName = "Favoritos";                 // Da um nome para o contexto para debug

export default function FavoritosProvider ({ children }) {  // Cria o a funcão provider
    const [favorito, setFavorito] = useState([]);           // Cria o estado favorito, que é um array vazio inicialmente

    return (
        <FavoritosContext.Provider                          //Retorna o provider com o valor do estado favorito e a função setFavorito
             value={{ favorito, setFavorito }}> 
            {children}                            
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const {favorito, setFavorito} = useContext(FavoritosContext); // Usa o hook useContext para acessar o contexto FavoritosContext
    
    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id); // Verifica se o vídeo já está nos favoritos
        
        let novaLista = [...favorito]; // Cria uma nova lista de favoritos

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista); // Se não estiver, adiciona o novo favorito
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id); // Se já estiver, remove o favorito da lista
        return setFavorito(novaLista);
    }
  return {
    favorito,
    adicionarFavorito
  }  
}