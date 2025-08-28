import React from 'react';

const paddingVariants = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
};

const variantStyles = {
    default: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    light: 'bg-gray-50 text-gray-900'
};

export const SectionContainer = ({
    children,
    className = '',
    variant = 'default',
    container = true,
    padding = 'lg',
    id,
    ...props
}) => {
    const classes = `${paddingVariants[padding]} ${variantStyles[variant]} ${className}`;

    return (
        <section id={id} className={classes} {...props}>
            {container ? (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};