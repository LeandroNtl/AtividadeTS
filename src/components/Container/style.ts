import { styled } from 'styled-components';

type ContainerProps = {
    width?: string;
    height?: string;
    direction?: string;
    justify?: string;
    align?: string;
};

const StyledContainer = styled.div<ContainerProps>`

    width: ${({ width }) => width || '100%'};   
    height: ${({ height }) => height || '100%'};

    display: flex;
    flex-flow: ${({ direction }) => direction || 'column wrap'}; 
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'};

    color: #000000;

    padding: 10px;
    gap: 20px;

`;

const InfoContainer = styled.div`

    width: 40%;
    height: 100%;

    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;

    border: 1px solid #000000;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #000000;

    padding: 10px;
    gap: 10px;

    ul {
        
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;

        gap: 10px;

    }

`;

const TrackContainer = styled.div`

    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    padding: 10px;

    h4 {

        width: 100%;
        height: 100%;
        text-align: flex-start; 

    }

`;

export { StyledContainer, InfoContainer, TrackContainer };