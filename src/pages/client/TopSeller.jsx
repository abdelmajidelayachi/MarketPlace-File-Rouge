import React from 'react'
import Nav from '../../components/clients/Nav'
import Wrapper from '../../components/UI/Wrapper'

function TopSeller() {
  return (
    <Wrapper className="">
      <div className=" max-w-screen-xl m-auto ">
        <Nav active='top' />
        top seller
      </div>
    </Wrapper>
  )
}

export default TopSeller