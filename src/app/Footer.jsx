import Link from "next/link";


export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full py-4 border-t">
            <div className="flex items-center space-x-4">
                <nav className="flex items-center space-x-4">
                    {/*<Link className="font-medium" href="#">*/}
                    {/*    Terms*/}
                    {/*</Link>*/}
                    {/*<Link className="font-medium" href="#">*/}
                    {/*    Privacy*/}
                    {/*</Link>*/}
                    {/*<Link className="font-medium" href="#">*/}
                    {/*    Contact*/}
                    {/*</Link>*/}
                    <p>Made with ❤️ by GDSC️</p>
                </nav>
                {/*<div className="flex items-center space-x-2">*/}
                {/*    <Link className="text-2xl font-bold" href="#">*/}
                {/*        Forum*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </footer>
    )
}