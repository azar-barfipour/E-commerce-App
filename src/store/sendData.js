// export const sendData = async (data) => {
export async function sendData(data) {
  console.log(data);
  try {
    const res = await fetch(
      "https://udemy-redux-99e3b-default-rtdb.firebaseio.com/newProducts.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data1 = await res.json();
    console.log(data1);
    if (!res.ok) {
      throw new Error("something went wrong");
    }
  } catch (err) {
    console.log(err.message);
  }
}
