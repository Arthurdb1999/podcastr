// SPA - useEffect - utilizada em painel de administração, crawlers de SEO não esperam a chamada assíncrona pra buscar as informações
// SSR - getServerSideProps - acontece na camanda de servidor do Next, ao entrar na página, os dados já são carregados
// SSG - getStaticProps - SSR executa toda vez que a página é acessada, e isso não precisa acontecer em páginas de blogs por exemplo, pra isso utiliza-se SSG (HTML puro e estático)

export default function Home(props) {

    console.log(props.episodes)

    return (
        <h1>index</h1>
    )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json()

    return {
        props: {
            episodes: data
        },
        revalidate: 60 * 60 * 8
    }
}
