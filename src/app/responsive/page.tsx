import Link from "next/link";
import Image from "next/image";

type myblogs = { title: string; description: string; pic: string; lnk: string };

const data: myblogs[] = [
  { title: "USA", description: "Two Day Tour", pic: "/usacover.jfif", lnk: "/usa" },
  { title: "UK", description: "at Seminar", pic: "/UK.jfif", lnk: "/uk" },
  { title: "Canada", description: "To Meet Relatives", pic: "/canada.jfif", lnk: "/canada" },
  { title: "Dubai", description: "at Training", pic: "/dubai.jfif", lnk: "/dubai" },
  { title: "Japan", description: "3 Day Tour", pic: "/japan.jfif", lnk: "/japan" },
  { title: "Islamabad", description: "at Training", pic: "/isb.jfif", lnk: "/isb" },
  { title: "Karachi", description: "at Seminar", pic: "/kchi.jfif", lnk: "/kchi" },
  { title: "Karachi", description: "at Training", pic: "/kchi1.jfif", lnk: "/kchi1" },
];

export default function Responsive() {
  return (
    <div className="parentContainer">
      {data.map((myblogs, index) => (
        <div key={index} className="childContainer bounce-in-right">
          <Image
            src={myblogs.pic}
            alt={myblogs.title}
            width={200}
            height={200} // Use explicit width and height
          />
          <h1 className="title">{myblogs.title}</h1>
          <p className="description">{myblogs.description}</p>
          <button className="readMore">
            <Link href={myblogs.lnk}>Read More</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
