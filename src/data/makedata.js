import moment from 'moment'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const job = ["Data Analyst", "Data Information Architect"
  , "Data Governance Analyst"
  , "Reporting Analyst", "Statistical Data Analyst",
  "Reporting Analyst", "Technical Recruiter", "Data Analyst",
  "Decision Support Unit Data Analyst", "Statistical and Data Analyst", 
  "BI Developer", "Database Manager", "Security Engineers"]


const customerdetails = [
  "a",'b','c'
]

const newPerson = () => {
  const statusChance = Math.random()
  
  return {
    jobname: job[Math.floor(Math.random()*job.length)],
    createdate: moment(new Date(+(new Date()) - Math.floor(Math.random()*10000000000)))
    .format('MM/DD/YYYY'),
    status:
    statusChance > 0.66
        ? 'toprice'
        : statusChance > 0.33
        ? 'completed'
        : 'invoicing'
        ? 'active'
        :'scheduled',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

