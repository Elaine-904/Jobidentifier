import React,{Fragment, useContext} from "react";
import { JobList } from "./job-list";
import { useNames } from "../provider/names";
import { useAppState } from "../provider/app-state";

export function ShortList() {
  const names = useNames();
  const { shortList, setShortList } = useAppState();
    const shortListNames = names.filter(
        (entry)=> shortList.includes(entry.id)
    );
    function removeFromShortList(id){
        setShortList(shortList.filter((i)=>i!==id));
    }
    const hasNames = shortListNames.length > 0 
    return (
      <div className="short-list">
        <h2>{hasNames ?"Job Shortlist" :"Click on a job name to shortlist"}</h2>
        {hasNames && (
            <Fragment>
            <JobList jobList={shortListNames} onItemClick={removeFromShortList}/>
            <hr/>
            </Fragment>
        )}
      </div>
  );
}