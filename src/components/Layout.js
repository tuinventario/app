function Layout() {
 return (
    <div>
        <div class="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
            <div class="row gx-0 align-items-center">
                <div class="col-lg-7 px-5 text-start">
                    <div class="h-100 d-inline-flex align-items-center me-4">
                        <small class="fa fa-phone-alt me-2"></small>
                        <small>+123456</small>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center me-4">
                        <small class="far fa-envelope-open me-2"></small>
                        <small>info@example.com</small>
                    </div>
                </div>
                <div class="col-lg-5 px-5 text-end">
                    <ol class="breadcrumb justify-content-end mb-0">
                        <li class="breadcrumb-item"><a class="text-white-50 small" href="/">Inicio</a></li>
    
                    </ol>
                </div>
            </div>
        </div>
    
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
            <a href="index.html" class="navbar-brand d-flex align-items-center">
                <h1 class="m-0"><img class="img-fluid me-3" src="../img/logo.png" alt=""/>Papeleria de la esquina</h1>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto bg-light pe-4 py-3 py-lg-0">
                    <a href="/" class="nav-item nav-link active">Inicio</a>
                    <a class="nav-item nav-link" href="/product" >Productos</a>
                    <a class="nav-item nav-link" href="/shopping" >Carrito</a>
                    <a class="nav-item nav-link" href="/sales" >Ventas</a>
                    <a class="nav-item nav-link"  href="index.html">Cerrar</a>
                </div>
            </div>
        </nav>
    </div>
 ) 
}
export default Layout;