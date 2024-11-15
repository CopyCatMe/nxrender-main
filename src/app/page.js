import Link from 'next/link'


export default async function Home() {

    return (
        <main className="text-left grid place-content-center gap-10" >
            <div>
                <h3 className='text-2xl'>EJEMPLO 1</h3>
                <ul className="list-none">
                    <li>
                        <Link href="/csr/ejemplo1.html" className="text-blue-500 hover:underline">CSR Javascript</Link>
                    </li>
                    <li>
                        <Link href="/csr/ejemplo1" className="text-blue-500 hover:underline">CSR React</Link>
                    </li>
                    <li>
                        <Link href="/ssr/ejemplo1" className="text-blue-500 hover:underline">SSR Next</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl'>EJEMPLO 2</h3>
                <ul>
                    <li>
                        <Link href="/csr/ejemplo2.html" className="text-blue-500 hover:underline">CSR Javascript</Link>
                    </li>
                    <li>
                        <Link href="/csr/ejemplo2" className="text-blue-500 hover:underline">CSR React</Link>
                    </li>
                    <li>
                        <Link href="/ssr/ejemplo2" className="text-blue-500 hover:underline">SSR Next</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl'>EJEMPLO 3</h3>
                <ul>
                    <li>
                        <Link href="/csr/ejemplo3.html" className="text-blue-500 hover:underline">CSR Javascript</Link>
                    </li>
                    <li>
                        <Link href="/csr/ejemplo3" className="text-blue-500 hover:underline">CSR React</Link>
                    </li>
                    <li>
                        <Link href="/ssr/ejemplo3" className="text-blue-500 hover:underline">SSR Next</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl'>EJEMPLO 4</h3>
                <ul>
                    <li>
                        <Link href="/csr/ejemplo4.html" className="text-blue-500 hover:underline">CSR Javascript</Link>
                    </li>
                    <li>
                        <Link href="/csr/ejemplo4" className="text-blue-500 hover:underline">CSR React</Link>
                    </li>
                    <li>
                        <Link href="/ssr/ejemplo4" className="text-blue-500 hover:underline">SSR Next</Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}
