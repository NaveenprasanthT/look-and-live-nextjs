import styled from "styled-components";
import Image from 'next/image'

export const SectionWrap = styled.div`
    padding: 4% 6%;
    background: ${({id}) => (id==='download' ? '#fff' : '')};

`;
export const Toptitle = styled.div`
    font-weight: 420;
    font-size: 24px;
    display: ${({ topTitle }) => (topTitle ? 'block' : 'none')};
`;
export const Title = styled.div`
    font-weight: 420;
    font-size: 24px;
    display: ${({ topTitle }) => (topTitle ? 'none' : 'block')};
`;
export const MainSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: ${({imageRight}) => (imageRight ? ' row-reverse' : '')};
`;
export const Left = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ImageWrap = styled.div`
    width: 90%;
    height: 90%;
    position: relative;
    padding: 4px;
    z-index: 10;
    background:
        linear-gradient(to right, var(--primary-color) 4px, transparent 4px) 0 0,
        linear-gradient(to right, var(--primary-color) 4px, transparent 4px) 0 100%,
        linear-gradient(to left, var(--primary-color) 4px, transparent 4px) 100% 0,
        linear-gradient(to left, var(--primary-color) 4px, transparent 4px) 100% 100%,
        linear-gradient(to bottom, var(--primary-color) 4px, transparent 4px) 0 0,
        linear-gradient(to bottom, var(--primary-color) 4px, transparent 4px) 100% 0,
        linear-gradient(to top, var(--primary-color) 4px, transparent 4px) 0 100%,
        linear-gradient(to top, var(--primary-color) 4px, transparent 4px) 100% 100%;

    background-repeat: no-repeat;
    background-size: 50px 50px;
`;
export const Img = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const Right = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0;

    h1{
        margin: 2% 0;
        color: ${({ titleColor }) => (titleColor)};
        font-size: 38px;
    }
    h2{
        margin: 2% 0;
        color: ${({ titleColor }) => (titleColor)};
        font-size: 38px;
        display: ${({ id }) => (id === 'emi' ? 'none' : 'block')};
    }
    h6{
        margin: 0;
        display: ${({ id }) => (id === 'emi' ? 'none' : 'block')};
    }
    P{
        margin: 0;
        margin-bottom: 4%;
        font-size: 20px;
        line-height: 160%;
        font-weight: 300;
        color: ${({id}) => (id==='download' ? '#000' : '')};
        display: ${({ id }) => (id === 'emi' ? 'none' : 'block')};
    }
`;

export const EmiContent = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 80%;
   height: 100%;
   padding: 0 10%;
   background: #00000078;
   display: ${({ id }) => (id === 'emi' ? 'flex' : 'none')};
   flex-direction: column;
   justify-content: center;

   h2{
        margin: 2% 0;
        color: var(--primary-color);
        font-size: 2.2vw;
        display: ${({ id }) => (id === 'emi' ? 'block' : 'none')};
   }
    P{
        margin: 0;
        margin-top: 4%;
        font-size: 1.3vw;
        line-height: 160%;
        font-weight: 300;
        display: ${({ id }) => (id === 'emi' ? 'block' : 'none')};
    }
`;


