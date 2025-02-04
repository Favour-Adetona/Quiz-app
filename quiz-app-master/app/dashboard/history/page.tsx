import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { mockHistory } from "@/lib/data";
import Link from "next/link";
import { Trophy } from "lucide-react";
import Layout from "@/components/layout";
import { cookies } from 'next/headers'
import HistoryCard from "@/components/HistoryCard";

export default async function Dashboard() {
  const cookiesStore = cookies()
  const token = cookiesStore.get('token')?.value
  const data = await fetch(`https://quiz-project-dpaw.onrender.com/api/profile/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    next: { tags: ['Profile'] }
  }).then((res) => res.json())
  const totalScore = data?.data?.total_points;
  const averageScore = data?.data?.average_score;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Progress</h2>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2 justify-between">
                  <Trophy className="w-5 h-5 text-green-500" />
                  <span>Novice</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span>Amateur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-red-500" />
                  <span>Master</span>
                </div>
              </div>
            </div>
            <Progress value={0.5} className="h-2" />
            <p className="text-sm text-gray-500 mt-2">
              Answer 20+ questions to get to amateur
            </p>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-2">Total Score</h3>
            <div className="text-3xl font-bold">
              {totalScore}
              <span className="text-sm font-normal">pts</span>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-2">Average Score</h3>
            <div className="text-3xl font-bold">
              {averageScore}
              <span className="text-sm font-normal">pts</span>
            </div>
          </Card>
        </div>

        <HistoryCard data={data?.data?.quiz_history} />
      </div>
    </Layout>
  );
}
