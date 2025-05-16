import Card from "./Card";

const Collection = ({ services }) => {
  return (
    <section className="wrapper my-8">
      <h2 className="h2-bold text-center mb-12">Services</h2>
      <div className="flex flex-col items-center">
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {services.map((service, index) => (
            <li key={index} className="flex justify-center">
              <Card service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Collection;