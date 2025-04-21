import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-3">
        <div className="space-x-4">
            <Link href={"mailto:hamzaalituri5159@gmail.com"}>Email</Link>
            <Link href={"https://github.com/hamza2001-max/"}>Github</Link>
            <Link href={"https://www.linkedin.com/in/hamza-ali-9351a1350/"}>LinkedIn</Link>
        </div>
        <p>last update 22/04/2025 · from Peshawar 🌸 /Parachinar 🍁</p>
    </footer>
  )
}

export default Footer