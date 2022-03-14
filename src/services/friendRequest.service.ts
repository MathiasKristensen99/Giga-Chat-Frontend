import http from "./http.client";
import type { FriendRequest } from "@/models/FriendRequest";

export class FriendRequestService {
  async sendFriendRequest(
    sentUserUuid: string,
    receivedUserUuid: string,
    isAccepted: boolean
  ): Promise<FriendRequest> {
    const res = await http.post<FriendRequest>("/friend-requests", {
      sentUserUuid: sentUserUuid,
      receivedUserUuid: receivedUserUuid,
      isAccepted: isAccepted,
    });
    return res.data;
  }
}
