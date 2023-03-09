import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "on" : "")}>
            <HomeOutlinedIcon />
            <span>홈</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/sports" className={({ isActive }) => (isActive ? "on" : "")}>
            <SportsEsportsOutlinedIcon />
            <span>e스포츠</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/streaming" className={({ isActive }) => (isActive ? "on" : "")}>
            <LiveTvOutlinedIcon />
            <span>스트리밍</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/community" className={({ isActive }) => (isActive ? "on" : "")}>
            <QuestionAnswerOutlinedIcon />
            <span>커뮤니티</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/myPage" className={({ isActive }) => (isActive ? "on" : "")}>
            <PermIdentityOutlinedIcon />
            <span>마이페이지</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
