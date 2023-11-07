import {create} from "zustand";
import {AdminStoreType} from "@/app/hooks/useAdminStore";

type userType = {
    users: any;
    setUsers: (value:any) => void;
}

export const useStore = create<userType>((set) => ({
    users: [],
    setUsers: (value: any) => set({users: value})
}));