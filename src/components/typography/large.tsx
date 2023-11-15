const Large = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return (
        <p className={`text-lg font-semibold ${className}`}>{children}</p>
    );
}
 
export default Large;