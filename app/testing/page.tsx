import getMicroCmsData from "@/lib/microcms";

export default async function TestingPage() {
    const data = await getMicroCmsData("events")
    const groupedBy = Object.entries( Object.groupBy(data.map(d => d.place === undefined ? {...d, place: "all_day"} : d), r => r.place!));
    return <pre className="m-10 z-10 bg-white">{JSON.stringify(groupedBy, null, 2)}</pre>
}