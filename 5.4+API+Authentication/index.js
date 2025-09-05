import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// API-ის საბაზისო მისამართი
const API_URL = "https://secrets-api.appbrewery.com/";

// TODO 1: შეავსეთ თქვენი მონაცემები ავტორიზაციის 3 ტიპისთვის.
const yourUsername = ""; // თქვენი მომხმარებლის სახელი
const yourPassword = ""; // თქვენი პაროლი
const yourAPIKey = ""; // თქვენი API გასაღები
const yourBearerToken = ""; // თქვენი Bearer ტოკენი

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

// ენდფოინთი, რომელიც არ საჭიროებს ავტორიზაციას
app.get("/noAuth", async (req, res) => {
  // TODO 2: გამოიყენეთ axios, რომ გამოიძახოთ /random ენდფოინთი
  try {
    const result = await axios.get(API_URL + "/random");
    // მიღებული მონაცემები გადაეცით EJS ფაილს "content" ცვლადში
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// ენდფოინთი Basic Auth-ისთვის
app.get("/basicAuth", async (req, res) => {
  // TODO 3: გამოიძახეთ /all ენდფოინთი Basic Auth-ის გამოყენებით
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// ენდფოინთი API Key-სთვის
app.get("/apiKey", async (req, res) => {
  // TODO 4: გამოიძახეთ /filter ენდფოინთი და გაფილტრეთ 5-ზე მაღალი ქულით
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// ენდფოინთი Bearer Token-ისთვის
app.get("/bearerToken", async (req, res) => {
  // TODO 5: გამოიძახეთ /secrets/{id} ენდფოინთი და მიიღეთ საიდუმლო id 42-ით
  try {
    const result = await axios.get(API_URL + "/secrets/42", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
