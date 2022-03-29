import { defineStore } from "pinia";
import { ProfileService } from "@/services/profile.service";
import type { Profile } from "@/models/Profile";

const profileService: ProfileService = new ProfileService();

export const ProfileStore = defineStore({
  id: "profileStore",
  state: () => ({
    loggedInProfile: { name: "", gender: "", age: 0, uuid: "" } as Profile,
  }),
  getters: {},
  actions: {
    createProfile(name: string, gender: string, age: number, uuid: string) {
      profileService
        .createProfile(name, gender, age, uuid)
        .then((profile) => (this.loggedInProfile = profile))
        .catch((err) => console.log(err));
    },
  },
});
