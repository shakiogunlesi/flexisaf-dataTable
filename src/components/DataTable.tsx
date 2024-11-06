import React, { useState } from 'react';
import Table from './Table';
import Checkbox from './Checkbox';
import Form from './Form';

const DataTable: React.FC = () => {
   const headers = ["Select", "Name", "Email"];
   const [rows, setRows] = useState<[string, string][]>([
      ["Tonny Lambo", "tonny@example.com"],
      ["Janet Okolie", "janet@example.com"],
   ]);

   // Function to handle adding new row data
   const addRow = (newRow: [string, string]) => {
      setRows((prevRows) => [...prevRows, newRow]); // Add new data to the rows state
   };

   // Render rows with Checkbox and data
   const renderRow = (row: string[]) => [
      <Checkbox label="" checked={false} onChange={() => {}} />,
      ...row.map((cell) => String(cell)) 
   ];

   return (
      <div>
         <Form onAddData={addRow} /> {/* Pass addRow to Form */}
         <Table headers={headers} rows={rows.map(renderRow)} />
      </div>
   );
};

export default DataTable;
