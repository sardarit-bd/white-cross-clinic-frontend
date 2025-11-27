import { useSearchParams } from "next/navigation";

export const useAuth = () => {
  const role = useSearchParams().get('role')
  console.log(role)
  const user = {
    id: 1,
    name: "Md Sohel",
    role: role || "doctor", // Change to 'admin' or 'student' to test different roles
  };   

  return user; 
} 