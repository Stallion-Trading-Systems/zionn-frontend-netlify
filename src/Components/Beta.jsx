<form onSubmit={submitform}>
              <div className="inp-css">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="butto-2"
                  placeholder="full name"
                />
              </div>
              <div className="inp-css">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="butto-2"
                  placeholder="email"
                />
              </div>
              <div className="inp-css">
                <input
                  onChange={(e) => {
                    setPhone(e.value);
                  }}
                  type="tel"
                  className="butto-2"
                  placeholder="phone #"
                />
              </div>
              <div className="inp-css">
                <input
                  onChange={(e) => {
                    setPassword(e.value);
                  }}
                  type="password"
                  className="butto-2"
                  placeholder="password"
                />
              </div>
              <p className="txt-2">sign up using </p>
              <div>
                <div className="container">
                  <div className="row social-tab">
                    <div className="col">
                      <button className="social-btn">
                        <img className="social-media-google" src={google} />
                      </button>
                    </div>
                    <div className="col">
                      <button className="social-btn">
                        <img className="social-media-linkedin" src={linkedin} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sign-btn">
                <button
                  type="submit"
                  form="form1"
                  className="btn-2-su"
                  value="sign up"
                  onClick={signupfun}
                />
              </div>
            </form>