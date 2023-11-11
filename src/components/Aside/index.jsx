import styled from 'styled-components';
import NavItem from './NavItem';

const StyledUnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Aside = () => {
  return (
    <aside>
      <nav>
        <StyledUnorderedList>
          <NavItem
            activeIcon="/public/icones/home-ativo.png"
            disabledIcon="/public/icones/home-inativo.png"
            active={true}
          >
            Início
          </NavItem>
          <NavItem
            activeIcon="/public/icones/mais-vistas-ativo.png"
            disabledIcon="/public/icones/mais-vistas-inativo.png"
          >
            Mais vistas
          </NavItem>
          <NavItem
            activeIcon="/public/icones/mais-curtidas-ativo.png"
            disabledIcon="/public/icones/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </NavItem>
          <NavItem
            activeIcon="/public/icones/novas-ativo.png"
            disabledIcon="/public/icones/novas-inativo.png"
          >
            Novas
          </NavItem>
          <NavItem
            activeIcon="/public/icones/surpreenda-me-ativo.png"
            disabledIcon="/public/icones/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </NavItem>
        </StyledUnorderedList>
      </nav>
    </aside>
  );
};

export default Aside;
