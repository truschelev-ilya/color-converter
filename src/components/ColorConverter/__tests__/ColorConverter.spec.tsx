import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import {ColorConverter} from '../index.tsx';

describe('Color Converter', () => {
    it('base color block renders', () => {
        render(<ColorConverter />);
        expect(screen.getByLabelText('Select base color:')).toBeInTheDocument();
    });
    it('target color block renders', () => {
        render(<ColorConverter />);
        expect(screen.getByLabelText('Select target color:')).toBeInTheDocument();
    });
    it('hsl dif color block shouldn\'t renders', () => {
        render(<ColorConverter />);
        expect(screen.queryByText('HSL dif')).not.toBeInTheDocument();
    });
    it('hsl dif color block shouldn renders when target and base colors exist', () => {
        render(<ColorConverter />);

        const baseColorPickerInput = screen.getByLabelText('Select base color:');
        const targetColorPickerInput = screen.getByLabelText('Select target color:');

        fireEvent.input(baseColorPickerInput, {target: {value: '#333333'}});
        expect(screen.queryByText('HSL dif')).not.toBeInTheDocument();
        fireEvent.input(targetColorPickerInput, {target: {value: '#444444'}});

        expect(screen.getByText('HSL dif')).toBeInTheDocument();
    });
    it('base color picker change value and bg-color', () => {
        render(<ColorConverter />);

        const colorPickerInput = screen.getByLabelText('Select base color:');
        fireEvent.input(colorPickerInput, {target: {value: '#333333'}});

        expect(colorPickerInput).toHaveValue('#333333');
    });
    it('base color change style', () => {
        render(<ColorConverter />);

        const colorPickerInput = screen.getByLabelText('Select base color:');
        fireEvent.input(colorPickerInput, {target: {value: '#333333'}});

        expect(colorPickerInput.closest('div')).toHaveStyle('background: #333333');
    });

    it('target color picker change value and bg-color', () => {
        render(<ColorConverter />);

        const colorPickerInput = screen.getByLabelText('Select target color:');
        fireEvent.input(colorPickerInput, {target: {value: '#333333'}});

        expect(colorPickerInput).toHaveValue('#333333');
    });
    it('target color change style', () => {
        render(<ColorConverter />);

        const colorPickerInput = screen.getByLabelText('Select target color:');
        fireEvent.input(colorPickerInput, {target: {value: '#333333'}});

        expect(colorPickerInput.closest('div')).toHaveStyle('background: #333333');
    });
});