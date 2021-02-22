import styled from 'styled-components';
import CheckboxLabel from './CheckboxLabel';

const Checkbox = styled.input`
display: none;
&:checked + ${CheckboxLabel} {
    border: 5px solid pink;
  }

`
export default Checkbox;
