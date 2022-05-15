import React,{Fragment} from "react";
import {PickJob} from './components/pickjob';
import {SearchJob} from './components/searchjob';
import {ShortList} from './components/short-list';
import {ResetSearch} from './components/reset-search';
import {Footer} from './components/Footer';
import DatatablePage from "./components/DataTable";


function App() {

  return (  
    <Fragment>
      <main>
        <SearchJob />
        <NamesContainer />
        <DatatablePage/>
      </main>
      <Footer/>
    </Fragment>
    
  );
}

function NamesContainer() {
  return (
    <main>
      
        <ShortList />
        <PickJob />
        <ResetSearch/>
    </main>
  );
}

export default App;