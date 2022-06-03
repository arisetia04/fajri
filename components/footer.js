import Script from "next/script";

const Footer = () => {
    return (
        <>
            <footer className='footer pt-70 pb-70'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <p className='uppercase heavy normal'>
                                &copy; 2021 all right reserved gui.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <script src='/js/jquery-1.12.4.min.js'></script>
            <script src='/js/jquery.countdown.min.js'></script>
            <script src='/js/venobox.min.js'></script>
            <script src='/js/smooth-scroll.js'></script>
            <script src='/js/script.js'></script>
        </>
    );
};

export default Footer;
