export default function Navigation({ title, display }: { title: string, display: string }) {
    return (
        <div>

            <div className={`${display} transition-all duration-200 delay-75 font-semibold lg:hidden ${display === "fixed" && "w-full top-0 left-0 backdrop-blur-sm py-5 px-6 md:px-10"}`}>
                {title}
            </div>
            <div className={`${display==="fixed" ? "block": "hidden"}`}>{title}</div>
        </div>
    )
}
