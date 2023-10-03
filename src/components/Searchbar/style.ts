import { styled } from 'styled-components';

const SearchbarContainer = styled.div`

    width: 400px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    color: #000000;

    border: 1px solid #000000;
    border-radius: 50px;

`;

const SearchbarInput = styled.input`

    width: 360px;
    height: 100%;
    padding: 0 10px;

    color: #000000;

    border: none;
    border-radius: 50px;
    outline: none;

    font-size: 1.2rem;
    font-weight: 700;

    &::placeholder {

        color: #000000;

    }

`;

const SearchbarButton = styled.button`

    width: 40px;
    height: 100%;

    display: flex;  
    justify-content: center;
    align-items: center;

    background-color: #000000;
    color: #FFFFFF;

    border: none;
    border-radius: 50px;
    outline: none;

    font-size: 1.2rem;
    font-weight: 700;

    cursor: pointer;

`;

const ButtonIcon = styled.img`

    width: 80%;
    height: 80%;

`;

const StyledSelect = styled.select`

    width: 400px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    color: #000000;

    border: 1px solid #000000;
    border-radius: 50px;

    font-size: 1.2rem;
    font-weight: 700;
    padding: 0 10px;

    cursor: pointer;

`;

const StyledOption = styled.option`

    width: 100%;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    color: #000000;

    border: 1px solid #000000;
    border-radius: 50px;
    padding: 0 10px;

    font-size: 1.2rem;
    font-weight: 700;

    cursor: pointer;

`;

export { SearchbarContainer, SearchbarInput, SearchbarButton, ButtonIcon, StyledSelect, StyledOption };