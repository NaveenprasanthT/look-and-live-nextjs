import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const MobileView = styled.div`
    display: none;
    align-items: center;
    font-size: 16px;
    width: 100%;
    font-weight: 500;
    z-index: 99;
    background: #fff;
    padding: 3% 0;

    @media screen and (max-width: 1000px){
        display: flex;
    }

`;
export const LogoWrapMobile = styled(Link)`
    padding: 0px 6%;
    width: 70%;
`;

export const LogoMobile = styled(Image)`
    height: 100%;
    width: 80%;
    @media screen and ( max-width: 1000px) {
        width: 40%;
    }
    @media screen and ( max-width: 450px) {
        width: 80%;
    }
`;

export const Hamburger = styled.div`
    width: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 40px;
    color: #000;
    margin-right: 10px;
`;
