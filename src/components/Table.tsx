import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
   width: 100%;
   border-collapse: collapse;
`;

const Th = styled.th`
   background-color: #f4f4f4;
   padding: 12px;
   text-align: left;
   border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
   padding: 12px;
   border-bottom: 1px solid #ddd;
`;

// Define the expected prop types for the Table component
type TableProps = {
   headers: string[];
   rows: (string | JSX.Element)[][];
};

const TableComponent: React.FC<TableProps> = ({ headers, rows }) => (
   <Table>
      <thead>
         <tr>
            {headers.map((header, index) => (
               <Th key={index}>{header}</Th>
            ))}
         </tr>
      </thead>
      <tbody>
         {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
               {row.map((cell, cellIndex) => (
                  <Td key={cellIndex}>{cell}</Td>
               ))}
            </tr>
         ))}
      </tbody>
   </Table>
);

export default TableComponent;
