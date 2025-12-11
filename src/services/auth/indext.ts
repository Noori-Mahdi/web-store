// // /services/authService.ts

// import axiosInstance from "@/src/lib/axios";


// interface LoginData {
//   email: string;
//   password: string;
// }

// interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     email: string;
//     name: string;
//   };
// }

// export const authService = {
//   login: async (data: LoginData): Promise<LoginResponse> => {
//     const response = await axiosInstance.post("/auth/login", data);
//     return response.data;
//   },

//   logout: async (): Promise<void> => {
//     await axiosInstance.post("/auth/logout");
//     localStorage.removeItem("token");
//   },
// };
