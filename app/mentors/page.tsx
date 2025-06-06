"use server"

import  React from "react";
import {NavBar} from "@/components/pageComponents/navbar";
import {MentorsDashboard} from "@/app/mentors/components/mentors";

export default async function MentorsPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <NavBar></NavBar>

      <MentorsDashboard></MentorsDashboard>

    </div>
  )
}
