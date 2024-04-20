import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import {data} from './dummy-data-files/DummyData'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={{backgroundColor : 'white', width : 150, padding : 10}}>
          <Text style={{textAlign : 'center', fontSize : 17}}>This is Anfiled</Text>
        </View>
        <View>
          <FlatList data={data} renderItem={({item})=>{
            return <>
              <View style={[{}]}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
                <Text style={[{textAlign : 'center'}]}>{item.title}</Text>
              </View>
            </>
          }} keyExtractor={(item, index)=>{
            return item.id
          }}></FlatList>
        </View>
      </View>
      <View style={styles.secondeContainer}>
        <ScrollView>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            크론베리에서 뛰던 샹클리는 피터 캐러더스라는 스카우터의 추천을 받아
            칼라일 유나이티드에서 한 달 간의 트라이얼 기회를 받았고, 트라이얼로
            단 한 경기를 뛰고는 곧바로 계약을 맺어 칼라일 유나이티드 유스 팀에
            입단하게 된다. 1932-1933 시즌 19살의 나이로 잉글랜드 무대에 데뷔한
            샹클리는 1932년 12월 31일 로치데일 AFC와의 1군 경기에서 처음 시니어
            데뷔를 한 뒤, 1군 무대를 16경기 가량 소화했고, 리저브 팀에서는 지역
            리그 컵 결승전에서 뉴캐슬 유나이티드 리저브를 꺾고 우승을 맛보기도
            했다.[4] 그는 지역 기자들에게 레프트백으로서 재능이 있다고
            평가받기도 했으나 실제로는 수비형 미드필더 포지션을 소화했다. 그는
            열심히 달리고 투철하게 몸을 쓰는 스타일로 칼라일에서 손 꼽히는
            유망주로 평가받으며 많은 기대를 모았다. 샹클리는 그의 고향인
            글렌벅과 가까운 칼라일에서 안정을 느끼고 있었지만, 1932-1933 시즌이
            끝난 직후, 프레스턴 노스 엔드가 그의 영입에 500 파운드의 이적료를
            제시했고, 그는 총 60 파운드의 계약 수당 및 5 파운드의 주급을 받고
            프레스턴으로 이적하게 된다. 샹클리는 처음 해당 조건이 충분치 않다고
            생각했으나 그의 형인 알렉 샹클리가 당시 칼라일보다 더 큰 클럽이자
            2부에 속해있던 프레스턴으로 이적하는 것은 기회라는 조언을 했고
            결심을 굳히게 된다. 샹클리는 이적 후 리저브 팀에서 커리어를 시작했고
            그는 이전에 뛰던 리그보다 더 수준 높은 지역 리그를 경험할 수 있었다.
            그는 1933년 12월 9일 헐 시티와의 경기에서 20살 3개월의 나이로 1군
            데뷔를 하게되었는데, 그는 데뷔 경기에서 골을 넣었고 영리한 패스를
            보여주며 전국적으로도 이름을 날리기 시작했다. 그는 빠르게 1군
            주전으로 자리를 잡았고 이에 힘입어 프레스톤은 1934-35 시즌의 결과로
            1부 리그로 승격도 하게 되었으며 그는 팬들의 사랑을 받는 선수로
            성장하게 되었다. 이후 그는 은퇴하기 까지 16년 동안 프레스턴에서만
            선수 시절을 보냈으며 그가 은퇴하기 전까지 프레스턴은 다시 강등되지
            않았다. 그는 성실하게 뛰는 팀 내 주축 수비형 미드필더로서 1936-1937
            시즌 FA컵 결승에 진출했으나 선덜랜드에게 패하며 준우승에 그쳤고, 그
            다음 시즌 FA컵 결승전에 다시 진출하여 허더스필드를 1-0으로 꺾는데
            일조하며 생애 첫 메이저 우승을 맛보는 선수생활의 정점을 경험한다.
            하지만 그의 전성기는 제2차 세계대전으로 리그가 중단되며 더 빛을
            보지는 못했고 그는 전쟁 시기 영국 공군에 입대하여 전시 리그에서
            커리어를 이어갔다. 전쟁 이후 다시 리그가 재개되었고 샹클리는
            프레스턴으로 복귀하였는데, 이 당시 그는 톰 피니와 4시즌 간 동료로서
            경기하기도 했다.[5] 그는 프레스턴의 주장을 맡다가 33세로 선수 생활을
            마감하였다.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a6282c",
  },
  firstContainer: {
    flex: 1,
    position: "relative",
    bottom: -40,
  },
  secondeContainer: {
    flex: 1,
    backgroundColor: "black",
    width: "97%",
    borderWidth: 2,
    borderColor: "white",
  },
});
