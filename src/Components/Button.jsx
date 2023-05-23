import React from 'react'
import styled from 'styled-components'

const Button = ({ value, color, small }) => {

    const Button = styled.button`
        color: ${({ color}) => color}; 
        padding: 1rem;
        padding: ${({small}) => (small ? '10px' : '.5 rem 3rem' )};
        font-size: ${({small}) => (small ? '14px' : '16px')};
        font-weight: 400;
        border: 2px solid;
        border-image: linear-gradient(to right, white, #000000) 1;
        background: none;
        font-weight: 420;
        transition: 0.5s ease-in-out;
        width: max-content;


        &:hover{
            border: 2px solid;
            border-image: linear-gradient(to right, #000000, #ffffff) 1;
            background: none;
            transition: ease-in 0.3s;
            cursor: pointer;
            background: var(--primary-color);
        }
    `;

    return (
        <Button color={color} small={small} >{value}</Button>
    )
}

export default Button