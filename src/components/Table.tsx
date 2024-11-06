import styled from 'styled-components';

type TableProps = {
   headers: string[];
   rows: string[][];
};

const StyledTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   th, td {
      border: 1px solid #ddd;
      padding: 8px;
   }
   th {
      background-color: #f4f4f4;
      font-weight: bold;
   }
`;

const Table: React.FC<TableProps> = ({ headers, rows }) => (
   <StyledTable>
      <thead>
         <tr>
            {headers.map((header, index) => <th key={index}>{header}</th>)}
         </tr>
      </thead>
      <tbody>
         {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
               {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
         ))}
      </tbody>
   </StyledTable>
);

export default Table;
