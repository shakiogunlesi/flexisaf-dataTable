import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

interface FormData {
   name: string;
   email: string;
}

const Form: React.FC<{ onAddData: (data: [string, string]) => void }> = ({ onAddData }) => {
   const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Pass the form data as a tuple to onAddData
      onAddData([formData.name, formData.email]);
      setFormData({ name: '', email: '' }); // Optionally clear form after submission
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
         <Button onClick={handleSubmit} label="Submit" disabled={!formData.name || !formData.email} />
      </form>
   );
};

export default Form;
