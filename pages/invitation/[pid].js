import InvitationContent from "../../components/invitation";
import base64 from "base-64";
import utf8 from "utf8";

export const getServerSideProps = async (context) => {
    var pid = context.query.pid;
    let setName = "";
    let isError = false;

    if (!pid) return;

    try {
        const d = base64.decode(pid);

        let n = utf8.decode(d);

        setName = n;
    } catch (ex) {
        isError = true;
        setName = "Your Name ?";
    }

    return {
        props: {
            name: setName,
            pidError: isError
        }
    };
};

export default function Invitation(props) {
    return (
        <InvitationContent nameData={props.name} nameError={props.pidError} />
    );
}
