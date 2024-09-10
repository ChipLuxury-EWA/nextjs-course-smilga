import DrinkList from "./_components/DrinkList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a ";

const sleep = async (ms) => await new Promise((r) => setTimeout(r, ms));

const Drinks = async () => {
  await sleep(2000);
  const response = await fetch(url);
  if (!response.ok) throw new Error("response not 200");

  const data = await response.json();
  return (
    <>
      <DrinkList drinks={data.drinks} />
    </>
  );
};
export default Drinks;
