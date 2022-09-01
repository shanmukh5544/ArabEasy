




export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container-fluid">


          
          <h1 className="navbar__title">Acounts</h1>
          <a className="d-block d-lg-none navbar__logo" >
            <img src="https://www.ez.works/logo.webp" alt="logo"/>
          </a>
         
          
          <div className=" dropdown " >
            <button class="d-flex align-items-center dropdown__btn justify-content-center" data-bs-toggle="dropdown">
            <span className="navbar__profile-text">Hi Dona</span>
            <span className="navbar__profile">
            <img src="images/Profile.png" alt="profile" ></img>
            </span>
            </button>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Account</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>

            
          </div>
        </div>
      </nav>
    </header>
  )
}


