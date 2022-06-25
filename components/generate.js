import { useEffect, useState } from "react";
import base64 from "base-64";
import utf8 from "utf8";
import { useCopyToClipboard } from "react-use-copy-to-clipboard";
import Head from "next/head";

const GenerateInvitationContent = () => {
    const [tmp, setTmp] = useState("");
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [cname, setCName] = useState("");
    const [phone, setPhone] = useState("");
    const [copyed, setCopyed] = useState(null);
    const [stateVersion, setStateVersion] = useState(0);

    const _template = () => {
        return `https://wa.me/${phone}?text=Bismillahirrahmanirrahim.%20%0AAssalamu alaikum%20Warahmatullahi%20Wabarakatuh.%0ATanpa%20mengurangi%20rasa%20hormat%2C%20perkenankan%20kami%20mengundang%20Bapak%2FIbu%2FSaudara%2Fi%20*${name}*%20untuk%20menghadiri%20acara%20pernikahan%20kami.%20%0A%0AUntuk%20informasi%20selengkapnya%20terkait%20undangan%20kami%2C%20silakan%20klik%20tautan%20berikut%20%3A%20%0A${url}%0A%0AMerupakan%20suatu%20kehormatan%20dan%20kebahagiaan%20bagi%20kami%20apabila%20Bapak%2FIbu%2FSaudara%2Fi%20berkenan%20untuk%20hadir%20dan%20memberikan%20doa%20restu.%20%0A%0ASemoga%20dengan%20undangan%20website%20ini%2C%20pesan%20dan%20tujuan%20kami%20dapat%20tersampaikan.%20%0A%0AJazakumullahu%20khairan.%20%0AWassalamu'alaikum%20Warahmatullahi%20Wabarakatuh.`;
    };

    const generateLink = (event) => {
        setName(event.target.value);
        const n = utf8.encode(event.target.value);
        const d = base64.encode(n);
        setCName(d);
        setUrl(process.env.BASE_URL + "invitation/" + d);
        setStateVersion(Number(stateVersion + 1));
    };

    const generateLinkPhone = (event) => {
        setPhone(event.target.value);
        setStateVersion(Number(stateVersion + 1));
    };

    const copyText = useCopyToClipboard(
        tmp,
        () => setCopyed("✔ Berhasil Di Copy"),
        () => setCopyed("✖ Gagal Di Copy")
    );

    useEffect(() => {
        setTmp(_template());
    }, [stateVersion]);

    return (
        <>
            <Head>
                <title>Invitation Generator | Fajri &amp; Purni</title>
                <meta
                    name='description'
                    content='Dengan Memohon Rahmat dan Ridho Allah SWT, kami
                                mengundang Bapak / Ibu / Sodara / Sodari dalam
                                acara resepsi pernikahan kami'
                />
            </Head>
            <div className='container pt-50'>
                <div className='row'>
                    <div className='col-md-12 mt-10'>
                        <input
                            type='text'
                            className='form-control'
                            name='name'
                            placeholder='Write Invitation Name Here'
                            onChange={generateLink}
                        />
                    </div>

                    <div className='col-md-12 mt-10'>
                        <input
                            type='text'
                            className='form-control'
                            name='phone'
                            placeholder='Phone number tujuan'
                            onChange={generateLinkPhone}
                        />
                    </div>

                    <div className='col-md-12 mt-50'>
                        <span
                            style={{
                                background: "#e91e63",
                                padding: "10px",
                                color: "#fff",
                                marginRight: "20px",
                                cursor: "pointer"
                            }}
                            ref={copyText}>
                            &#128458; COPY
                        </span>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: `<a target="_blank" href='${tmp}'>KIRIM</a>`
                            }}></span>
                        <span
                            style={{
                                maxWidth: "100%",
                                display: "block",
                                border: "1px dashed #2196f3",
                                marginTop: "25px",
                                padding: "10px",
                                overflowWrap: "break-word"
                            }}>
                            {tmp}
                        </span>
                        <br />
                        {!copyed ? (
                            ""
                        ) : (
                            <span
                                style={{
                                    background: "black",
                                    padding: "5px 10px",
                                    color: "#fff",
                                    borderRadius: "5px"
                                }}>
                                {copyed}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GenerateInvitationContent;
