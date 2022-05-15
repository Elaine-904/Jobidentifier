import { useAppState } from "../provider/app-state";
import React from "react";

export function ResetSearch() {
  const { searchValue, setSearchValue }= useAppState();
  if (!searchValue) {
    return null;
  }
  return (
    <button onClick={() => setSearchValue("")} className="reset-search">
      reset search
    </button>
  );
}