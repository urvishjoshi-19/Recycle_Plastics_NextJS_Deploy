const { Configuration, OpenAIApi } = require("openai");
import type { NextApiRequest, NextApiResponse } from "next";

// Initialize OpenAI API client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Request method:", req.method); // Log the request method

  if (req.method === "POST") {
    const { message } = req.body;
    console.log("Received message:", message); // Log the received message

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Use the latest model
        messages: [
          { role: "system", content: "You are EcoAI, a helpful assistant specializing in waste management. Be friendly and informative." },
          { role: "user", content: message }
        ],
        max_tokens: 200,
      });

      console.log("OpenAI API response:", response.data); // Log the full response from OpenAI

      res.status(200).json({ reply: response.data.choices[0].message.content.trim() });
    } catch (error) {
      console.error("OpenAI API error:", error); // Log any errors from OpenAI API
      res.status(500).json({ error: "Failed to fetch response" });
    }
  } else {
    console.warn("Invalid request method:", req.method); // Log if the method is not POST
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
