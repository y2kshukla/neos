const SubTitle = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return (
        <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-semibold ${className}`}>{children}</h2>
    );
}
 
export default SubTitle;