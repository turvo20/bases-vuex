import getRandomInt from "@/helpers/getRandomint";

export const  incrementRandomInt= async({ commit })=> {
    //   commit("setLoading", false);
     commit("setLoading", true);

      const randomInt = await getRandomInt();

      commit("incrementBy", randomInt);
      commit("setLoading", false);

    }