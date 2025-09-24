export const handler = async (event) => {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify(global.reviews || []),
    };
  }

  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);
    const review = { id: Date.now(), ...body };

    if (!global.reviews) global.reviews = [];
    global.reviews.unshift(review);

    return {
      statusCode: 200,
      body: JSON.stringify(review),
    };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
};
