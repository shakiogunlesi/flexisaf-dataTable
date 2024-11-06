import styled from 'styled-components';

type ButtonProps = {
   onClick: () => void;
   label: string;
   disabled?: boolean;
};

const StyledButton = styled.button`
   padding: 8px 16px;
   background-color: #007bff;
   color: #fff;
   border: none;
   border-radius: 4px;
   cursor: pointer;
   &:disabled {
      background-color: #ddd;
      cursor: not-allowed;
   }
`;

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled }) => (
   <StyledButton onClick={onClick} disabled={disabled}>{label}</StyledButton>
);

export default Button;
