<template>
  <div class="mainContentBox">
    <div class="row">
      <div class="leftBox">
        <h1 class="mainTitle">The Cafe 봄봄</h1>
        <br />
        <h2 class="subTitle">Yake-Out 전문 브랜드 cafe 봄봄</h2>
        <br />
        <p class="description">
          Cafe 봄봄'은 take-out 전문 카페로 출발하였습니다. 대학가에서 차별화 된
          메뉴와 특별한 운영시스템으로 많은 학생들의 사랑을 받았습니다. take-out
          시장이 커지면서 'Cafe 봄봄'은 대학가를 넘어 중심가, 주택가 곳곳에서
          한층 더 성장했습니다.
        </p>
        <br />
        <h2 class="subTitle">차별화를 추구하여 보다 성장하는 Cafe 봄봄</h2>
        <br />
        <p class="description">
          Cafe 봄봄'은 2012년 부터 대구를 거점으로 성장해왔으며 2015년
          가맹사업을 시작하였습니다. 지금은 서울/경기, 대구/경북, 부산/경남 등
          전국 번화가 곳곳에 자리를 잡고 성업 중입니다. 그 배경에는 ‘봄봄’만의
          특별한 메뉴와 매력이 있습니다. '보다 저렴한', '보다 맛있는', '보다
          양이 많은', '보다 친절한', '보다 빠른' 커피와 음료로 매니아층을
          형성하였으며, take-out 시장에서는 빠질 수 없는 카페로 인정받았습니다.
          'Cafe 봄봄'은 현재에도 끊임없는 메뉴개발과 노력으로 성장을 거듭하고
          있습니다
        </p>
      </div>
      <div class="rightBox" style="padding: 40px; padding-right: 0">
        <img
          src="./../../assets/images/introduce01.png"
          alt="소개이미지"
          style="width: 100%; height: 80%"
        />
      </div>
    </div>

    <div class="row">
      <div class="leftBox" style="padding: 40px; padding-left: 0">
        <img
          src="./../../assets/images/introduce02.png"
          alt="소개이미지"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="rightBox">
        <h1 class="mainTitle">Brand Concept</h1>
        <br />
        <h1 class="mainTitle">'봄(Spring)'을 '보다'</h1>
        <br />
        <p class="description">
          Cafe 봄봄은 '봄'이라는 밝고 산뜻한 분위기에 '봄'처럼 따스한 커피 한
          잔의 작은 사치를 누릴 수 있는 행복한 공간입니다.
        </p>
        <br />
        <p class="description">
          봄에 피는 꽃과 같이 화사하고, 밝고, 산뜻한 매장<br />
          친절함과 발랄함이 돋보이는 분위기<br />
          꽃처럼 화려한 비주얼의 음료<br />
        </p>
      </div>
    </div>
    <div class="row">
      <div class="leftBox addressbox">
        <h1 class="mainTitle">본점위치</h1>
        <p class="description">
          대구광역시 수성구 달구벌대로 2280<br />
          (수성동1가 89-42) 4층
        </p>
      </div>
      <div class="rightBox">
        <div>지도</div>
      </div>
    </div>
    <div class="row">
      <div class="leftBox addressbox">
        <h1 class="mainTitle">대전교육장</h1>
        <p class="description">
          대구광역시 수성구 달구벌대로 2280<br />
          (수성동1가 89-42) 4층
        </p>
      </div>
      <div class="rightBox">
        <div>지도</div>
      </div>
    </div>
  </div>
  <div class="bgBox">
    <div class="row">
      <div class="leftBox" style="padding: 40px">
        <div>
          <img src="./../../assets/images/yellow_logo.png" alt="노란로고" />
        </div>
        <h2 class="subTitle" style="color: #ffea00">
          Cafe 봄봄은 take-out 전문 카페로 출발하였습니다.
        </h2>
        <p class="description" style="color: #ddd">
          <br />
          차별화 된 메뉴로 대학가에서 많은 학생들의 사랑을 받았습니다.<br />
          take-out 시장이 커지면서 ‘Cafe 봄봄’은 이제 대학가를 넘어 중심가,<br />
          주택가 곳곳에서 한층 더 성장하고 있습니다. 앞으로도 Cafe 봄봄은
          차별화를 추구하여 보다 성장하는 브랜드가 되도록 최선을 다하겠습니다.
        </p>
      </div>
      <div class="rightBox" style="padding: 40px">
        <img
          src="./../../assets/images/section01.png"
          alt="#"
          style="width: 100%; height: 100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Introduce",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.mainTitle,
.subTitle {
  font-weight: 900;
}
.mainTitle {
  font-size: 36px;
}
.subTitle {
  font-size: 24px;
}
.description {
  font-size: 20px;
}
.mainContentBox {
  background-image: url("./../../assets/images/blossom.gif");
  background-size: 50%;
  background-repeat: no-repeat;
  width: calc(100% - 620px);
  margin: 40px auto;
}
.leftBox,
.rightBox {
  width: 50%;
}
.bgBox {
  background-image: url("../../assets/images/sectionbg.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
