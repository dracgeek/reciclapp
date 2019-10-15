import React, { PureComponent } from "react";
// import { Link } from "react-router-dom";

class index extends PureComponent {
  render() {
    return (
      /*   <React.Fragment>
            <div className="container">
              Hola Mundo 
              <Link to="/login">
              <button type="button" class="btn btn-primary">Primary</button>
              </Link>               
            </div>          
        </React.Fragment> */
      <div className="container mt-3">

        <div className="col-12 col-xl-8">


          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">


                  <h4 className="card-header-title">
                    Orders
      </h4>

                </div>
                <div className="col-auto mr-n3">


                  <span className="text-muted">
                    Show affiliate:
      </span>

                </div>
                <div className="col-auto">


                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="cardToggle" data-toggle="chart" data-target="#ordersChart" data-add="{&quot;data&quot;:{&quot;datasets&quot;:[{&quot;data&quot;:[15,10,20,12,7,0,8,16,18,16,10,22],&quot;backgroundColor&quot;:&quot;#d2ddec&quot;,&quot;label&quot;:&quot;Affiliate&quot;}]}}" />
                    <label className="custom-control-label" for="cardToggle"></label>
                  </div>

                </div>
              </div>

            </div>
            <div className="card-body">


              <div className="chart"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                <canvas id="ordersChart" className="chart-canvas chartjs-render-monitor" width="492" height="300" ></canvas>
              </div>

            </div>
          </div>

        </div>

      </div>


    )
  }
}

export default index;