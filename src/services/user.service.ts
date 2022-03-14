import http from "./http.client";
import type { User } from "@/models/User";

export class UserService {
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    const res = await http.post<User>("/users", {
      name: name,
      email: email,
      password: password,
    });
    console.log(res.data.name);
    return res.data;
  }

  async getAllUsers(): Promise<User[]> {
    const res = await http.get<User[]>("/users");
    return res.data;
  }

  async searchUser(name: string): Promise<User> {
    const res = await http.post<User>("/users/search/" + name, {
      name: name,
    });
    return res.data;
  }

  loginUser(email: string, password: string) {
    
  }
}
