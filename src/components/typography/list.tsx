const List = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return (
        <ul className={`text-sm xl:text-base ${className}`}>{children}</ul>
    );
}
 
export default List;