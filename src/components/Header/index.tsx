import { Header, LogoContainer, Logo, Title } from './style';

import logo  from '../../assets/album.png';


const HeaderComponent = () => {
    return (
        <Header>
            <LogoContainer>
                <Title>Record Vault</Title>
            </LogoContainer>
            <LogoContainer>
                <Logo src={logo} alt="logo" />
            </LogoContainer>
        </Header>
    );
};

export default HeaderComponent;