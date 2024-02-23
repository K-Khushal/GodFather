import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b lg:p-4 xl:p-6">
            <div className="flex items-center space-x-4">
                <Link className="flex items-center space-x-2" href="/">
                    <FlagIcon className="w-8 h-8" />
                    <span className="text-xl font-bold">Forum</span>
                </Link>
            </div>
            <nav className="hidden space-x-4 lg:flex">
                <Link className="font-medium" href="/">
                    Home
                </Link>
                <Link className="font-medium" href="/forum">
                    Forum
                </Link>
                <Link className="font-medium" href="/about">
                    About
                </Link>
            </nav>
            <div className="flex items-center space-x-4">
                <div>
                    <div className="p-2 rounded-full">
                        <UsersIcon className="w-8 h-8" />
                    </div>
                    <div className="mt-2 w-48 p-0 border-0 shadow-lg">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </header>
    )
}

function FlagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}

function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
