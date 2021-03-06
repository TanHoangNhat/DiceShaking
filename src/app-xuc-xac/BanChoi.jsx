import React, { Component } from "react";
import BtnTaiXiu from "./BtnTaiXiu";
import XucXac from "./XucXac";

export class BanChoi extends Component {
  // renderXucXac = () => {
  //   let { xucXacs } = this.props;
  //   return xucXacs.map((xucXac, i) => {
  //     return <XucXac key={i} xucXac={xucXac} />;
  //   });
  // };

  render() {
    let { xucXacs, handleChoice } = this.props;
    return (
      <div className="BanChoi row text-center">
        <BtnTaiXiu handleChoice={handleChoice} taiOrXiu={true} />
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {xucXacs.map((xucXac, i) => {
              return <XucXac key={i} xucXac={xucXac} />;
            })}
          </div>
        </div>
        <BtnTaiXiu handleChoice={handleChoice} taiOrXiu={false} />
      </div>
    );
  }
}

export default BanChoi;
