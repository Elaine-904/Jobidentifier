import React, {Component} from 'react'

export default ({data, filterInput})=>
{
        const {data, filterInput} = this.props;

        const jobnamesLists = data
            .filter(name =>{
                // remove job names not match filter input
                return jobnamesLists.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            })
            .map(name =>{
            return(
                <li key={name.id} className={name.createdate}>{name.name}</li>
            )
        })
        return(
            <div>
                <p> filter input: {this.props.filterInput}</p>
                <ul>
                    {jobnamesLists}
                </ul>
            </div>
        );
    }

