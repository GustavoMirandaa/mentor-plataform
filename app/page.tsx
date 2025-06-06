import {QuickActions} from "@/components/pageComponents/quick-actions";
import {TopMentors} from "@/components/pageComponents/top-mentors";
import {StatCard} from "@/components/pageComponents/stats-cards";
import {NavBar} from "@/components/pageComponents/navbar";
import {RecentProjects} from "@/components/pageComponents/recent-projects";


export default async function Dashboard() {

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <NavBar></NavBar>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


                {/* Stats Grid */}
                <StatCard></StatCard>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Projects */}
                    <RecentProjects></RecentProjects>
                    {/* Top Mentors */}
                    <TopMentors></TopMentors>
                </div>
                {/* Quick Actions */}
                <QuickActions></QuickActions>
            </main>
        </div>
    )
}
