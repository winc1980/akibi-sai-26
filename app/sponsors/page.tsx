import getMicroCmsData from "../microcms";

export default async function Page() {
  const data = await getMicroCmsData("constants");
  return (
    <div>
      <div>
        {data.sponsors_higher.map((sponsor) => (
          <img
            key={sponsor.url}
            src={sponsor.url}
            width={sponsor.width}
            height={sponsor.height}
            className=""
          />
        ))}
      </div>
      <div>
        {data.sponsors_normal.map((sponsor) => (
          <img
            key={sponsor.url}
            src={sponsor.url}
            width={sponsor.width}
            height={sponsor.height}
            className=""
          />
        ))}
      </div>
    </div>
  );
}
