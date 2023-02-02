import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://sebas77:professionaltools777@cluster0.sqiuoum.mongodb.net/administrator?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const url = `${connection.connection.host} : ${connection.connection.port}`;
    console.log(`MongoDB conectado en: ${url}`);

  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;
