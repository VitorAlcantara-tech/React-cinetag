import styles from './Banner.module.css';

function Banner({imagem}) {
    return (
        //Imamgem do banner de fundo sem valor semântico por isso backgroundImage
        //Mais fácil de manipular a troca de imagem
        //Imagem é passada como prop para o componente
        <div className={styles.capa}
        style={{ backgroundImage: `url('/assets/banner-${imagem}.png')`}}
        ></div>
    )
}

export default Banner;