import styled, { css } from 'styled-components';

const Badge = styled.div`
border-radius: 6px;
padding: 10px 15px; 
color: white;
font-size: 15px;
letter-spacing: 1px;
margin: 5px;
&:hover{
    filter: brightness(120%);
}
 ${props => props.continent === 'Africa' && css`
 background-color: ${props => props.theme.colors.yellow.dark};
`};
${props => props.continent === 'Asia' && css`
 background-color: ${props => props.theme.colors.purple.normal};
`};
${props => props.continent === 'Australia' && css`
 background-color: ${props => props.theme.colors.red.normal};
`};
${props => props.continent === 'Europe' && css`
 background-color: ${props => props.theme.colors.green.normal};
`};
${props => props.continent === 'North America' && css`
 background-color: ${props => props.theme.colors.blue.normal};
`};
${props => props.continent === 'South America' && css`
 background-color: ${props => props.theme.colors.orange.normal};
`};
&.active{
  background-color: ${props => props.theme.colors.grey.inactive};
}

`
export default Badge;