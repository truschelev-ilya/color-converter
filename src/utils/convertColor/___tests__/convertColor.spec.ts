import {hexToRGB, hexToHSL, getHSLDif} from '../index.ts';

describe('Color converter utils', () => {
    it('convert hex to RGB', () => {
        expect(hexToRGB('#a72f2f')).toStrictEqual([167, 47, 47]);
        expect(hexToRGB('#A72F2F')).toStrictEqual([167, 47, 47]);
        expect(hexToRGB('#a72f2f', true)).toStrictEqual('rgb(167, 47, 47)');
        expect(hexToRGB('#zzz2f')).toStrictEqual([0, 0, 0]);
        expect(hexToRGB('#ZZZ2f')).toStrictEqual([0, 0, 0]);
        expect(hexToRGB('#ZZZ2f', true)).toStrictEqual('rgb(0, 0, 0)');

    });
    it('convert hex to HSL', () => {
        expect(hexToHSL('#a72f2f')).toStrictEqual([0, 57, 42]);
        expect(hexToHSL('#A72F2F')).toStrictEqual([0, 57, 42]);
        expect(hexToHSL('#zzz2f')).toStrictEqual([0, 0, 0]);
        expect(hexToHSL('#ZZZ2f')).toStrictEqual([0, 0, 0]);
        expect(hexToHSL('#a72f2f', true)).toStrictEqual('hsl(0, 57%, 42%)');
    });
    it('convert hex to HSL', () => {
        expect(getHSLDif('#a72f2f', '#ffffff')).toStrictEqual('s(-57%)l(+58%)');
        expect(getHSLDif('#A72F2F', '#FFFFFF')).toStrictEqual('s(-57%)l(+58%)');
        expect(getHSLDif('#a72f2f', '#4f8192')).toStrictEqual('h(+196)s(-27%)l(+3%)');
    });
});