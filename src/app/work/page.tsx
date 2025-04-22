import Link from "next/link";

const page = () => {
  return (
    <section className="my-5">
      <h3 className="mb-10 text-lg">This page list all of my notable work.</h3>
      <div className="space-y-8 w-fit">

      <div>
        <h5 className="font-medium">Innovative Marketing Services</h5>
        <p>Helped an NGO digitize their mission through a website.</p>
      </div>
        <div>
      <Link href={"https://www.npmjs.com/package/tiptap-slash-react?activeTab=readme"} target="_blank">

        <h5 className="font-medium">TipTap Slash React</h5>
        <p>A slash extension for react developers who are working with tiptap.</p>
      </Link>
        </div>
        <div>

      <Link href={"https://www.npmjs.com/package/tiptap-slash-react?activeTab=readme"} target="_blank">
        <h5 className="font-medium">TipTap Bubble AI React</h5>
        <p>A free version of the TipTap Bubble AI extension.</p>
      </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
