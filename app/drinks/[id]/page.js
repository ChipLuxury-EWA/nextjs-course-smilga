import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const response = await fetch(url + id);
  if (!response.ok) throw new Error(`Failed to fetch data for drink id:${id} : ${response.status}`);
  const { drinks } = await response.json();
  return drinks[0];
};

const SingleDrinkPage = async ({ params }) => {
  const drinkData = await getSingleDrink(params.id);
  const { strDrink: title, strDrinkThumb } = drinkData;
  return (
    <div>
      <h1 className="text-4xl mb-8">{title}</h1>
      <Image priority className="w-48 h-48 rounded-lg shadow-lg mb-4" width={300} height={300} src={strDrinkThumb} alt={title} />
      <Link className="btn btn-primary mt-8 mb-12" href="/drinks">
        Back
      </Link>
    </div>
  );
};
export default SingleDrinkPage;
