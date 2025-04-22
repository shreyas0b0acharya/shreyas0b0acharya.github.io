import { useNavigate } from "react-router-dom";

export const NavigatorText = ({ navigateTo, children }) => {
  const navigate = useNavigate();

  return (
    <h6
      onClick={() => navigate(navigateTo)}
      className="hover:text-themeColor cursor-pointer transition"
    >
      {children}
    </h6>
  );
};
