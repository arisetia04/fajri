import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Carattere&display=swap'
                    rel='stylesheet'
                />
                <link rel='stylesheet' href='/css/bootstrap.css' />
                <link rel='stylesheet' href='/css/base.css' />
                <link rel='stylesheet' href='/css/main.css' />
                <link rel='stylesheet' href='/css/venobox.css' />
                <link rel='stylesheet' href='/css/fonts.css' />
            </Head>

            <div className='wrapper'>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
