import styled from 'styled-components';

export const TableContainer = styled.div`
color: white;
background-color: rgba(0, 0, 0, 0.5);
position: absolute;
z-index: 9999;
right: 0;
overflow: auto;
height: 100%;
&:hover {
  background-color: rgba(0, 0, 0);
}
`

export const BasicTable = styled.table`
`;

export const THead = styled.thead`
  color: #fff;
  letter-spacing: -0.18px;
  box-shadow: inset 0 -1px #CACBCE;
`;

export const TBody = styled.tbody``;

export const TH = styled.th`
`;

export const TR = styled.tr`
box-shadow: inset 0 -1px #CACBCE;
`;

export const TD = styled.td`
padding: 8px 16px;
`;
