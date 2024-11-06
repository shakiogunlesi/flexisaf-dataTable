import styled from 'styled-components';

type InputProps = {
   type?: string;
   placeholder?: string;
   value: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
   padding: 8px;
   border: 1px solid #ccc;
   border-radius: 4px;
   width: 100%;
`;

const Input: React.FC<InputProps> = ({ type = "text", placeholder, value, onChange }) => (
   <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
);

export default Input;
