import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { analytics } from "@/utils/analytics";

const Page = async() => {

    const pageviews = await analytics.retrieveDays("pageview", 2);
    const TRACKING_DAYS = 7;
    const totalPageviews = pageviews.reduce((acc, curr ) => {
        return (
            acc + curr.events.reduce((acc, curr) => {
                return acc + Object.values(curr)[0]!
            }, 0)
        )
    }, 0);

    const avgVisitorsPerDay = (totalPageviews / TRACKING_DAYS).toFixed(1)

    return(
        <div className="min-h-screen w-full py-12 flex justify-center items-center">
            <div className="relative w-full max-w-6xl mx-auto text-white">
                <AnalyticsDashboard avgVisitorsPerDay="" />
            </div>
        </div>
    )
}

export default Page;