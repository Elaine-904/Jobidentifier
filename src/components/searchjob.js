import React, {useEffect, useRef} from "react";
import { useAppState } from "../provider/app-state";

export function SearchJob(){
    const {searchValue, setSearchValue} = useAppState();
    const inputRef = useRef();

    useEffect (()=>{
        inputRef.current.focus();
    },[]);

    function handleChange(event){
        setSearchValue(event.target.value);
    }
    return(
        <header>
            <input 
            ref={inputRef}
            type="text" 
            placeholder="Type the job name...." 
            value={searchValue}
            onChange={handleChange}
            />

        </header>
    )
    }