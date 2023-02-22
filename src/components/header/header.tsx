import Link from "next/link"
import Bag from "./components/Bag"
import Contact from "./components/Contact"
import Heart from "./components/Heart"
import Logo from "./components/Logo"
import Search from "./components/Search"
import Stores from "./components/Stores"
import User from "./components/User"
import VirtualAppointment from "./components/VirtualAppointment"

const renderMenus = () => {
  return (
    <ul className="king-navgation list-inline selected-navigation-color">
      <li>
        <Link className="nav-item js-activated" href="/engagement-rings/">Engagement Rings</Link>
      </li>
      <li>
        <Link className="nav-item js-activated" href="/wedding-rings/">Wedding Rings</Link>
      </li>
      <li>
        <Link className="nav-item js-activated" href="/diamond/">Diamonds</Link>
      </li>
      <li>
        <Link className="nav-item js-activated" href="/gemstones/">Gemstones</Link>
      </li>
      <li>
        <Link className="nav-item js-activated" href="/jewelry/">Jewelry</Link>
      </li>
      <li>
        <Link className="nav-item js-activated" href="/gifts/">Gifts</Link>
      </li>
      <li>
        <Link className="nav-item js-activated" href="/about-brilliant-earth/">About</Link>
      </li>
    </ul>
  )
}

export default function Header() {
  return (
    <div className='king-header-wrapper hidden-xs'>
      <div className='king-header'>
        <div className='container container1170'>
          <div className='row cn-row'>
            <div className='col-lg-3 col-md-4 col-sm-4 king-quick-help king-header-serves'>
              <ul className='list-inline contact-us'>
                <li>
                  <Contact telephone='800.691.0952' />
                </li>
                <li>
                  <Stores />
                </li>
                <li>
                  <VirtualAppointment />
                </li>
              </ul>
            </div>
            <div className='col-lg-6 col-md-4 col-sm-4 king-header-navgation' style={{ position: 'static' }}>
              <Logo />
              {renderMenus()}
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 king-quick-help king-header-user'>
              <ul className='list-inline site-header-personal'>
                <li>
                  <Search />
                </li>
                <li>
                  <User />
                </li>
                <li>
                  <Heart />
                </li>
                <li>
                  <Bag />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
