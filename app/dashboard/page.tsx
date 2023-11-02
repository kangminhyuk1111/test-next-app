import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Page() {
    return (
        <div className={'p-4'}>
            <p>Dashboard Page</p>
            <Link href={'/dashboard/customers'}>CUSTOMERS</Link> <br/>
            <Link href={'/dashboard/invoices'}>INVOICES</Link>
        </div>
    )

}