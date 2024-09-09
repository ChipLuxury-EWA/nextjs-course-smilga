const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a ";

const sleep = async (ms) => await new Promise((r) => setTimeout(r, ms));

const Drinks = async () => {
  await sleep(2000);
  const response = await fetch(url);
  if (!response.ok) throw new Error("response not 200");

  const data = await response.json();
  console.log(data);
  return (
    <>
      <h1 className="text-5xl mb-8 font-bold">Drinks Page</h1>
    </>
  );
};
export default Drinks;
