import Input from "../Inputs/Input";
import Button from "../Button/Button";
import Select from "../Inputs/Select";
import { useState, useEffect } from "react";




export default function Tabs(props) {
  const [mobile, setmobile] = useState(() => window.innerWidth < 992);
  const [parentdiv, setparentdiv] = useState(false);
  
  

  const closeTabs=(e)=>{
     let parents=e.currentTarget.closest(".tabbing__wrapper .tab-pane");
      let btngroup=e.currentTarget.closest(".tabbing");
      let divbtn=btngroup.querySelector(".tabbing__btngroup .tabbing__btn")
     parents.classList.remove("active","show");
     divbtn.classList.remove("active");
    
    console.log(e.currentTarget.closest(".tabbing "),divbtn);
    setparentdiv(false)
    
  }
  useEffect(() => {
    window.addEventListener("resize", function () {
      const devicematch = window.innerWidth < 992
      if (mobile !== devicematch) {
        setmobile(devicematch)
        setparentdiv(false)
      }
    }, false)
  }, [mobile]);
  return (
    <div className={`d-flex tabbing flex-wrap flex-lg-nowrap ${parentdiv ? "active show" : ""}`}  >
      <h2 className="d-lg-none tabbing__title tabbing__info">Accounts</h2>
      <ul className="nav flex-column nav-pills mb-3 tabbing__btngroup w-100" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className= {`  tabbing__btn  ${!mobile ? "active show" : ""}`}onClick={() => setparentdiv(true)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Profile Information</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className=" tabbing__btn " onClick={() => setparentdiv(true)} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Change Password</button>
        </li>

      </ul>
      <div className="tab-content tabbing__wrapper" id="pills-tabContent">
        <div className={`tab-pane fade ${!mobile ? "active show" : ""}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
        <button className="d-lg-none tabbing__btnacc tabbing__title " onClick={closeTabs} > <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f1f7f9"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg> Profile Information</button>
          <div className="card__wrapper">
            <div className="container-fluid ">
              <div className="row align-items-end justify-content-between">
                <div className="col-12">
                  <h2 className="card__title">  Profile Information </h2>

                </div>
                <div className="col-xxl-auto ">
                  <div className="card__imgwrap">
                    <img src="images/card-img.png" alt="profile" />
                    <a className="card__imgwrap-edit" href="#">
                      <img src="images/edit-icon.svg" alt="edit-icon" />
                    </a>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form__light-label form__label" for="fName">
                          First Name
                        </label>
                        <Input id="fName " name="fName" className="form__light form__input " />
                      </div>
                      <div className="mb-3">
                        <label className="form__light-label form__label" for="email">
                          Email
                        </label>
                        <Input type="email" id="email " name="email" className="form__light form__input" />
                      </div>
                      <div className="mb-3 mb-lg-0">
                        <label className="form__light-label form__label" for="Number">
                          Phone Number
                        </label>
                        <div className="d-flex align-items-center form__selectgroup" >
                          <Select className="form__light" options={props.options} ></Select>
                          <Input id="Number " name="Number" className="form__light form__input" />
                        </div>

                      </div>

                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form__light-label form__label" for="lName">
                          Last Name
                        </label>
                        <Input id="lName " name="lName" className="form__light form__input " />
                      </div>
                      <div className="mb-3">
                        <label className="form__light-label form__label" for="organisation">
                          Organisation
                        </label>
                        <Input id="organisation " name="organisation" className="form__light form__input" />
                      </div>
                      <div className="mb-3 mb-lg-0">
                        <label className="form__light-label form__label" for="wNumber">
                          whatsapp Number
                        </label>
                        <div className="d-flex align-items-center form__selectgroup" >
                          <Select className="form__light" options={props.options} ></Select>
                          <Input id="wNumber " name="wNumber" className="form__light form__input" />
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
                <div className="col-xxl-2">
                  <div className="card__btngroup d-flex flex-xxl-column mt-3 mt-xxl-0 justify-content-between">
                    <Button className="btn__white ">Cancel</Button>
                    <Button className="btn__blue">Save</Button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">2</div>

      </div>
    </div>
  )
}
