import Link from "next/link";
import styled from "styled-components"

export const SlideWrap = styled.div`
    position: fixed;
    z-index: -10;
    width: 100%;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out; 
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0' )};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
export const Links = styled.div`
   display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align:  center;
    padding-left: 0px;
`;

export const Item = styled(Link)`
    color: #000;
    text-decoration:none ;
    font-size: 24px;
    padding-left: 10px;

    &:hover{
        cursor: pointer;
        color: var(--primary-color);
    }
`;
export const GetInTouch = styled(Link)`
    font-size: 24px;
`;
export const Btn = styled.button`
    width: 50%;
    padding: 10%;
    padding: 6px 20px;
    border: 1px solid var(--primary-color);
    border-radius: 20px;
    background: var(--primary-color);
    color: #fff;
    transition: .3s;
    text-decoration: none;
    height: 50%;
`;
