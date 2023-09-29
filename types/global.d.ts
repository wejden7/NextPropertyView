import authenticationReducer from "@/slice/authenticationSlice";
declare global {
  type User = {
    email: string;
    name: string;
    role: string;
    telephone_number: string;
    id_number: string;
    verified: number;
  };

  interface rootState {
    authentication: ReturnType<typeof authenticationReducer>;
  }

  type AuthenticationState = {
    isAuthenticated: boolean;
    user: User | null;
  };
}
