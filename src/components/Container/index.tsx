import { StyledContainer } from "./style"

interface ContainerProps {
    children: React.ReactNode;
    direction?: string;
    justify?: string;
    align?: string;
    background?: string;
    width?: string;
    height?: string;
    border?: string;
    margin?: string;
}

const Container = ({ children, direction, justify, align, background, width, height, border, margin }: ContainerProps) => {
    return (
        <StyledContainer direction={direction} justify={justify} align={align} background={background} width={width} height={height} border={border} margin={margin}>
            {children}
        </StyledContainer>
    );
};

export default Container;