import React, { useState } from 'react'
import { SlideWrap, Links, Item, ItemProduct, GetInTouch, Btn } from './SlideBarEle'

function SlideBar({ isOpen, setIsOpen }) {

    return (
        <SlideWrap isOpen={isOpen} >
            <Links >
                <Item onClick={() => setIsOpen(false)} href='/'>
                    Home
                </Item>
                <Item onClick={() => setIsOpen(false)} href='/AboutUs'>
                    About Us
                </Item>
                <Item onClick={() => setIsOpen(false)} href='/products'>
                    Projects
                </Item>
                <Item onClick={() => setIsOpen(false)} href='/#testimonials'>
                    Services
                </Item>
                <Item onClick={() => setIsOpen(false)} href='/#contact'>
                    Clints
                </Item>
                <GetInTouch href='/EnquiryForm' onClick={() => setIsOpen(false)}>
                    <Btn>
                        Contact us
                    </Btn>

                </GetInTouch>
            </Links>
        </SlideWrap>
    )
}

export default SlideBar