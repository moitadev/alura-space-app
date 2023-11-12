import styled from "styled-components"

const StyledItem = styled.li`
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;
    color: ${ props => props.$active ? '#7b78e5' : '#d9d9d9'};
    font-family: ${ props => props.$active ? 'Gandhi Sans Bold' : 'Gandhi Sans Regular'};
    display: flex;
    align-items: center;
    gap: 22px;
    &:hover{
        
    }
`

const NavItem = ({ children, activeIcon, disabledIcon, active = false }) => {
    return (
        <StyledItem $active={active}>
            <img src={active ? activeIcon : disabledIcon} alt="" />
            {children}
        </StyledItem>
    )
}

export default NavItem
