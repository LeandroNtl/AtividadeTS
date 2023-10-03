import Main from './style';

type MainProps = {
    children: React.ReactNode;
};

const MainComponent = ({ children }: MainProps) => {

    return (
        <Main>
            {children}
        </Main>
    );
};

export default MainComponent;