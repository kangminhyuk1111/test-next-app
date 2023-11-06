import create from "zustand";

export type AdminStoreType = {
    isAdmin: boolean;
    setAdmin: (value: boolean) => void;
};

export const useAdminStore = create<AdminStoreType>((set) => ({
    isAdmin: true,
    setAdmin: (value: boolean) => set({ isAdmin: value }),
}));
