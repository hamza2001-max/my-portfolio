export default function Navigation({ title, isFixed }: { title: string, isFixed: boolean }) {
    return (
        <div>
            <div className={`${isFixed ? "fixed h-auto" : "relative h-0"} transition-all duration-200 delay-75 font-semibold lg:hidden ${isFixed && "w-full top-0 left-0 backdrop-blur-sm py-5 px-6 md:px-10"}`}>
                {title}
            </div>
            <div className={`${isFixed ? "block" : "hidden"} lg:hidden font-semibold`}>{title}</div>
        </div>
    )
}
