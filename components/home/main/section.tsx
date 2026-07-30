import Link from "next/link"

export default function HomeSection() {
    return (
        <div className="h-screen" id="homesec">
            <h1>lola paw</h1>
            <Link href={"/food"} className="underline text-blue-500 hover:text-blue-600">food</Link>
        </div>
    )
}