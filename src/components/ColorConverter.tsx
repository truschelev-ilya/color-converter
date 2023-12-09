import {useState} from 'react';
import styled from 'styled-components';

export const ColorConverter = () => {
    const [baseColor, setBaseColor] = useState('');
    const [targetColor, setTargetColor] = useState('');

    console.log(baseColor, 'baseColor');
    console.log(targetColor, 'targetColor');
    return (
        <ColorConverterContainer>
            <ColorContainer color={baseColor}>
                <label>
                    Select base color
                    <input type="color" value={baseColor} onChange={e => setBaseColor(e.target.value)} />
                </label>
            </ColorContainer>
            <ColorContainer color={targetColor}>
                <label>
                    Select target color
                    <input type="color" value={targetColor} onChange={e => setTargetColor(e.target.value)} />
                </label>
            </ColorContainer>
        </ColorConverterContainer>
    );
};

const ColorContainer = styled.div`
  display: flex;
  background: ${props => props.color};;
  width: 300px;
  height: 120px;
  padding: 16px;
`;

const ColorConverterContainer = styled.div`
  display: flex;
`;
