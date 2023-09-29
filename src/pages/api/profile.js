export default async function handler(req, res) {
  try {
    let option;
    if (req.method === "GET") {
      const response = await fetch("http://127.0.0.1:3006/profile", {
        method: req.method, // or 'POST', 'PUT', etc.
        headers: req.headers, // Use the modified request headers
      });

      if (!response.ok) {
        throw new Error("Token not valid");
      }

      const data = await response.json();
      res.status(200).json(data);
    }
    if (req.method === "PUT") {
      const response = await fetch("http://127.0.0.1:3006/profile", {
        method: req.method, // or 'POST', 'PUT', etc.
        headers: req.headers,
        body: JSON.stringify(req.body), // Use the modified request headers
      });

      if (!response.ok) {
        throw new Error("Token not valid");
      }

      const data = await response.json();
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
