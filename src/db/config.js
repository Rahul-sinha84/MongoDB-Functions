import mongoose from "mongoose";

(async () => {
  await mongoose
    .connect("mongodb://localhost/mulesoft", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((_) => console.log("DB is connected !!"))
    .catch((err) => console.log(err));
})();
