import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import App from '../App.tsx';

describe('App', () => {
    it('should renders', () => {
        render(<App />);
        expect(screen.getByText('Convert colors and find HSL difference')).toBeInTheDocument();
    });
});