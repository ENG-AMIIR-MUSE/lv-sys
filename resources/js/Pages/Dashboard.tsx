import Page from '@/Components/page'
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card'
import { Briefcase, Building, FileText, PieChart, Users, CheckCircle, Send } from 'lucide-react'
import React from 'react'

function Dashboard() {
  const exampleData = {
    users: 2,
    profiles: 2,
    companies: 1,
    jobs: 1,
    applications: 1,
    peopleApplied: 1,
    peopleGotJobs: 1,
  }

  const detailedData = [    
    { id: 1, name: 'John Doe', job: 'Software Engineer', status: 'Applied' },
    { id: 2, name: 'Jane Doe', job: 'Product Manager', status: 'Hired' },
  ]

  return (
    <div className="mx-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Users className="mr-2 h-6 w-6 text-gray-500" />
            <span>{exampleData.users}</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Profiles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <FileText className="mr-2 h-6 w-6 text-gray-500" />
            <span>{exampleData.profiles}</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Companies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Building className="mr-2 h-6 w-6 text-gray-500" />
            <span>{exampleData.companies}</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Briefcase className="mr-2 h-6 w-6 text-gray-500" />
            <span>{exampleData.jobs}</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <PieChart className="mr-2 h-6 w-6 text-gray-500" />
            <span>{exampleData.applications}</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>People Applied</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Send className="mr-2 h-6 w-6 text-gray-500" />
            <span>{exampleData.peopleApplied}</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>People Got Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <CheckCircle className="mr-2 h-6 w-6 text-gray-500" />
            <span>{exampleData.peopleGotJobs}</span>
          </div>
        </CardContent>
      </Card>
      <div className="col-span-2 lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>Detailed Information</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {detailedData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.job}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

Dashboard.layout = (page) => <Page children={page} />

export default Dashboard