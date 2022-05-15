import React from "react";

import { JobList } from "./job-list";
import { useNames } from "../provider/names";
import { useAppState } from "../provider/app-state";

export function PickJob() {
  const names = useNames();
  const { searchValue, shortList, setShortList } = useAppState();

    const filterJobNames = names
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((entry) => !shortList.includes(entry.id));
  function addToShortList(id) {
    setShortList([...shortList, id]);
  }
    return <JobList jobList={filterJobNames } onItemClick={addToShortList}/>
    
}