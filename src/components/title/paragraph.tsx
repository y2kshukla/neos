const Text = ({ children, className, isSmall }: { children: React.ReactNode; className?: string; isSmall?: boolean }) => {
    return (
        <p className={`text-base 2xl:text-lg ${ isSmall && 'text-sm lg:text-base' } ${className}`}>{ children }</p>
    );
}
 
export default Text;