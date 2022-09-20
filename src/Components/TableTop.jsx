import React, { Component } from "react";
import Row from "./RowTop";
import "../Components/TableTop.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

class TableTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bida: 0,
      aska: 0,
      bidb: 0,
      askb: 0,
      bidc: 0,
      askc: 0,
      buya: 0,
      buyb: 0,
      buyc: 0,
      sella: 0,
      sellb: 0,
      sellc: 0,
      check: true,
    };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
      if (this.state.check) {
        let x = Math.random() * 5 + 4;
        let aa = (this.props.price - (this.props.price * x) / 100).toFixed(2);
        x = Math.random() * 5 + 4;
        let bb = (this.props.price + (this.props.price * x) / 100).toFixed(2);
        x = Math.random() * 7 + 6;
        let cc = (this.props.price - (this.props.price * x) / 100).toFixed(2);
        x = Math.random() * 7 + 6;
        let dd = (this.props.price + (this.props.price * x) / 100).toFixed(2);
        x = Math.random() * 9 + 8;
        let ee = (this.props.price - (this.props.price * x) / 100).toFixed(2);
        x = Math.random() * 9 + 8;
        let ff = (this.props.price + (this.props.price * x) / 100).toFixed(2);
        let aaa, bbb, ccc, ddd, eee, fff;
        if (this.props.price < 20000) {
          aaa = Math.random() * (1100 - 1000) + 1000;
          bbb = Math.random() * (1100 - 1000) + 1000;
          ccc = Math.random() * (1100 - 1000) + 1000;
          ddd = Math.random() * (1100 - 1000) + 1000;
          eee = Math.random() * (1100 - 1000) + 1000;
          fff = Math.random() * (1100 - 1000) + 1000;

        }
        else {
          aaa = Math.random() * (1100 - 1000) + 1000;
          bbb = Math.random() * (1100 - 1000) + 1000;
          ccc = Math.random() * (1100 - 1000) + 1000;
          ddd = Math.random() * (1100 - 1000) + 1000;
          eee = Math.random() * (1100 - 1000) + 1000;
          fff = Math.random() * (1100 - 1000) + 1000;
          aaa /= 2;
          bbb /= 2;
          ccc /= 2;
          ddd /= 2;
          eee /= 2;
          fff /= 2;
        }
        aaa = parseInt(aaa);
        bbb = parseInt(bbb);
        ccc = parseInt(ccc);
        ddd = parseInt(ddd);
        eee = parseInt(eee);
        fff = parseInt(fff);
        this.setState({
          bida: aa,
          aska: bb,
          bidb: cc,
          askb: dd,
          bidc: ee,
          askc: ff,
          sella: aaa,
          sellb: bbb,
          sellc: ccc,
          buya: ddd,
          buyb: eee,
          buyc: fff,
          check: false,
        });
      }
    }, 2000);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">

              <div className="container ">
                <div className="row">
                  <div className="heading-cp-css">bid / ask spread</div>
                  <div className="">
                    <div className="">
                      <div className="container-sm  main-con">
                        <div className="row mb-1">
                          <div className="col-3">
                            <div className="cell-wide cell purple-b">
                              <strong>buy side</strong>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="cell-mid cell purple-b">
                              <strong>bid price</strong>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="cell-mid cell purple-b">
                              <strong>ask price</strong>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="cell-mid cell purple-b">
                              <strong>sell side</strong>
                            </div>
                          </div>
                        </div>
                        <Row
                          a={this.props.price ? this.state.buya : <Skeleton width={80} height={15} />}
                          b={this.props.price ? this.state.bida : <Skeleton width={80} height={15} />}
                          c={this.props.price ? this.state.aska : <Skeleton width={80} height={15} />}
                          d={this.props.price ? this.state.sella : <Skeleton width={80} height={15} />}
                        />
                        <Row
                          a={this.props.price ? this.state.buyb : <Skeleton width={80} height={15} />}
                          b={this.props.price ? this.state.bidb : <Skeleton width={80} height={15} />}
                          c={this.props.price ? this.state.askb : <Skeleton width={80} height={15} />}
                          d={this.props.price ? this.state.sellb : <Skeleton width={80} height={15} />}
                        />
                        <Row
                          a={this.props.price ? this.state.sella : <Skeleton width={80} height={15} />}
                          b={this.props.price ? this.state.bidc : <Skeleton width={80} height={15} />}
                          c={this.props.price ? this.state.askc : <Skeleton width={80} height={15} />}
                          d={this.props.price ? this.state.sella : <Skeleton width={80} height={15} />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableTop;
