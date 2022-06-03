import { useState } from "react";
import base64 from "base-64";
import utf8 from "utf8";
import { useCopyToClipboard } from "react-use-copy-to-clipboard";
import Head from "next/head";

const GenerateInvitationContent = () => {
    const [url, setUrl] = useState("");
    const [copyed, setCopyed] = useState(null);

    const generateLink = (event) => {
        const n = utf8.encode(event.target.value);
        const d = base64.encode(n);
        setCopyed(null);

        setUrl(process.env.BASE_URL + "invitation/" + d);
    };

    const copyText = useCopyToClipboard(
        url,
        () => setCopyed("✔ Berhasil Di Copy"),
        () => setCopyed("✖ Gagal Di Copy")
    );

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
                            onKeyUp={generateLink}
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
                            style={{
                                maxWidth: "100%",
                                display: "block",
                                border: "1px dashed #2196f3",
                                marginTop: "25px",
                                padding: "10px"
                            }}>
                            {url}
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
