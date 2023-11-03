import Link from "next/link";
export default function Page(): JSX.Element{
    return (
        <div className={'p-4'}>
            <p>Dashboard Page</p>
            <Link href={'/dashboard/customers'}>CUSTOMERS</Link> <br/>
            <Link href={'/dashboard/invoices'}>INVOICES</Link>
        </div>
    )
}