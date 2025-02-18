import React from 'react'

const Recruiter = () => {
  return (
    <div className='createjob'>
        <form>
            <label>Role</label>
            <input placeholder='Enter job role' />
            <label>Salary</label>
            <input placeholder='Enter monthly salary' />
            <label>Company Name</label>
            <input placeholder='Enter company name' />
            <label>Work mode</label>
            <select>
                <option>Work from home</option>    
                <option>On-site</option>    
                <option>Hybrid</option>
            </select>            
        </form>
        <button>
            <a href='/'>Add job</a>
        </button>
    </div>
  )
}

export default Recruiter