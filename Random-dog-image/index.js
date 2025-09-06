import express from "express";
import axios from "axios";
import ejs from "ejs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public")); // სტილების ფაილებისთვის

app.get("/", async (req, res) => {
  try {
    const dogImageResponse = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    const dogFactResponse = await axios.get(
      "https://dog-api.kinduff.com/api/facts"
    );

    const dogImageUrl = dogImageResponse.data.message;
    const dogFact = dogFactResponse.data.facts[0];

    res.render("index", { dogImageUrl, dogFact });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.render("index", {
      dogImageUrl: null,
      dogFact: "ძაღლის ფაქტები ვერ მოიძებნა. სცადეთ მოგვიანებით.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
