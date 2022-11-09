

function App() {
  return (
    <div id="page">
    <div  class="container-fluid p-0 mb-5">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-50"  src="../img/carucel1.png" alt="" data-holder-rendered="true"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7 pt-5">
                                    <h1 class="text-white mb-4 animated slideInDown">Todos los utiles escolares</h1>
                                    <p class="ftext-white mb-4 pb-2 mx-sm-5 animated slideInDown">Encuentra los mejores utiles al mejor precio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-50" src="../img/carucel2.png" alt="" data-holder-rendered="true"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7">
                                    <h1 class="text-white mb-4 animated slideInDown">Encuentra las mejores novelas</h1>
                                    <p class="ftext-white mb-4 pb-2 mx-sm-5 animated slideInDown">Explora el mundo de la lectura</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">siguiente</span>
            </button>
        </div>
    </div>
   </div>
  );
}

export default App;
