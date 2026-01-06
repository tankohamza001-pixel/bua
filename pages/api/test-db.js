import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();  // connect to MongoDB
    res.status(200).json({ message: "MongoDB Connected Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
