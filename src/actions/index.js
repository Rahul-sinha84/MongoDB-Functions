import Movie from "../schema/movies.js";

const actions = {
  insert: async () => {
    try {
      const movies = [
        {
          name: "Shutter Island",
          actor: "Leonardo DiCaprio",
          actress: "Michelle Williams",
          releaseYear: 2010,
          director: "Martin Scorsese",
        },
        {
          name: "Pirates of the Caribbean",
          actor: "Jhonny Depp",
          actress: "Keira Knightley",
          releaseYear: 2003,
          director: "Gore Verbinski",
        },
        {
          name: "Predestination",
          actor: "Ethan Hawke",
          actress: "Sarah Snook",
          releaseYear: 2014,
          director: "Michael Spierig",
        },
        {
          name: "Divergent",
          actor: "Theo James",
          actress: "Shailene Woodley",
          releaseYear: 2014,
          director: "Neil Burger",
        },
        {
          name: "Karthik Calling Karthik",
          actor: "Farhan Akhtar",
          actress: "Deepika Padukone",
          releaseYear: 2010,
          director: "Vijay Lalwani",
        },
      ];

      movies.forEach(async (val, ind) => {
        await Movie.create(val);

        if (ind + 1 === movies.length) {
          console.log("Data Inserted !!");
        }
      });
      return {
        status: 200,
        data: [],
        message: "Insertion successfull !!",
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        data: [],
        message: "Insertion failed !!",
      };
    }
  },
  queryAll: async () => {
    try {
      const movies = await Movie.find({}).exec();
      return {
        status: 200,
        data: movies,
        message: "All Data !!",
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        data: [],
        message: "Querying failed !!",
      };
    }
  },
  queryByMovieName: async (name) => {
    try {
      const movie = await Movie.find({ name }).exec();
      if (!movie)
        return {
          status: 200,
          data: [],
          message: "No such Movie !!",
        };
      return {
        status: 200,
        data: movie,
        message: "Querying successfull !!",
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        data: [],
        message: "Querying failed !!",
      };
    }
  },
  queryByActorName: async (actor) => {
    try {
      const movie = await Movie.find({ actor }).exec();
      if (!movie)
        return {
          status: 200,
          data: [],
          message: "No such Movie !!",
        };
      return {
        status: 200,
        data: movie,
        message: "Querying successfull !!",
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        data: [],
        message: "Querying failed !!",
      };
    }
  },
};

export default actions;
