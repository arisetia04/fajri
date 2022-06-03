import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import IMAGE_1 from "../public/images/1.jpg";
import IMAGE_2 from "../public/images/2.png";
import IMAGE_4 from "../public/images/4.jpg";
import IMAGE_6 from "../public/images/6.jpg";
import IMAGE_7 from "../public/images/7.jpg";
import IMAGE_8 from "../public/images/8.jpg";
import IMAGE_9 from "../public/images/9.jpg";
import IMAGE_10 from "../public/images/10.jpg";
import IMAGE_11 from "../public/images/11.jpg";
import IMAGE_12 from "../public/images/12.png";
import IMAGE_13 from "../public/images/13.png";
import IMAGE_14 from "../public/images/14.png";
import IMAGE_15 from "../public/images/15.png";
import IMAGE_17 from "../public/images/17.jpg";

const MainContent = () => {
    return (
        <>
            <Head>
                <title>Undangan Pernikahan Fajri &amp; Purni</title>
                <meta
                    name='description'
                    content='Dengan Memohon Rahmat dan Ridho Allah SWT, kami
                                mengundang Bapak / Ibu / Sodara / Sodari dalam
                                acara resepsi pernikahan kami'
                />
                <meta name='theme-color' content='#e38793' />
            </Head>

            <section className='hero overlay'>
                <div
                    className='background-img'
                    style={{ backgroundImage: IMAGE_1 }}>
                    <img src='/images/1.jpg' alt='' />
                </div>

                <div className='inner-hero'>
                    <div className='container hero-content'>
                        <div className='row'>
                            <div className='col-sm-12 text-center'>
                                <h1
                                    className='large mb-20'
                                    style={{
                                        fontFamily: `'Carattere', cursive`,
                                        // @ts-ignore
                                        textTransform: "unset!important"
                                    }}>
                                    Fajri &amp; Purni
                                </h1>
                                <div className='block-date-hero'>
                                    <div className='circle-dashed bg-n'>
                                        <div className='round-circle'>
                                            <svg
                                                viewBox='0 0 103 103'
                                                version='1.1'
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='dashed-border'>
                                                <circle
                                                    cx='50%'
                                                    cy='50%'
                                                    r='50'
                                                />
                                            </svg>
                                            <i className='icon-heart'></i>
                                        </div>
                                    </div>
                                    <ul>
                                        <li style={{ cursor: "pointer" }}>
                                            <a
                                                href='https://calendar.google.com/event?action=TEMPLATE&tmeid=M3AycWJtZ3Rhcm1zYXI3Y2RoY3ZmYzE3aTggYXJpNzUwMTQyQG0&tmsrc=ari750142%40gmail.com'
                                                target='_blank'
                                                rel='noreferrer'>
                                                📅 Save the date
                                            </a>
                                        </li>
                                        <li>02 July 2022</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='story' className='story pt-120 pb-120'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center mb-100'>
                            <i
                                style={{
                                    fontSize: "18px",
                                    fontFamily: `'Lato-Medium', "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif`
                                }}>
                                Bismillahirrohmannirrohim
                            </i>
                            <p
                                style={{
                                    fontSize: "18px",
                                    marginBottom: "10px",
                                    marginTop: "10px",
                                    fontWeight: 800,
                                    fontFamily: `'Lato-Medium', "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif`
                                }}>
                                Assalammualaikum Wr Wb
                            </p>
                            <p
                                style={{
                                    fontSize: "16px",
                                    marginBottom: "40px",
                                    fontFamily: `'Lato-Medium', "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif`
                                }}>
                                Dengan Memohon Rahmat dan Ridho Allah SWT, kami
                                mengundang Bapak / Ibu / Sodara / Sodari dalam
                                acara resepsi pernikahan kami
                            </p>
                            <h2
                                className='typo'
                                style={{
                                    color: "#000",
                                    fontFamily: `'Carattere', cursive`
                                }}>
                                M. Suri Hafidz Al Fajri
                            </h2>

                            <h2
                                className='typo'
                                style={{
                                    color: "#000",
                                    fontFamily: `'Carattere', cursive`,
                                    margin: "25px 0"
                                }}>
                                &amp;
                            </h2>
                            <h2
                                className='typo'
                                style={{
                                    color: "#000",
                                    fontFamily: `'Carattere', cursive`
                                }}>
                                Purniasih
                            </h2>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center'>
                            <div className='img-round'>
                                <div className='img'>
                                    <Image
                                        alt=''
                                        src={IMAGE_2}
                                        width={"200px"}
                                        height={"200px"}
                                    />
                                </div>
                                <svg
                                    viewBox='0 0 103 103'
                                    version='1.1'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='dashed-border'>
                                    <circle cx='50%' cy='50%' r='50' />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='date pt-150 pb-150 overlay'>
                <div
                    className='background-img'
                    style={{ backgroundImage: IMAGE_4 }}>
                    <img src='/images/4.jpg' alt='' />
                </div>

                <div className='container'>
                    <div className='row'>
                        <h2 className='indent'>Wedding date</h2>
                        <div className='col-sm-12 text-center'>
                            <div className='block-content front-p'>
                                <h2
                                    className='typo'
                                    style={{
                                        fontFamily: `'Carattere', cursive`
                                    }}>
                                    Save the date
                                </h2>
                                <p className='lead mt-20 text-white'>
                                    Sabtu, 02 Juli 2022 - Cigudeg - Bogor
                                </p>
                                <span className='countdown text-white'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='wedding pt-120 pb-120'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center mb-100'>
                            <h1 className='title'>
                                yang akan dilaksanakan pada
                            </h1>
                            <p>Akad Nikah - Resepsi Nikah</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-5 col-sm-offset-1 text-center'>
                            <div className='block-event'>
                                <div className='circle-dashed relative bg green '>
                                    <div className='round-circle  green before'>
                                        <svg
                                            viewBox='0 0 103 103'
                                            version='1.1'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='dashed-border'>
                                            <circle cx='50%' cy='50%' r='50' />
                                        </svg>
                                        <i className='icon-smile'></i>
                                    </div>
                                </div>
                                <p className='mt-30 mb-30'>
                                    Akad Nikah<span>28 Mei 2022</span>
                                </p>
                                <p>
                                    Alamat
                                    <span>
                                        Kp. Nunggaherang, Desa Tegallega, Kec.
                                        Cigudeg Kabupaten Bogor
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-5 text-center'>
                            <div className='block-event swap'>
                                <div className='circle-dashed relative bg'>
                                    <div className='round-circle  before'>
                                        <svg
                                            viewBox='0 0 103 103'
                                            version='1.1'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='dashed-border'>
                                            <circle cx='50%' cy='50%' r='50' />
                                        </svg>
                                        <i className='icon-glass'></i>
                                    </div>
                                </div>
                                <p className='mt-30 mb-30'>
                                    Resepsi Nikah<span>02 Juli 2022</span>
                                </p>
                                <p>
                                    Alamat
                                    <span>
                                        Kp. Nunggaherang, Desa Tegallega, Kec.
                                        Cigudeg Kabupaten Bogor
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='album bg-grey pt-120 pb-120'>
                <div className='container'>
                    <div className='row mb-30'>
                        <h2 className='indent'>Photo album</h2>
                        <div className='col-md-4 col-sm-4 col-xs-12 '>
                            <div className='block-img'>
                                <a href='/images/6.jpg' className='venobox'>
                                    <div
                                        className='background-img'
                                        style={{
                                            backgroundImage: IMAGE_6
                                        }}>
                                        <img src='/images/6.jpg' alt='' />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-xs-12 '>
                            <div className='block-img'>
                                <a href='/images/7.jpg' className='venobox'>
                                    <div
                                        className='background-img'
                                        style={{
                                            backgroundImage: IMAGE_7
                                        }}>
                                        <img src='/images/7.jpg' alt='' />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-xs-12 '>
                            <div className='block-img'>
                                <a href='/images/8.jpg' className='venobox'>
                                    <div
                                        className='background-img'
                                        style={{
                                            backgroundImage: IMAGE_8
                                        }}>
                                        <img src='/images/8.jpg' alt='' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-4 col-sm-4 col-xs-12 '>
                            <div className='block-img'>
                                <a href='/images/9.jpg' className='venobox'>
                                    <div
                                        className='background-img'
                                        style={{
                                            backgroundImage: IMAGE_9
                                        }}>
                                        <img src='/images/9.jpg' alt='' />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-xs-12 '>
                            <div className='block-img'>
                                <a href='/images/10.jpg' className='venobox'>
                                    <div
                                        className='background-img'
                                        style={{
                                            backgroundImage: IMAGE_10
                                        }}>
                                        <img src='/images/10.jpg' alt='' />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-xs-12 '>
                            <div className='block-img'>
                                <a href='/images/11.jpg' className='venobox'>
                                    <div
                                        className='background-img'
                                        style={{
                                            backgroundImage: IMAGE_11
                                        }}>
                                        <img src='/images/11.jpg' alt='' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='friend bg-grey pt-120 pb-120'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center mb-100'>
                            <h1 className='title'>Turut Mengundang</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-4  text-center'>
                            <div className='img-round '>
                                <div className='img'>
                                    <Image
                                        alt=''
                                        src={IMAGE_12}
                                        width={"200px"}
                                        height={"200px"}
                                    />
                                </div>
                                <svg
                                    viewBox='0 0 103 103'
                                    version='1.1'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='dashed-border'>
                                    <circle cx='50%' cy='50%' r='50' />
                                </svg>
                            </div>
                        </div>
                        <div className='col-sm-4  text-center'>
                            <div className='img-round'>
                                <div className='img'>
                                    <Image
                                        alt=''
                                        src={IMAGE_13}
                                        width={"200px"}
                                        height={"200px"}
                                    />
                                </div>
                                <svg
                                    viewBox='0 0 103 103'
                                    version='1.1'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='dashed-border'>
                                    <circle cx='50%' cy='50%' r='50' />
                                </svg>
                            </div>
                        </div>
                        <div className='col-sm-4  text-center'>
                            <div className='img-round'>
                                <div className='img'>
                                    <Image
                                        alt=''
                                        src={IMAGE_14}
                                        width={"200px"}
                                        height={"200px"}
                                    />
                                </div>
                                <svg
                                    viewBox='0 0 103 103'
                                    version='1.1'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='dashed-border'>
                                    <circle cx='50%' cy='50%' r='50' />
                                </svg>
                            </div>
                        </div>
                        <div className='col-sm-4  text-center'>
                            <h2 className='heavy mt-20'>SDIT Darojatul Ulum</h2>
                        </div>
                        <div className='col-sm-4  text-center'>
                            <h2 className='heavy mt-20'>
                                Dinas Binamarga Pov. DKI Jakarta
                            </h2>
                        </div>
                        <div className='col-sm-4 text-center'>
                            <h2 className='heavy mt-20'>
                                Karang taruna Kel. Limo
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='accom pt-120 pb-120'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center mb-100'>
                            <h1 className='title'>Map</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-9 text-center mb-100'>
                            <div className='google-map-code'>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5701229172773!2d106.5942650147703!3d-6.4491955953342135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xde5a97e992c7a168!2zNsKwMjYnNTcuMSJTIDEwNsKwMzUnNDcuMiJF!5e0!3m2!1sen!2sid!4v1654273401470!5m2!1sen!2sid'
                                    width='100%'
                                    height='450'
                                    style={{ border: 0 }}
                                    aria-hidden='false'></iframe>
                            </div>
                        </div>
                        <div className='col-sm-3 text-center mb-100'>
                            <Image
                                src={IMAGE_15}
                                width={"300px"}
                                height={"300px"}
                            />
                            <p>
                                LINK:{" "}
                                <Link href='https://bit.ly/3Q01CYD'>
                                    <a>https://bit.ly/3Q01CYD</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='just-married pt-200 pb-200 overlay'>
                <div
                    className='background-img'
                    style={{ backgroundImage: IMAGE_17 }}>
                    <img alt='' src='/images/17.jpg' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <div className='block-content front-p'>
                                <h2
                                    className='typo'
                                    style={{
                                        fontFamily: `'Carattere', cursive`
                                    }}>
                                    Just married
                                </h2>
                                <h2 className='heavy uppercase mt-10 light'>
                                    M. Suri Hafidz Al Fajri &amp; Purniasih
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainContent;
