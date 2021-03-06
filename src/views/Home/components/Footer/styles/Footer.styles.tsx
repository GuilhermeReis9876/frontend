import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex: 1;
  background: #024430;
  align-items: flex-end;
`;

export const FooterBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  text-transform: uppercase;
  background: #00a85a;
  font-size: .8rem;
  padding-top: 20px;
  padding-bottom: 20px;

  @media(max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
  }
`;
