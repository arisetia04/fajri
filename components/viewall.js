import { useState } from "react";
import base64 from "base-64";
import utf8 from "utf8";

const baseData = [
    { NAMA: "ARI" },
    { NAMA: "FAJRI" },
    { NAMA: "AGUNG" },
    { NAMA: "ROBI" },
    { NAMA: "IKI" },
    { NAMA: "DIMAS" }
];

const GenerateInvitationContent = () => {
    const generateLink = (event) => {
        const n = utf8.encode(event);
        const d = base64.encode(n);

        return process.env.BASE_URL + "invitation/" + d;
    };

    return (
        <>
            <div className='container pt-50'>
                <div className='row'>
                    <table>
                        {baseData.map((i, index) => {
                            return (
                                <tr key={index}>
                                    <td>{i.NAMA}</td>
                                    <td>{generateLink(i.NAMA)}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </>
    );
};

export default GenerateInvitationContent;
