import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {hexToRGB} from '../utils';

export const ColorConverter = () => {
    const [baseColor, setBaseColor] = useState('');
    const [baseColorTitle, setBaseColorTitle] = useState('#213547');

    const [targetColor, setTargetColor] = useState('');
    const [targetColorTitle, setTargetColorTitle] = useState('#213547');

    const [hslDif, setHslDif] = useState('');

    useEffect(() => {
        const rgb = hexToRGB(baseColor);
        if (typeof rgb !== 'string' && rgb[0] < 120) {
            setBaseColorTitle('#ffffff');
        } else {
            setBaseColorTitle('#213547');
        }
    }, [baseColor]);

    useEffect(() => {
        const rgb = hexToRGB(targetColor);
        if (typeof rgb !== 'string' && rgb[0] < 120) {
            setTargetColorTitle('#ffffff');
        } else {
            setTargetColorTitle('#213547');
        }
    }, [targetColor]);

    return (
        <ColorConverterContainer>
            <ColorContainer key="baseColorContainer" background={baseColor} fontColor={baseColorTitle}>
                <Title>
                    <b>Select base color: </b>
                    <input type="color" value={baseColor} onChange={e => setBaseColor(e.target.value)} />
                </Title>
                {baseColor &&
                    <>
                        <span>Hex: {baseColor}</span>
                        <span>RGB: {hexToRGB(baseColor, true) || ''}</span>
                    </>
                }
            </ColorContainer>
            {hslDif &&
                <ColorContainer center>
                    <Title>HSL dif</Title>
                </ColorContainer>
            }
            <ColorContainer key="targetColorContainer" background={targetColor} fontColor={targetColorTitle}>
                <Title>
                    <b>Select target color: </b>
                    <input type="color" value={targetColor} onChange={e => setTargetColor(e.target.value)} />
                </Title>
                {targetColor &&
                    <>
                        <span>Hex: {targetColor}</span>
                        <span>RGB: {hexToRGB(targetColor, true) || ''}</span>
                    </>
                }
            </ColorContainer>
        </ColorConverterContainer>
    );
};

const Title = styled.h4`
  display: inline-flex;
  justify-content: space-between;
  margin: 12px 0;  
`;

const ColorContainer = styled.div<{background?: string, fontColor?: string, center?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center': ''};
  background: ${props => props.background};
  color: ${props => props.fontColor};
  min-width: 220px;
  padding: 16px;
  border-radius: 4px;
`;

const ColorConverterContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
