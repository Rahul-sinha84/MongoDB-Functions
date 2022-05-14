import "./db/config.js";
import actions from "./actions/index.js";

console.log("Operating.....");

const func = async () => {
  const insertOp = await actions.insert();
  console.log(insertOp.message);

  //some extra time for insertion of data and getting it ready for querying
  setTimeout(async () => {
    const queryAllOp = await actions.queryAll();
    console.log(queryAllOp.message, queryAllOp.data);

    const queryMovieName = await actions.queryByMovieName("Divergent");
    console.log(queryMovieName.message, queryMovieName.data);

    const queryActorName = await actions.queryByActorName("Jhonny Depp");
    console.log(queryActorName.message, queryActorName.data);
  }, 200);
};

func();
