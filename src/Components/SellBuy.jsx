import React, { useState } from "react";
import sellbuypic from "../assets/sellbuypic.svg";
import "./sellbuy.css";
import Button2 from "./Button2";
import { useNavigate } from "react-router";
import Button from "./Button";
import monkey from "../assets/monkey.svg";
import * as api from "../axios";

const SellBuy = () => {
  const [c_name, setCname] = useState("");
  const [no_of_shares, setNshares] = useState("");
  const [secu_type, setSecutype] = useState("");
  const [user, setUser] = useState(false);
  const [doc, setDoc] = useState(null);
  const navigate = useNavigate();

  const storeSellBuy = async () => {
    let data = JSON.parse(localStorage.getItem("user"));

    let email = data.email
    const formData = new FormData();
    formData.append("file", doc.selectedFile);
    formData.append("c_name", c_name);
    formData.append("secu_type", secu_type);
    formData.append("email", email);
    formData.append("no_of_shares", no_of_shares);
    let res = await api.storeShares(formData)
    console.log(res);
  };

  const handleFileInput = (e) => {
    setDoc({
      selectedFile: e.target.files[0],
      loaded: 0,
    });
  };

  const setStockunits = (e) => {
    setSecutype(e.target.value);
  };

  return (
    <div>
      <div id="leftHalf"></div>
      <div id="rightHalf">
        <div className="top-right-css">
          <img className="mon-img-sb" src={monkey} />
        </div>
        <form
          id="form1"
          onSubmit={(e) => {
            e.preventDefault();
            storeSellBuy(e);
          }}
        >
          <div className="row no-mar-sb"></div>
          <div className="row mt-4">
            <div className="col">
              <div className="inp-css">
                <input
                  onChange={(e) => {
                    setCname(e.target.value);
                  }}
                  type="text"
                  className="butto-2 input-form"
                  placeholder="company name"
                  required
                />
              </div>
              <div className="inp-css mt-4">
                <input
                  onChange={(e) => {
                    setNshares(e.target.value);
                  }}
                  type="number"
                  className="butto-2 input-form"
                  placeholder="# of securities"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <p>security type:</p>
              <div class="form-check">
                <input
                  value="esop"
                  checked={secu_type == "esop"}
                  onChange={(e) => {
                    setSecutype(e.target.value);
                  }}
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  ESOP's
                </label>
              </div>
              <div class="form-check">
                <input
                  value="stockunits"
                  checked={secu_type == "stockunits"}
                  onChange={setStockunits}
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  stock units
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <p>
                proof of ownership:
                <br /> i.e. grant letter, share certificate.
              </p>
              <div className="row">
                <div className="col"></div>
                <div className="col-5">
                  <input
                    type="file"
                    onChange={handleFileInput}
                    id="file-doc"
                    className="upload-form-sb"
                    placeholder="# of securities"
                    name="file"
  
                  />
                  <label for="file-doc" className="butto-2 upload-form-sb">
                    upload <i class="bi bi-arrow-up-right"></i>
                  </label>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="sign-btn btn-cen-doc">
                <button
                  form="form1"
                  type="submit"
                  className="btn-2-su"
                  onSubmit={storeSellBuy}
                >
                  sell
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="container con-sb">
                <div className="row">
                    <div className="col-6">
                        <div className="con-image-sb">
                            <img className="img-sb" src={sellbuypic} alt="signuppic" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="container">
                            <form id="form1" onSubmit={onboard}>
                                <div className="container">
                                    <div className="row">
                                        <p className="txt-2">a few questions to get to know you</p>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col-8">
                                            <div className="inp-css">
                                                <input
                                                    onChange={(e) => {
                                                        setEmployer(e.target.value);
                                                    }}
                                                    type="text"
                                                    className="butto-2 input-form"
                                                    placeholder="current employer"
                                                    required
                                                />
                                            </div>
                                            <div className="inp-css mt-4">
                                                <input
                                                    onChange={(e) => {
                                                        setDesignation(e.target.value);
                                                    }}
                                                    type="text"
                                                    className="butto-2 input-form"
                                                    placeholder="designation (time to brag!)"
                                                    required
                                                />

                                            </div>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                    <div className="row">
                                        <p className="txt-2">tenure at current firm </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-3 input-range-side-1">
                                            &#60; 1 year
                                        </div>
                                        <div className="col-6">
                                            <input className="form-range input-slider" type="range" min="1" max="10" id="customRange2" onInput={e => setTenure(e.target.value)} />

                                        </div>
                                        <div className="col-3 input-range-side-2">
                                            &#62;10 years

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3"></div>
                                        <div className="col"></div>
                                        <div className="col">
                                            <div className="sign-btn">
                                                <button
                                                    form="form1"
                                                    type="submit"
                                                    className="btn-2-su"
                                                    onSubmit={onboard}
                                                >
                                                    getstarted
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col"></div>
                                        <div className="col"></div>
                                        <div className="col-4"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default SellBuy;
