"use client"
import {useAdminStore, AdminStoreType} from "@/app/hooks/useAdminStore";

export default function Home() {
  const { isAdmin } : AdminStoreType = useAdminStore()
  return (
    <main className={'p-6'}>
      {isAdmin ? "hello" : "noooo"}
    </main>
  )
}
