import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

type FormProps = {
   onAddData: (newRow: [string, string]) => void; // Define the type of the function
};

const Form: React.FC<FormProps> = ({ onAddData }) => {
   const [formData, setFormData] = useState({ name: "", email: "" });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Call the onAddData function to pass the data to DataTable
      onAddData([formData.name, formData.email]);
      setFormData({ name: "", email: "" }); // Optionally clear the form after submit
   };

   return (
      <form onSubmit={handleSubmit}>
         <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
         />
         <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
         />
         <Button onClick={handleSubmit} label="Submit" />
      </form>
   );
};

export default Form;
