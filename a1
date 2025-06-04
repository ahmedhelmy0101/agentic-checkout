
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const body = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "أنت مساعد مبيعات ظريف ومضحك بتساعد الناس يختاروا بين بطاطس عمان أو شيبسي ليز." },
        { role: "user", content: body.message }
      ],
      temperature: 0.7
    })
  });

  const data = await response.json();
  return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
    headers: { "Content-Type": "application/json" }
  });
}
