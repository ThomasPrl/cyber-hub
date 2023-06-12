import SixG from "./SixG";
import TableOfContents, { Heading } from "./TableOfContents";
import TableOfContentsMobile from "./TableOfContentsMobile";
// import TableOfContentsMobile from "./TableOfContentsMobile";

const Article = () => {
  //for now we use manual data
    const headingsData: Heading[] = [
      {
        level: 2,
        text: "What is 6G ?",
        id: "first",
      },
      {
        level: 2,
        text: "Security issues in 6G",
        id: "second",
      },
      {
        level: 3,
        id: "second-sub1",
        text: "Evolution of architecture",
      },
      {
        level: 4,
        id: "second-subsub1",
        text: "1G",
      },
      {
        level: 4,
        id: "second-subsub2",
        text: "2G-3G",
      },
      {
        level: 4,
        id: "second-subsub3",
        text: "4G",
      },
      {
        level: 4,
        id: "second-subsub4",
        text: "5G",
      },
      {
        level: 3,
        id: "second-sub2",
        text: "Deployments",
      },
      {
        level: 2,
        text: "Security in the connection layer",
        id: "third",
      },
      {
        level: 2,
        text: "Security in the service layer",
        id: "fourth",
      },
      {
        level: 2,
        text: "Artificial intelligence's impact on 6G security",
        id: "fifth",
      },
  ];
  return (
    <div className="container max-w-7xl">
      <div className="grid grid-cols-12 gap-4">
        <main className="col-span-12 lg:col-span-8">
          <SixG />
        </main>
        <div className="hidden lg:block col-span-4 ">
          <div className="sticky top-0 ml-auto"
          style={{ float: "right", maxWidth: "300px" }}>
              <TableOfContents headings={headingsData} />
          </div>
        </div>
        {/* <TableOfContentsMobile headings={headingsData} /> */}
      </div>
    </div>
  );
};

export default Article;