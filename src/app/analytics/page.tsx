import { analytics } from "@/utils/analytics";

const Page = async() => {

    const pageview = await analytics.retrieve("pageview", "11/02/2024")

    return(
        <div>
            <pre className="text-white">{JSON.stringify(pageview)}</pre>
        </div>
    )
}

export default Page;