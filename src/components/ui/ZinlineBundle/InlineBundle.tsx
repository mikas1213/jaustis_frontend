import type { ReactNode, CSSProperties } from 'react';

type Justify = 'start' | 'center' | 'spaceBetween' | 'spaceEvenly' | 'end';
type Align = 'start' | 'center' | 'end';
type Wrap = 'wrap' | 'nowrap';

interface InlineBundleProps {
    children: ReactNode,
    justify?: Justify;
    align?: Align;
    wrap?: Wrap;
    gutter?: string
};

const justifyMap: Record<Justify, CSSProperties['justifyContent']> = {
    start: 'flex-start',
    center: 'center',
    spaceBetween: 'space-between',
    spaceEvenly: 'space-evenly',
    end: 'flex-end'
};

const alignMap: Record<Align, CSSProperties['alignItems']> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
};

const InlineBundle = ({ children, justify = 'start', align = 'start', wrap = 'wrap', gutter = '1rem'}: InlineBundleProps) => {

    const style: CSSProperties = {
        width: '800px',
        display: 'flex',
        flexWrap: wrap,
        justifyContent: justifyMap[justify],
        alignItems: alignMap[align],
        gap: gutter,
        backgroundColor: 'yellow',
        marginInlineStart: 'auto',
        marginInlineEnd: 'auto',
    };


    return (
        <div style={ style }>
            {children}
        </div>
    );
};

export default InlineBundle;