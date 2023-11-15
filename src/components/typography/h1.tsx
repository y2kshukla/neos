const H1 = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return (
        <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${className}`}>{children}</h1>
    );
}
 
export default H1;