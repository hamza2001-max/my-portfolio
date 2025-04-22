import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-3 lg:py-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-between border-t-2 border-black">
        <div className="space-x-4">
            <Link href={"mailto:hamzaalituri5159@gmail.com"}>Email</Link>
            <Link href={"https://github.com/hamza2001-max/"}>Github</Link>
            <Link href={"https://www.linkedin.com/in/hamza-ali-9351a1350/"}>LinkedIn</Link>
        </div>
        <p>last update 22/04/2025 · from Peshawar 🌸</p>
    </footer>
  )
}

export default Footer