import styles from './Titulo.module.css';

//Usar props.children em componentes que são genéricos, que não tem filhos pré-determinados
function Titulo({children}) {
    return (
        <div className={styles.texto}>
            {children}
        </div>
    );
}

export default Titulo;

