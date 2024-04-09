import { View, Text, StyleSheet, ScrollView } from "react-native";

function Information({ children, name }) {
  let content = <></>;

  if (name === "Shankly") {
    content = (
      <>
        <Text style={styles.pStyle}>
          크론베리에서 뛰던 샹클리는 피터 캐러더스라는 스카우터의 추천을 받아
          칼라일 유나이티드에서 한 달 간의 트라이얼 기회를 받았고, 트라이얼로 단
          한 경기를 뛰고는 곧바로 계약을 맺어 칼라일 유나이티드 유스 팀에
          입단하게 된다. 1932-1933 시즌 19살의 나이로 잉글랜드 무대에 데뷔한
          샹클리는 1932년 12월 31일 로치데일 AFC와의 1군 경기에서 처음 시니어
          데뷔를 한 뒤, 1군 무대를 16경기 가량 소화했고, 리저브 팀에서는 지역
          리그 컵 결승전에서 뉴캐슬 유나이티드 리저브를 꺾고 우승을 맛보기도
          했다. 그는 지역 기자들에게 레프트백으로서 재능이 있다고 평가받기도
          했으나 실제로는 수비형 미드필더 포지션을 소화했다. 그는 열심히 달리고
          투철하게 몸을 쓰는 스타일로 칼라일에서 손 꼽히는 유망주로 평가받으며
          많은 기대를 모았다.
        </Text>
      </>
    );
  }

  if (name === "Paisley") {
    content = (
      <>
        <Text style={styles.subTitle}>경력</Text>
        <Text style={styles.pStyle}>
          1946-47 시즌 페이즐리는 FA컵 3라운드 체스터와의 원정 경기에서 첫 공식
          복귀전을 치렀다. 그는 그 경기에서 2-0으로 승리하는데에 일조했다.
          페이즐리의 리버풀 공식 첫 골은 1948년 5월 1일 안필드에서 열린
          울버햄튼과의 리그 경기에서 나왔다. 전반 22분에 터진 그의 골은 2-1
          승리의 결승골이 되었다. 전후 첫 풀시즌이었던 1946-47 시즌에 리버풀은
          그의 활약에 힘입어 24년 만의 리그 우승을 달성한다. 그는 42경기에서
          34번 출전했고 팀의 주전으로 뛰었다. 1948년 리그 경기에서 충돌로 인해
          의식을 잃었지만 10분만에 그라운드로 다시 뛰어들어와 헤딩을 위해 머리를
          날릴 정도로 강인한 정신력의 소유자였던 그는 다음 시즌과 그 다음
          시즌까지도 매 시즌 30경기 이상 출전하였고 1949-50 시즌에는 FA컵
          준우승에도 기여하였다. 1950-51 시즌 페이즐리는 팀의 주장을 역임하기도
          했으며, 1954년까지 리버풀에서 선수 경력을 이어가다가 은퇴를 결심한다.
        </Text>
        <Text style={[styles.subTitle, { marginTop: 20 }]}>감독 경력</Text>
        <Text style={styles.pStyle}>
          페이즐리는 샹클리의 유산을 이어받아 곧바로 전성기의 연속을 위해 힘쓰기
          시작했다. 페이즐리는 1974-75 시즌에 필 닐과 테리 맥더모트를 영입하여
          채리티 실드를 우승한 뒤 곧장 리그 레이스를 내달렸는데, 초반에 좋은
          흐름을 이어갔으나 승점 2점차로 더비 카운티에 이어 아쉬운 리그 2위를
          차지하게 된다. 해당 시즌 페이즐리의 리버풀은 FA컵과 리그컵에서 모두
          조기 탈락했고 컵위너스컵에서도 탈락의 고배를 마시면서 3년 만에 트로피
          없는 시즌을 보내게 되었다. 하지만 페이즐리는 무너지지않고 다음 시즌에
          불꽃을 태워올렸다. 1975-76 시즌에 샹클리가 해낸 것과 같이 리그 우승과
          UEFA 컵 우승을 동시에 차지한 것. 당시 페이즐리의 팀은 '마이티
          마우스'라고 불리던 날카로운 골잡이 케빈 키건과 창의적인 플레이를
          펼치던 스티브 하이웨이, 그 아래의 테리 맥더모트를 앞세워 강력한
          스쿼드를 구축하고 있었고, 치열했던 리그 경쟁을 이겨낸 것에 이어
          UEFA컵에서도 클뤼프 브뤼허를 총합계 4:3으로 꺾으며 4년 만의 더블을
          달성한다. 이는 페이즐리의 감독 커리어 첫 리그 및 유럽 대항전
          우승이었고, 팀에게는 9번째 리그 우승, 2번째 UEFA컵 우승이었다. 이 시즌
          페이즐리는 잉글랜드 리그 올해의 감독상을 수상하였으며, 이 두 번째
          시즌을 기점으로 본격적으로 잉글랜드를 넘어 유럽을 정복하는 절정의
          전성기를 이룩하게 된다.
        </Text>
      </>
    );
  }

  return (
    <>
      <View style={styles.totalContainer}>

        {/* <View style={styles.childrenContainer}>
          <Text style={styles.textStyle}>{children}</Text>
        </View> */}

        <View style={styles.scrollContainer}>
        <ScrollView>{content}</ScrollView>
        </View>

      </View>
    </>
  );
}

export default Information;

const styles = StyleSheet.create({
  totalContainer: {
    flex : 1,
    marginTop: 20,
    alignItems: "center",
  },
  childrenContainer: {
    flex : 1
  },
  textStyle: {
    fontSize: 25,
    color: "#ccccc1",
    textAlign: "center",
    marginBottom: 10,
    borderWidth: 2,
    width: 150,
  },
  pStyle: {
    textAlign: "center",
  },
  scrollContainer: {
    flex : 1
  },
  subTitle: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
    borderWidth: 2,
    width: 100,
    position: "relative",
    left: "38%",
  },
});
