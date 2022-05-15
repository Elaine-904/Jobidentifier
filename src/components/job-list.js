import React from "react";

export function JobList({jobList, onItemClick}){
    return(
        <ul>
            {jobList.map((entry) => (
            <li key={entry.id}>
                <button onClick={() => onItemClick(entry.id)}>{entry.name}</button>
            </li>
            ))}
        </ul>
    )
}