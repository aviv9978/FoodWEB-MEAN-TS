import { connect, ConnectOptions } from "mongoose";

export const dbConnect = () => {
  connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log("Connect successfilly"),
    (error) => console.log(error)
  );
};
