import { create } from "zustand";

type MintStore = {
  open: boolean;
  setOpen: (state: boolean) => void;
};

const defaultState = {
  open: false,
};

const useMintStore = create<MintStore>(
  (set): MintStore => ({
    ...defaultState,
    setOpen: (open) => set((state) => ({ open })),
  })
);

export default useMintStore;
