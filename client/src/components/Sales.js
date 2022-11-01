import './Sales.css';
function Sales(){
    return(
        <div class="container-fluid p-0 mb-5" >
        <div class="text-center hero my-5 p position-relative" >
          <img class="d-block w-100" src="../img/papeleria.png" alt=""/>
          <div class="carousel-caption">
            <div class="row col-12 h-100">
            <div class="container my-3">
            <div class="row">
                <div class="col-sn-12 col-md-12 col-lg-12-col-xl-12">
                    <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead class="table-warning table">
                                    <tr>
                                        <th scope="col"  className="centered">Fecha de venta</th>
                                        <th scope="col" className="centered">Id. Venta</th>
                                        <th scope="col" className="centered">Valor</th>  
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="centered text-white">06/10/2022</td>
                                        <td className="centered text-white">1203</td>
                                        <td className="centered text-white">$4.000</td>
                                    </tr>
                                    <tr>
                                        <td className="centered text-white">08/10/2022</td>
                                        <td className="centered text-white">1423</td>
                                        <td className="centered text-white">$6.000</td>
                                    </tr>
                                    <tr>
                                        <td className="centered text-white">10/10/2022</td>
                                        <td className="centered text-white"> 1263</td>
                                        <td className="centered text-white">$10.000</td>
                                    </tr>
                                    
                                    <tr>
                                        <th colspan="2" className="centered text-white">Total</th>
                                        <td className="centered text-white">$20.000</td>
                                    </tr>
                                                            
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>    
            </div> 
            </div>
          </div>
        </div>
        </div>
    );
}
export default Sales