import './styles/footer.css';

function Footer(){
    return(
        <div className='footer'>
            <footer className ='content'>
                <div>
                    <span className='footerspan'>Eastern Shore Surf Shop 2024 © All Rights Reserved</span>
                </div>
                <div>
                    <span className='footerspan'>When the Surfs Up, The Vibes Are Up!</span>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-snapchat"></a>

            </footer>
        </div>
        

    );
}

export default Footer;