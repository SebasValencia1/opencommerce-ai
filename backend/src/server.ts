import app from "./app";
import confgApp from "./config/config";
import connectDB from "./config/db";

const PORT = confgApp.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
