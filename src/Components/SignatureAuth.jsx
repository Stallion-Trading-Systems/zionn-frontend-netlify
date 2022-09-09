import React, { useState } from "react";
import { useEffect } from "react";
import "./signatureauth.css";
import { useNavigate } from "react-router";
import SignatureCanvas from "react-signature-canvas";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as api from "../axios";

const SignatureAuth = () => {
  let docToPrint = React.createRef();

  const user = localStorage.getItem("user");
  const [sloading, setSloading] = useState(true);
  const [sigPad, setsigPad] = useState();
  const [trimmedDataURL, settrimmedDataURL] = useState(null);
  const navigate = useNavigate();

  const printDocument = () => {
    const input = docToPrint.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: [297, 300],
      });

      pdf.addImage(imgData, "JPEG", 0, 0);
      let blob = pdf.output("blob");

      let formData = new FormData();
      formData.append("file", blob);

      let res = api.agreement(formData);
      pdf.save("zionn_agreement.pdf");
    });
  };

  if (user === null) {
    navigate("/signup");
  }
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const defaultClick = (e) => {
    setIsActive(false);
  };
  const trimsave = () => {
    settrimmedDataURL(sigPad.getTrimmedCanvas().toDataURL("image/png"));
  };
  const clearsig = () => {
    settrimmedDataURL();
    setsigPad();
    sigPad.clear();
  };
  return (
    <div>
      <div className="container signauth-con-css">
        <div className="row mt-3">
          <h1 className="col signauth-heading-css">Sign Auth</h1>
        </div>
        <div className="row signauth-content-css">
          <div className="col signauth-doc-css ">
            <p className="mt-3" ref={docToPrint}>
              It is really a moment of happiness for all the members of [
              company name] to inform you that [ company name ] has accepted the
              contract of working on the project of [ mention project name ] on
              [ date]. The final decision for the approval of work contract with
              your company has been taken by Mr./Ms. [ name]. He/she is the [
              designation] of the [ company name]. This is very important to let
              you know that the terms and conditions for the work contract that
              you have sent in the last mail has been viewed thoroughly by the
              higher authority of [ company name]. They have agreed to whatever
              has been mentioned over there. For your better understanding, we
              have agreed to following terms and conditions mentioned in the
              document: [ mention the terms and conditions which are relevant
              for this particular contract].
              <br />
              <br />
              We have selected your company because we have found that your
              company is a brand in the US market and also has a global market.
              it is highly appreciable. Your company has earned the reputation
              of finishing the project by maintaining high quality standards and
              finishing before the deadline. You had completed the last project
              related to [ subject matter of the project ] with the [ mention
              another company name]. W would also like to introduce about our
              company as well. Our company got established in the year of [
              year]. The employees of our company specializes in making projects
              on [ mention the type of the project]. We do believe that we all
              together will make a great team.
              <br />
              <br />
              We are in the process of organizing a meeting for employees of [
              mention other company name] on [ date]. It is in regards to
              finishing the paperwork related to starting the contract with your
              company. You can contact us on [ contact number ] or through [
              email id ] for further detail related to the acceptance of the
              work contract of your company.
              <br />
              <br />
              Thank you.
              <br />
              <br />
              <img
                className="sign-img-css"
                style={{ width: "500", height: "200" }}
                src={trimmedDataURL}
              />
              <br />
              Signature
            </p>
            <SignatureCanvas
              backgroundColor="white"
              penColor="green"
              ref={(ref) => {
                setsigPad(ref);
              }}
              canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
            />
            <br />
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <button onClick={trimsave} className="no-custom-btn">
                    confirm sign
                  </button>
                </div>
                <div className="col-2">
                  <button onClick={clearsig} className="no-custom-btn">
                    clear screen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row signauth-check-css mt-5 mb-5">
          <div class="form-check signauth-check-css">
            <input
              class=" form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class=" form-check-label" for="flexCheckDefault">
              &nbsp;i agree
            </label>
          </div>
        </div>
        <div className="row signauth-submit-css">
          <button
            onPointerLeave={defaultClick}
            onPointerDown={handleClick}
            onPointerUp={handleClick}
            className={isActive ? "butt butt-ac" : "butt"}
            onClick={printDocument}
          >
            submit
            <i class="bi bi-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureAuth;
