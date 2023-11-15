const H4 = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return (
        <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>{children}</h4>
    );
}
 
export default H4;