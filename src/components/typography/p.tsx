const P = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return (
        <p className={`text-base sm:text-lg md:text-xl lg:text-xl ${className}`}>{children}</p>
    );
}
 
export default P;