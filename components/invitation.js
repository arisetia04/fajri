import IMAGE_1 from "../public/images/1.jpg";
import { NextSeo } from "next-seo";

const InvitationContent = (props) => {
    return (
        <>
            <NextSeo
                title={`Undangan Untuk ${
                    !props.nameData ? "Kamu" : props?.nameData
                } | Fajri &amp; Purni`}
                description='Dengan Memohon Rahmat dan Ridho Allah SWT, kami mengundang Bapak / Ibu / Sodara / Sodari dalam acara resepsi pernikahan kami'
                openGraph={{
                    title: `Undangan Untuk ${
                        !props.nameData ? "Kamu" : props?.nameData
                    } | Fajri &amp; Purni`,
                    description:
                        "Dengan Memohon Rahmat dan Ridho Allah SWT, kami mengundang Bapak / Ibu / Sodara / Sodari dalam acara resepsi pernikahan kami"
                }}
            />

            <div
                className='background-img'
                style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "105vh",
                    zIndex: 9999,
                    backgroundImage: IMAGE_1,
                    padding: "10px",
                    textAlign: "center",
                    color: "#fff"
                }}>
                <img src='/images/1.jpg' alt='' />

                <div
                    style={{
                        background: "rgba(0,0,0,0.5)",
                        width: "100%",
                        position: "absolute",
                        height: "100vh",
                        left: 0,
                        top: 0
                    }}></div>
                <div
                    className='d-flex justify-content-center align-items-center'
                    style={{ height: "100vh" }}>
                    <div style={{ zIndex: 999 }}>
                        <p>Kepada Yth</p>
                        <p
                            style={{
                                padding: "10px",
                                border: "1px solid #fff",
                                maxWidth: "300px",
                                fontSize: "20px",
                                borderRadius: "10px",
                                marginBottom: "10px"
                            }}>
                            {props?.nameData}
                        </p>
                        <small style={{ fontSize: "10px" }}>
                            Mohon Maaf jika terdapat kesalahan pada nama atau
                            gelar
                        </small>

                        <br />
                        <br />
                        <br />
                        <a
                            onClick={() => (location.href = "/")}
                            style={{
                                background: "#fff",
                                padding: "10px 20px",
                                borderRadius: "41px",
                                color: "#000",
                                cursor: "pointer"
                            }}>
                            Buka Undangan
                        </a>
                    </div>
                </div>
            </div>
            {!props?.nameError ? (
                ""
            ) : (
                <div
                    style={{
                        position: "fixed",
                        bottom: "40px",
                        left: "0",
                        width: "100%",
                        zIndex: 9999
                    }}>
                    <div
                        style={{
                            width: "300px",
                            background: "#bf261a",
                            padding: "10px",
                            color: "#fff",
                            border: "1px solid #930909",
                            borderRadius: "5px",
                            margin: "0 auto"
                        }}>
                        <span>
                            Maaf, Nama Anda tidak terdeteksi sistem kami, Harap
                            Masukkan link dengan lengkap !
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default InvitationContent;
