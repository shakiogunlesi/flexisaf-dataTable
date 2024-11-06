import styled from 'styled-components';

type CheckboxProps = {
   label: string;
   checked: boolean;
   onChange: () => void;
};

const StyledCheckbox = styled.input`
   margin-right: 8px;
`;

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
   <label>
      <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
      {label}
   </label>
);

export default Checkbox;
