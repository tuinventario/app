function Footer() {
    return (
        <footer>
            <div class="container-fluid bg-dark footer mt-0 pt-0 fadeIn">
            <div class="container py-1">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="text-white mb-4">
                            <img class="img-fluid me-3 footerImg" src="../img/logo.png" alt=""/>Papeleria
                        </h1>
                        <span>Todo lo que necesites en un lugar</span>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Encuentranos</h5>
                        <p><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    </div>

                </div>
            </div>
            <div class="container-fluid copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="index.html">TuInventario</a>, All Right Reserved.
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer;