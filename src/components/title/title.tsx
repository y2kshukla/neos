const Title = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return (
        <h1 className={`text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${className}`}>{children}</h1>
    );
}
 
export default Title;