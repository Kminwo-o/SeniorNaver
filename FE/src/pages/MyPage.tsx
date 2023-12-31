import { styled } from "styled-components";
import HeadBar from "../components/HeadBar";
import MyPageNavigationBar from "../components/MyPageNavigationBar";
import { useRecoilValue } from "recoil";
import { myPageCategoryState } from "../states/useMyPage";
import MyPageProfile from "../components/MyPageProfile";
import MyPageScrap from "../components/MyPageScrap";
import MyPageQuestionAndAnswer from "../components/MyPageQuestionAndAnswer";
import MyPageWithdrawal from "../components/MyPageWithdrawal";
import MyPageNicknameChange from "../components/MyPageNicknameChange";
import MyPageBirthChange from "../components/MyPageBirthChange";
import MyPageKeywordsChange from "../components/MyPageKeywordsChange";
import MyPageRegionChange from "../components/MyPageRegionChange";
import NavigationBar from "../components/NavigationBar";
const MyPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 4vh 4vw;
  font-size: var(--font-size-base);
  font-family: "NanumSquare Neo ExtraBold";
  color: var(--dark02);
`;
const MyPageRowWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MyPageHeadBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;

const MyPageHeadBarText = styled.div`
  font-size: 2vw;
  font-family: "NanumSquareNeoHeavy";
  color: var(--dark02);
  margin-bottom: 4vh;
`;
const MyPageHeadBarLine = styled.div`
  width: 100vw;
  border: 0.1vw solid var(--dark30);
`;

function MyPage() {
  const activeCategory = useRecoilValue(myPageCategoryState);

  return (
    <>
      <HeadBar />
      <NavigationBar />
      <MyPageWrapper>
        <MyPageHeadBarWrapper>
          <MyPageHeadBarText>내 정보 관리</MyPageHeadBarText>
          <MyPageHeadBarLine />
        </MyPageHeadBarWrapper>
        <MyPageRowWrapper>
          <MyPageNavigationBar />
          {activeCategory.currentCategory === 0 && <MyPageProfile />}
          {activeCategory.currentCategory === 1 && <MyPageScrap />}
          {activeCategory.currentCategory === 2 && <MyPageQuestionAndAnswer />}
          {activeCategory.currentCategory === 3 && <MyPageWithdrawal />}
          {activeCategory.currentCategory === 4 && <MyPageNicknameChange />}
          {activeCategory.currentCategory === 5 && <MyPageBirthChange />}
          {activeCategory.currentCategory === 6 && <MyPageKeywordsChange />}
          {activeCategory.currentCategory === 7 && <MyPageRegionChange />}
        </MyPageRowWrapper>
      </MyPageWrapper>
    </>
  );
}
export default MyPage;
