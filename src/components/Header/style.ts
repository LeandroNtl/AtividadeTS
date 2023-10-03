import { styled } from 'styled-components';

const Header = styled.header`

    width: 100vw;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #000000;

    border-bottom: 1px solid #000000;

`;

const LogoContainer = styled.div`

    width: 80px;
    height: 30px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin: 0 20px;

`;

const Logo = styled.img`

    width: 30px;
    height: 100%;

`;

const Title = styled.h2`

    width: 80px;
    font-size: 1.5rem;
    font-weight: 700;
    white-space: nowrap;

`;

export { Header, LogoContainer, Logo, Title };