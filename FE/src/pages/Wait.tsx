import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState, isLoggedInState, naverLogin } from "./../states/useLogin";

const WaitWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--gray03);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const WaitText = styled.div`
  font-family: "NanumSquareNeoRegular";
  font-size: 32px;
  color: var(--gray02);
`

const WaitHeader = styled.div`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 48px;
  color: var(--dark01);
`
function Wait() {
  const user = useRecoilState(userState);
  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const getNaverToken = async () => {
    try {
      const loggedInUser = await naverLogin();
      setUser(loggedInUser);
      setIsLoggedIn(true);
      if(user[0].nickname === null){
        navigate("/join");
      }
      else
      navigate("/")
    } catch (error) {
      alert
      console.error(error);
    }
  }

  useEffect(() => {
    getNaverToken();
  }, []);

  return (
    <WaitWrapper>
        <WaitHeader>로그인 중입니다</WaitHeader>
        <WaitText>잠시만 기다려주세요</WaitText>
    </WaitWrapper>
  )
}

export default Wait