import {fetchUrls} from "@/app/_actions/url-service";
import UrlCard from "@/app/_components/url/url-card";

export default async function UrlSection() {

  const fetchedUrls = await fetchUrls()

  return (
    <div className={"grid grid-cols-3 gap-5 container mx-auto"}>
      {
        fetchedUrls.map((url) => {
          return (<UrlCard key={url.id} id={url.id} originalUrl={url.originalLink}/>)
        })
      }
    </div>
  )
}