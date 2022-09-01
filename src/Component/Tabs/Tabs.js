import Input from "../Inputs/Input";
import Button from "../Button/Button";
import Select from "../Inputs/Select";
import { useState, useEffect } from "react";


export default function Tabs(props) {
  const [mobile, setmobile] = useState(() => window.innerWidth < 992);
  const [activeTab, setActiveTab] = useState(0);

  const tabBtn = (index) => {
    setActiveTab(index);
    setmobile(true);
  };

  const closeTabs = (e) => {
    let parents = e.currentTarget.closest(".tabbing__wrapper").querySelectorAll(".tab-pane");
    let btngroup = e.currentTarget.closest(".tabbing").querySelectorAll(".tabbing__btngroup .tabbing__btn");
    [...parents, ...btngroup].forEach(element => element.classList.remove("active", "show"));
    setmobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", function () {
      const devicematch = window.innerWidth < 992;
      if (mobile !== devicematch) {
        setmobile(devicematch);
      }
    });
  }, [mobile]);

  let btnTabList = [
    {
      tabName: "home",
      aria: true,
      tabText: "Profile Information",
    },
    {
      tabName: "profile",
      aria: false,
      tabText: "Change Password",
    },
  ];

  return (
    <>
      <h2 className="d-lg-none tabbing__title tabbing__info">Accounts</h2>
      <div className={`d-flex tabbing flex-wrap flex-lg-nowrap ${mobile ? "active" : ""}`}  >

        <ul className="nav flex-column nav-pills mb-3 tabbing__btngroup w-100" id="pills-tab" role="tablist">
          {
            btnTabList.map((element, index) => {
              return (
                <li key={element.tabName + element.index} className="nav-item" role="presentation">
                  <button className={`tabbing__btn  ${activeTab === index ? "active" : ""}`} onClick={() => tabBtn(index)} id={`pill-${element.tabName}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${element.tabName}`} type="button" role="tab" aria-controls={`pills-${element.tabName}`} aria-selected="true">{element.tabText}</button>
                </li>
              )
            })
          }
        </ul>
        <div className="tab-content tabbing__wrapper" id="pills-tabContent">
          <div className={`tab-pane fade ${activeTab === 0 ? "active show" : ""}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
            <button className="d-lg-none tabbing__btnacc tabbing__title " onClick={closeTabs} > <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f1f7f9"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" /></svg> Profile Information</button>
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
                          <label className="form__light-label form__label" htmlFor="fName">
                            First Name
                          </label>
                          <Input id="fName " name="fName" className="form__light form__input " />
                        </div>
                        <div className="mb-3">
                          <label className="form__light-label form__label" htmlFor="email">
                            Email
                          </label>
                          <Input type="email" id="email " name="email" className="form__light form__input" />
                        </div>
                        <div className="mb-3 mb-lg-0">
                          <label className="form__light-label form__label" htmlFor="Number">
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
                          <label className="form__light-label form__label" htmlFor="lName">
                            Last Name
                          </label>
                          <Input id="lName " name="lName" className="form__light form__input " />
                        </div>
                        <div className="mb-3">
                          <label className="form__light-label form__label" htmlFor="organisation">
                            Organisation
                          </label>
                          <Input id="organisation " name="organisation" className="form__light form__input" />
                        </div>
                        <div className="mb-3 mb-lg-0">
                          <label className="form__light-label form__label" htmlFor="wNumber">
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
          <div className={`tab-pane fade ${activeTab === 1 ? "active show" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
            <button className="d-lg-none tabbing__btnacc tabbing__title " onClick={closeTabs} > <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f1f7f9"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" /></svg> Change Password</button>
          </div>
        </div>
      </div>
    </>
  )
}
