import style from './flexcontainer.module.scss';


type FlexContainerProps = {
    children: React.ReactNode;
    gap?: string;
    dir?: React.CSSProperties['flexDirection'];
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
    style?: React.CSSProperties;
};

export function FlexContainer ({children, gap, dir, align, justify, style: customStyle}: FlexContainerProps) {

    const _gap = gap ?? '8px';
    const _dir = dir ?? 'row';
    const _align = align ?? 'center';
    const _justify = justify ?? 'center';

    const local_style = { display: 'flex', gap: _gap, flexDirection: _dir, alignItems: _align, justifyContent: _justify, ...customStyle };

    return (

        <section style={local_style} className={style.flexcontainer}>
        {children}
        </section>
    )
}