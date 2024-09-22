import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { logout, selectCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface VerifiedUser {
  user: {
    role: string;
  };
}

type TProtectedRoute = {
  children: ReactNode;
  role?: string | undefined;
};
const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(selectCurrentToken);
  console.log(token);
  let user;

  if (token) {
    user = verifyToken(token) as VerifiedUser;
  }

  console.log(user);
  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.user?.role) {
    dispatch(logout());
    return <Navigate to="/singin" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/singin" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
