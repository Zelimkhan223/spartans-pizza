import css from './Button.module.css';

function Button({ title, variant, ...props }) {
    return (
        <button
        {...props}
            className={`
            ${css.wrapper}
            ${variant === 'secondery' ? css.secondery : ''}  
            ${variant === 'disabled' ? css.disabled : ''} `}
        >
            {title}
        </button>
    )
}

export default Button;