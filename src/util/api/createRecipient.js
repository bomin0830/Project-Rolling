

export async function createRecipient(name, backgroundColor, backgroundImageURL) {
	const response = await fetch(
	  "https://rolling-api.vercel.app/5-8/recipients/",
	  {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({ name, backgroundColor, backgroundImageURL }),
	  }
	);
	if (!response.ok) {
	  throw new Error("Error creating recipient");
	}
	return await response.json();
  }