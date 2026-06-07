import { getCompanyId } from '@/lib/api/jobs';
import React from 'react';

const RecuriterJobs =async () => {
    const companyId = "company_123"; // Replace with actual company ID
    const jobs = await getCompanyId(companyId);
    console.log("Jobs for company:", jobs);
    return (
        <div>
          <h2 className="text-4xl">Recruiter Jobs Page</h2>  
        </div>
    );
};

export default RecuriterJobs;