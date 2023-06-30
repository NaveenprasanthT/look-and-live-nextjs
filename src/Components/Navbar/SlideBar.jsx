import React, { useState } from 'react'
import { SlideWrap, Links, Item, ItemProduct, GetInTouch, Btn } from './SlideBarEle'
import Button from '../Button'

function SlideBar({ isOpen, setIsOpen }) {

    return (
        <SlideWrap isOpen={isOpen} >
            <Links >
                <Item onClick={() => setIsOpen(false)} href='/'>
                    Home
                </Item>
                <Item onClick={() => setIsOpen(false)} href='/#about'>
                    About Us
                </Item>
                <Item onClick={() => setIsOpen(false)} href='/#services'>
                    Services
                </Item>
                <Item onClick={() => setIsOpen(false)} href='/#testimonials'>
                    Testimonials
                </Item>
                <GetInTouch href='tel:9844000873' onClick={() => setIsOpen(false)}>
                    <Button value='Contact' color='#000' small={true} />
                </GetInTouch>
            </Links>
        </SlideWrap>
    )
}

export default SlideBar