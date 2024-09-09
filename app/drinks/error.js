"use client";

const error = (e) => {
  console.error(e);
  return (
    <div className="flex flex-col justify-center items-center join">
      <h6>Error getting your drinks, sorry</h6>
      <p>{e.error.message}</p>
    </div>
  );
};
export default error;
