
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json();

    if (!body.message) {
      return new Response(JSON.stringify({ error: 'Missing message field in request body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const keyword = body.message;
    const storefrontToken = "48b87a240214e118107782a78de8fc25";
    const domain = "tamweenat-alzekrayat.myshopify.com";

    const productRes = await fetch(`https://${domain}/api/2023-10/graphql.json`, {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token': storefrontToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          {
            products(first: 5, query: "${keyword}") {
              edges {
                node {
                  title
                  description
                  onlineStoreUrl
                  images(first: 1) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `
      })
    });

    const productData = await productRes.json();
    const products = productData?.data?.products?.edges || [];

    if (products.length === 0) {
      return new Response(JSON.stringify({ reply: "مافيش منتج واضح لسؤالك، ممكن توضّح أكتر؟" }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    const product = products[0].node;
    const productSummary = `
اسم المنتج: ${product.title}
الوصف: ${product.description}
الرابط: ${product.onlineStoreUrl}
الصورة: ${product.images.edges[0]?.node?.url || 'No image'}
`;

    const apiKey = process.env.OPENAI_KEY;

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "أنت مساعد مبيعات ظريف، بتقترح منتج مناسب من خلال البيانات المرسلة من Shopify" },
          { role: "user", content: `العميل كتب: ${keyword}\n المنتج المقترح له:\n ${productSummary}` }
        ],
        temperature: 0.7
      })
    });

    const data = await openaiRes.json();

    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
