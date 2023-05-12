import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import { compare , wishList, user, cart} from '../assets'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0 text-capitalize'>free shipping over $100 and free returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline: <a href="tel:+2348167310747" className='text-white a'>+2348167310747</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link className='text-white a'>ECom</Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product here...." aria-label="Search Product here...." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='a d-flex align-items-center gap-10 text-white'>
                    <img src={compare} alt="" />
                    <p className='mb-0'>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='a d-flex align-items-center gap-10 text-white'>
                    <img src={wishList} alt="" />
                    <p className='mb-0'>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='a d-flex align-items-center gap-10 text-white'>
                    <img src={user} alt="" />
                    <p className='mb-0'>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='a d-flex align-items-center gap-10 text-white'>
                    <img src={cart} alt="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header