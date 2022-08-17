import React, { Component } from "react";
import Row from "./RowTop";
import "../Components/TableTop.css";

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
    };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
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
      this.setState({
        bida: aa,
        aska: bb,
        bidb: cc,
        askb: dd,
        bidc: ee,
        askc: ff,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <div className="container-sm">
          <div className="row mb-1">
            <div className="col-3">
              <div className="cell-wide-t cell-t purple-b">
                <strong>buy side</strong>
              </div>
            </div>
            <div className="col-3">
              <div className="cell-mid-t cell-t purple-b">
                <strong>bid price</strong>
              </div>
            </div>
            <div className="col-3">
              <div className="cell-mid-t cell-t purple-b">
                <strong>ask price</strong>
              </div>
            </div>
            <div className="col-3">
              <div className="cell-last-t cell purple-b">
                <strong>sell side</strong>
              </div>
            </div>
          </div>
          <Row
            a="#value"
            b={this.state.bida}
            c={this.state.aska}
            d="#value"
            e="#value"
          />
          <Row
            a="#value"
            b={this.state.bidb}
            c={this.state.askb}
            d="#value"
            e="#value"
          />
          <Row
            a="#value"
            b={this.state.bidc}
            c={this.state.askc}
            d="#value"
            e="#value"
          />
        </div>
      </div>
    );
  }
}

export default TableTop;
