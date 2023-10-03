import { SearchbarContainer, SearchbarInput, SearchbarButton, ButtonIcon } from './style';

type SearchbarProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    value?: string;
    icon: string;
};

const Searchbar = (props: SearchbarProps) => {

    return (
        <SearchbarContainer>
            <SearchbarInput onChange={props.onChange} value={props.value} placeholder="Search for an album..." />
            <SearchbarButton onClick={props.onClick}>
                <ButtonIcon src={props.icon} alt="search" />
            </SearchbarButton>
        </SearchbarContainer>
    );
};

export default Searchbar;