import Button from "../Button/Button"

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="container-fluid h-100">
        <div className="sidebar__logo d-none d-lg-block">
          <a >
            <img src="https://www.ez.works/logo.webp" alt="logo"/>
          </a>
        </div>
        <div className="sidebar__links">
          <Button className="sidebar__links-btn">
            <img src="images/assignment.svg" alt="assigment"></img>
          </Button>
          <Button className="sidebar__links-btn">
            <img className="m-auto" src="images/message.svg" alt="messages"></img>
          </Button>
        </div>
      </div>
    </aside>
  )
}


