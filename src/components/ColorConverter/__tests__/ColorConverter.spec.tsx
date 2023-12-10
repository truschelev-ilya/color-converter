import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
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
    it('hsl dif color block should\'t renders', () => {
        render(<ColorConverter />);
        expect(screen.queryByLabelText('HSL dif:')).not.toBeInTheDocument();
    });
});