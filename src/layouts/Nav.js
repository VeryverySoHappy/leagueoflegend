import React from 'react'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

function Nav(props) {
  const {on} = props;
  
  return (
    <ul className="nav">
      <li className={on}>
        <Link to="/">
          <HomeOutlinedIcon/>
          <span>홈</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <SportsEsportsOutlinedIcon/>
          <span>e스포츠</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <LiveTvOutlinedIcon/>
          <span>스트리밍</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <QuestionAnswerOutlinedIcon/>
          <span>커뮤니티</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <PermIdentityOutlinedIcon/>
          <span>마이페이지</span>
        </Link>
      </li>
    </ul>
  )
}

export default Nav