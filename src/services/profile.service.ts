import http from "./http.client";
import type { Profile } from "@/models/Profile";

export class ProfileService {
  async createProfile(
    name: string,
    gender: string,
    age: number,
    uuid: string
  ): Promise<Profile> {
    const res = await http.post<Profile>("/profiles", {
      name: name,
      gender: gender,
      age: age,
      uuid: uuid,
    });
    return res.data;
  }
}
