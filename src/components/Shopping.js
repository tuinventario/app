function Shopping() {
    return (
        <div class="container-fluid p-0 mb-5" >
        <div class="text-center hero my-5 p position-relative" >
          <img class="d-block w-100" src="../img/papeleria.png" alt=""/>
          <div class="carousel-caption">
            <div class="row col-12 h-100">

            <div class="my-2 mx-2 d-flex gap-3">
                <div class="col-8 d-flex flex-column justify-content-start">
                    <div class="p-2 d-flex gap-4">
                        <div> 
                            <img src="../img/882470265.jpg"  width="100rem" height="auto gap-2" alt="..."/>
                        </div>
                        <div>
                            <h2 class="ml-1">Mochila KL</h2>
                            <h6 class="text-muted">SKU 882470265</h6>
                            <h6 class="text-muted">Negro</h6>
                            <button type="button" class="btn btn-dark">Eliminar</button>
                        </div>

                        <div>
                            <h2>$119.900</h2>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Cantidad</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01">

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>


                   
                    <div class="p-2 d-flex gap-4">
                        <div> 
                            <img src="../img/882470265.jpg"  width="100rem" height="auto gap-2" alt="..."/>
                        </div>

                        <div>
                            <h2 class="ml-1">Mochila KL</h2>
                            <h6 class="text-muted">SKU 882470265</h6>
                            <h6 class="text-muted">Negro</h6>
                            <button type="button" class="btn btn-dark">Eliminar</button>
                        </div>

                        <div>
                            <h2>$119.900</h2>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Cantidad</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01">

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="card col-3">
                    <div class="card-body">
                    <h5 class="card-title">Tus compras</h5>
                    <h6 class="card-subtitle mb-2 text-muted d-flex">productos:</h6><br/>
                    <h6 class="card-subtitle mb-2 text-muted d-flex">Mochila KL <span class="col align-self-end">$119.900</span>
                      </h6>
                      <h6 class="card-subtitle mb-2 text-muted d-flex">Mochila KL <span class="col align-self-end">$119.900</span>
                      </h6>
                    <h3 class="text-muted d-flex">Total <span class="col align-self-end">$119.900</span></h3>
                    <div class="d-flex flex-row-reverse"><button class="col align-self-end">comprar</button></div>

                    </div>
                </div>
            
            </div>
            </div>
          </div>
        </div>
        </div>
    );
}
export default Shopping;