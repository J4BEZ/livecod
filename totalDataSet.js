//확진자수와 완치자수
//질병관리본부와 KBS 뉴스 페이지 참고 바랍니다.
//확인사항 1. 일본 크루즈 업데이트 주의 바랍니다.
//확인사항 2. 한국은 완치자 수가 있습니다.
var marker = [{
    "Name": "이란",
    "Name_en": "Iran",
    "Name_ch": "伊朗",
    "lat": 35.6970118,
    "lng": 51.2097373,
    "확진자수": 4747,
    "사망자수": 124,
    "완치자수": 913,
    "추가날짜": "2/21"
  }, {
    "Name": "이집트",
    "Name_en": "Egypt",
    "Name_ch": "埃及",
    "lat": 30.0594838,
    "lng": 31.2234448,
    "확진자수": 15,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "2/16"
  }, {
    "Name": "루마니아",
    "Name_en": "Romania",
    "Name_ch": "尼亚",
    "lat": 44.430481,
    "lng": 26.12298,
    "확진자수": 11,
    "사망자수": 0,
    "완치자수": 5,
    "추가날짜": "3/6"
  }, {
    "Name": "벨기에",
    "Name_en": "Belgium",
    "Name_ch": "比利时",
    "lat": 50.8550625,
    "lng": 4.3053503,
    "확진자수": 169,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "2/5"
  }, {
    "Name": "벨라루스",
    "Name_en": "Belarus",
    "Name_ch": "白俄罗斯",
    "lat": 53,
    "lng": 28,
    "확진자수": 6,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "3/6"
  }, {
    "Name": "스페인",
    "Name_en": "Spain",
    "Name_ch": "西班牙",
    "lat": 40.4378698,
    "lng": -3.8196189,
    "확진자수": 401,
    "사망자수": 8,
    "완치자수": 245,
    "추가날짜": "2/2"
  }, {
    "Name": "스웨덴",
    "Name_en": "Sweden",
    "Name_ch": "瑞典语",
    "lat": 59.3260668,
    "lng": 17.8419725,
    "확진자수": 161,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "2/2"
  }, {
    "Name": "덴마크",
    "Name_en": "Denmark",
    "Name_ch": "丹麦",
    "lat": 56.26392,
    "lng": 9.501785,
    "확진자수": 27,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "2/2"
  }, {
    "Name": "노르웨이",
    "Name_en": "Norway",
    "Name_ch": "挪威",
    "lat": 59.9138204,
    "lng": 10.7387413,
    "확진자수": 127,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "3/6"
  }, {
    "Name": "이탈리아",
    "Name_en": "Italy",
    "Name_ch": "义大利",
    "lat": 41.902782,
    "lng": 12.496366,
    "확진자수": 4636,
    "사망자수": 197,
    "완치자수": 913,
    "추가날짜": "2/1"
  },{
    "Name": "아제르바이잔",
    "Name_en": "Azerbaijan",
    "Name_ch": "阿塞拜疆",
    "lat": 40.3,
    "lng": 47.3,
    "확진자수": 9,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "3/6"
  }, {
    "Name": "러시아",
    "Name_en": "Russia",
    "Name_ch": "俄罗斯",
    "lat": 55.751244,
    "lng": 37.618423,
    "확진자수": 13,
    "사망자수": 0,
    "완치자수": 2,
    "추가날짜": "2/1"
  },{
    "Name": "파키스탄",
    "Name_en": "Pakistan",
    "Name_ch": "巴基斯坦",
    "lat": 30.37,
    "lng": 69.34,
    "확진자수": 6,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "3/6"
  }, {
    "Name": "캐나다",
    "Name_en": "Canada",
    "Name_ch": "加拿大",
    "lat": 54.7235693,
    "lng": -113.7164202,
    "확진자수": 54,
    "사망자수": 0,
    "완치자수": 8
  }, {
    "Name": "미국",
    "Name_en": "United States",
    "Name_ch": "美国",
    "lat": 37.2757368,
    "lng": -104.6549972,
    "확진자수": 321,
    "사망자수": 15,
    "완치자수": 15
  }, {
    "Name": "핀란드",
    "Name_en": "Finland",
    "Name_ch": "芬兰",
    "lat": 60.1102086,
    "lng": 24.7378224,
    "확진자수": 15,
    "사망자수": 0,
    "완치자수": 1
  },{
    "Name": "체코",
    "Name_en": "Czech",
    "Name_ch": "捷克",
    "lat": 50.083,
    "lng": 14.417,
    "확진자수": 19,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜" : "3/6"
  }, {
    "Name": "프랑스",
    "Name_en": "France",
    "Name_ch": "法国",
    "lat": 46.1390503,
    "lng": -2.4346589,
    "확진자수": 716,
    "사망자수": 11,
    "완치자수": 12
  }, {
    "Name": "영국",
    "Name_en": "United Kingdom",
    "Name_ch": "英国",
    "lat": 51.509865,
    "lng": -0.118092,
    "확진자수": 206,
    "사망자수": 2,
    "완치자수": 18,
    "추가날짜": "2/1"
  }, {
    "Name": "네덜란드",
    "Name_en": "Netherlands",
    "Name_ch": "荷兰",
    "lat": 52.132633,
    "lng": 5.291266,
    "확진자수": 188,
    "사망자수": 1,
    "완치자수": 0,
    "추가날짜": "3/6"
  }, {
    "Name": "네팔",
    "Name_en": "Nepal",
    "Name_ch": "尼泊尔",
    "lat": 28.3838445,
    "lng": 81.8867804,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 1
  },{
    "Name": "팔레스타인",
    "Name_en": "Palestine",
    "Name_ch": "巴勒斯坦",
    "lat": 31.89,
    "lng": 34.9,
    "확진자수": 16,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  }, {
    "Name": "마카오",
    "Name_en": "Macau",
    "Name_ch": "澳门",
    "lat": 22.1619078,
    "lng": 113.5351333,
    "확진자수": 10,
    "사망자수": 0,
    "완치자수": 9
  }, {
    "Name": "홍콩",
    "Name_en": "Hong Kong",
    "Name_ch": "香港",
    "lat": 22.3529808,
    "lng": 113.9876162,
    "확진자수": 107,
    "사망자수": 2,
    "완치자수": 51
  }, {
    "Name": "태국",
    "Name_en": "Thailand",
    "Name_ch": "泰国",
    "lat": 13.0110763,
    "lng": 96.9952628,
    "확진자수": 48,
    "사망자수": 1,
    "완치자수": 31
  }, {
    "Name": "호주",
    "Name_en": "Australia",
    "Name_ch": "澳大利亚",
    "lat": -24.9936027,
    "lng": 115.2351577,
    "확진자수": 64,
    "사망자수": 2,
    "완치자수": 22
  }, {
    "Name": "싱가포르",
    "Name_en": "Singapore",
    "Name_ch": "新加坡",
    "lat": 1.3143394,
    "lng": 103.7041659,
    "확진자수": 138,
    "사망자수": 0,
    "완치자수": 90
  },{
    "Name": "포르투갈",
    "Name_en": "Portugal",
    "Name_ch": "葡萄牙",
    "lat": 39.399872,
    "lng": -8.224454,
    "확진자수": 13,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜" : "3/6"
  },{
    "Name": "조지아",
    "Name_en": "Georgia",
    "Name_ch": "格鲁吉亚",
    "lat": 41.7109,
    "lng": 44.7919,
    "확진자수": 9,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜" : "3/6"
  }, {
    "Name": "레바논",
    "Name_en": "Lebanese Republic",
    "Name_ch": "黎巴嫩",
    "lat": 33.8869444,
    "lng": 35.5130556,
    "확진자수": 22,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "2/23"
  }, {
    "Name": "이스라엘",
    "Name_en": "Israel",
    "Name_ch": "以色列",
    "lat": 31.4117257,
    "lng": 35.0818155,
    "확진자수": 21,
    "사망자수": 0,
    "완치자수": 2,
    "추가날짜": "2/23"
  }, {
    "Name": "에스토니아",
    "Name_en": "Estonia",
    "Name_ch": "爱沙尼亚",
    "lat": 59,
    "lng": 26,
    "확진자수": 9,
    "사망자수": 0,
    "완치자수": 5,
    "추가날짜": "3/6"
  }, {
    "Name": "말레이시아",
    "Name_en": "Malaysia",
    "Name_ch": "马来西亚",
    "lat": 4.1389178,
    "lng": 105.1226078,
    "확진자수": 83,
    "사망자수": 0,
    "완치자수": 23
  }, {
    "Name": "캄보디아",
    "Name_en": "Cambodia",
    "Name_ch": "柬埔寨",
    "lat": 12.1458696,
    "lng": 103.8594161,
    "확진자수": 2,
    "사망자수": 0,
    "완치자수": 1
  }, {
    "Name": "베트남",
    "Name_en": "Vietnam",
    "Name_ch": "越南",
    "lat": 15.7583637,
    "lng": 101.4157502,
    "확진자수": 20,
    "사망자수": 0,
    "완치자수": 16
  }, {
    "Name": "필리핀",
    "Name_en": "Philippines",
    "Name_ch": "菲律宾",
    "lat": 14.5965787,
    "lng": 120.9444545,
    "확진자수": 5,
    "사망자수": 1,
    "완치자수": 2
  }, {
    "Name": "대만",
    "Name_en": "Taiwan",
    "Name_ch": "台湾",
    "lat": 25.0174719,
    "lng": 121.3662943,
    "확진자수": 45,
    "사망자수": 1,
    "완치자수": 12
  }, {
    "Name": "스리랑카",
    "Name_en": "Sri Lanka",
    "Name_ch": "斯里兰卡",
    "lat": 7.8589214,
    "lng": 79.5850432,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 1
  },{
    "Name": "카타르",
    "Name_en": "Qatar",
    "Name_ch": "卡塔尔",
    "lat": 25.35,
    "lng": 51.18,
    "확진자수": 11,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "사우디아라비아",
    "Name_en": "Saudi Arabia",
    "Name_ch": "沙特阿拉伯",
    "lat": 23.89,
    "lng": 45.08,
    "확진자수": 7,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜":"3/6"
  },{
    "Name": "버진아일랜드",
    "Name_en": "Virgin Islands",
    "Name_ch": "维尔京群岛",
    "lat": 18.2,
    "lng": -64.5,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/7"
  },{
    "Name": "인도네시아",
    "Name_en": "Indonesia",
    "Name_ch": "印度尼西亚",
    "lat": -6.211544,
    "lng": 106.845172,
    "확진자수": 4,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "뉴질랜드",
    "Name_en": "NewZealand",
    "Name_ch": "新西兰",
    "lat": -41.28648,
    "lng": 174.776217,
    "확진자수": 5,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "아르헨티나",
    "Name_en": "Argentine",
    "Name_ch": "阿根廷",
    "lat": -34,
    "lng": -64,
    "확진자수": 8,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "보스니아 헤르체고비나",
    "Name_en": "Bosnia and Herzegovina",
    "Name_ch": "波斯尼亚和黑塞哥维那",
    "lat": 43.915886,
    "lng": 17.679076,
    "확진자수": 3,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "마케도니아",
    "Name_en": "Macedonia",
    "Name_ch": "马其顿",
    "lat": 41.9617,
    "lng": 21.6214,
    "확진자수": 3,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "나이지리아",
    "Name_en": "Nigeria",
    "Name_ch": "尼日利亚",
    "lat": 9.05735,
    "lng": 7.48976,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "리투아니아",
    "Name_en": "Lithania",
    "Name_ch": "立陶宛",
    "lat": 55.17,
    "lng": 23.88,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "룩셈부르크",
    "Name_en": "Luxembourg",
    "Name_ch": "卢森堡",
    "lat": 47.162494,
    "lng": 19.503304,
    "확진자수": 3,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "모로코",
    "Name_en": "Morocco",
    "Name_ch": "摩洛哥",
    "lat": -7.09262,
    "lng": 31.791702,
    "확진자수": 2,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "모나코",
    "Name_en": "Monaco",
    "Name_ch": "摩纳哥",
    "lat": 43.750298,
    "lng": 7.412841,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "아르메니아",
    "Name_en": "Armenia",
    "Name_ch": "亚美尼亚",
    "lat": 40.07,
    "lng": 45.04,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "도미니카 공화국",
    "Name_en": "Dominican Republic",
    "Name_ch": "多明尼加共和国",
    "lat": 	18.74,
    "lng":  -70.16,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "카메룬",
    "Name_en": "Cameroon",
    "Name_ch": "喀麦隆",
    "lat": 	7.369722,
    "lng":  12.354722,
    "확진자수": 2,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/7"
  },{
    "Name": "토고",
    "Name_en": "Togo",
    "Name_ch": "多哥",
    "lat": 	8.4,
    "lng":  1.460,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/7"
  },{
    "Name": "콜롬비아",
    "Name_en": "Colombia",
    "Name_ch": "哥伦比亚",
    "lat": 	4.6,
    "lng": -74.0833,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/7"
  },{
    "Name": "바티칸 시국",
    "Name_en": "Vatican City State",
    "Name_ch": "梵蒂冈市国",
    "lat": 	41.54,
    "lng":  12.27,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/7"
  },{
    "Name": "페루",
    "Name_en": "Peru",
    "Name_ch": "秘鲁",
    "lat": 	-9.189967,
    "lng":  -75.015152,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/7"
  },{
    "Name": "요르단",
    "Name_en": "Jordan",
    "Name_ch": "约旦",
    "lat": 	31,
    "lng":  36,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "라트비아",
    "Name_en": "Latvia",
    "Name_ch": "约旦",
    "lat": 56.946,
    "lng": 24.10589,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜":"3/6"
  },{
    "Name": "안도라",
    "Name_en": "Andorra",
    "Name_ch": "安道尔",
    "lat": 42.33,
    "lng": 1.34,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "튀니지",
    "Name_en": "Tunisie",
    "Name_ch": "突尼斯",
    "lat": 34,
    "lng": 9,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "우크라이나",
    "Name_en": "Ukraina",
    "Name_ch": "乌克兰",
    "lat": 48.379433,
    "lng": 31.16558,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "리히텐슈타인",
    "Name_en": "Liechtenstein",
    "Name_ch": "列支敦士登",
    "lat": 47.16,
    "lng": 9.32,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "폴란드",
    "Name_en": "Poland",
    "Name_ch": "波兰",
    "lat": 52,
    "lng": 20,
    "확진자수": 6,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "페로 제도",
    "Name_en": "Faroe Islands",
    "Name_ch": "法罗群岛",
    "lat": 62,
    "lng": -7,
    "확진자수": 2,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "남아프리카 공화국",
    "Name_en": "South Africa",
    "Name_ch": "南非共和国",
    "lat": 29,
    "lng": 24,
    "확진자수": 2,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "코스타리카",
    "Name_en": "Costa Rica",
    "Name_ch": "哥斯达黎加",
    "lat": 9.75,
    "lng": -83.75,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "지브롤터",
    "Name_en": "Gibraltar",
    "Name_ch": "直布罗陀",
    "lat": 36.8,
    "lng": -5.21,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "부탄",
    "Name_en": "Bhutan",
    "Name_ch": "不丹",
    "lat": 27.3,
    "lng": 90.3,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "세르비아",
    "Name_en": "Serbia",
    "Name_ch": "塞尔维亚",
    "lat": 43.57,
    "lng": 21.41,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "세네갈",
    "Name_en": "Senegal",
    "Name_ch": "塞内加尔",
    "lat": 14.497401,
    "lng": -14.452362,
    "확진자수": 4,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜":"3/6"
  },{
    "Name": "칠레",
    "Name_en": "Chile",
    "Name_ch": "智利",
    "lat": -33.45,
    "lng": -70.6667,
    "확진자수": 5,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  },{
    "Name": "헝가리",
    "Name_en": "Hungary",
    "Name_ch": "匈牙利",
    "lat": 47.162494,
    "lng": 19.503304,
    "확진자수": 4,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜":"3/6"
  }, {
    "Name": "독일",
    "Name_en": "Germany",
    "Name_ch": "德国",
    "lat": 51.0968735,
    "lng": 5.9694438,
    "확진자수": 670,
    "사망자수": 0,
    "완치자수": 18
  }, {
    "Name": "인도",
    "Name_en": "India",
    "Name_ch": "印度",
    "lat": 28.5274228,
    "lng": 77.1387735,
    "확진자수": 34,
    "사망자수": 0,
    "완치자수": 3
  }, {
    "Name": "아랍에미리트",
    "Name_en": "United Arab Emirates",
    "Name_ch": "阿拉伯联合酋长国",
    "lat": 24.3870789,
    "lng": 54.4185368,
    "확진자수": 45,
    "사망자수": 0,
    "완치자수": 23
  }, {
    "Name": "중국",
    "Name_en": "China",
    "Name_ch": "中国",
    "lat": 39.9385466,
    "lng": 116.117281,
    "확진자수": 80652,
    "사망자수": 3070,
    "완치자수": 55521
  }, {
    "Name": "일본",
    "Name_en": "Japan",
    "Name_ch": "日本",
    "lat": 34.6777642,
    "lng": 135.4160247,
    "확진자수": 420,
    "사망자수": 6,
    "완치자수": 76
  }, {
    "Name": "일본크루즈",
    "Name_en": "Japan Cruise ship",
    "Name_ch": "日本 邮轮",
    "lat": 34.6777642,
    "lng": 135.4160247,
    "확진자수": 705,
    "사망자수": 7,
    "완치자수": 245
  },
  {
    "Name": "쿠웨이트",
    "Name_en": "Kuwait",
    "Name_ch": "科威特",
    "lat": 29.376150,
    "lng": 47.977308,
    "확진자수": 58,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "2/25"
  },
  {
    "Name": "이라크",
    "Name_en": "Iraq",
    "Name_ch": "伊拉克",
    "lat": 33.294967,
    "lng": 44.364783,
    "확진자수": 48,
    "사망자수": 4,
    "완치자수": 1,
    "추가날짜": "2/25"
  },
  {
    "Name": "바레인",
    "Name_en": "Bahrain",
    "Name_ch": "巴林",
    "lat": 34.561213,
    "lng": 69.210980,
    "확진자수": 66,
    "사망자수": 0,
    "완치자수": 4,
    "추가날짜": "2/25"
  },
  {
    "Name": "오만",
    "Name_en": "Oman",
    "Name_ch": "阿曼",
    "lat": 23.577151,
    "lng": 58.371409,
    "확진자수": 16,
    "사망자수": 0,
    "완치자수": 2,
    "추가날짜": "2/25"
  },
  {
    "Name": "오스트리아",
    "Name_en": "Austria",
    "Name_ch": "奥地利",
    "lat": 48.220599,
    "lng": 16.239634,
    "확진자수": 66,
    "사망자수": 0,
    "완치자수": 2,
    "추가날짜": "2/26"
  },
  {
    "Name": "아이슬란드",
    "Name_en": "Ireland",
    "Name_ch": "爱尔兰",
    "lat": 53.3331,
    "lng": -6.2489,
    "확진자수": 18,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "3/7"
  },
  {
    "Name": "아일랜드",
    "Name_en": "Iceland",
    "Name_ch": "冰岛",
    "lat": 64.963051,
    "lng": -19.020835,
    "확진자수": 45,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "3/6"
  },
  {
    "Name": "슬로베니아",
    "Name_en": "Slovenia",
    "Name_ch": "斯洛文尼亚",
    "lat": 64.963051,
    "lng": -19.020835,
    "확진자수": 12,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "3/6"
  },
  {
    "Name": "슬로바키아",
    "Name_en": "Slovakia",
    "Name_ch": "斯洛伐克",
    "lat": 48.4,
    "lng": 19.3,
    "확진자수": 1,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "3/6"
  },
  {
    "Name": "그리스",
    "Name_en": "Greece",
    "Name_ch": "希腊",
    "lat": 37.97945,
    "lng": 23.71622,
    "확진자수": 45,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "3/6"
  },
  {
    "Name": "아프가니스탄",
    "Name_en": "Afghanistan",
    "Name_ch": "阿富汗",
    "lat": 26.225355,
    "lng": 50.580098,
    "확진자수": 3,
    "사망자수": 1,
    "완치자수": 2,
    "추가날짜": "2/25"
  },
  {
    "Name": "알제리",
    "Name_en": "Algeria",
    "Name_ch": "阿尔及利亚",
    "lat": 36.722930,
    "lng": 3.0595322,
    "확진자수": 17,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "2/26"
  },
  {
    "Name": "크로아티아",
    "Name_en": "Croatia",
    "Name_ch": "克罗地亚",
    "lat": 45.809237,
    "lng": 15.817735,
    "확진자수": 11,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "2/26"
  },
  {
    "Name": "스위스",
    "Name_en": "Switzerland",
    "Name_ch": "瑞士",
    "lat": 46.945735,
    "lng": 7.3077371,
    "확진자수": 268,
    "사망자수": 1,
    "완치자수": 3,
    "추가날짜": "2/26"
  },
  {
    "Name": "브라질",
    "Name_en": "Brazil",
    "Name_ch": "巴西",
    "lat": -15.775082,
    "lng": -48.077963,
    "확진자수": 13,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "2/26"
  },
  {
    "Name": "산마리노",
    "Name_en": "Brazil",
    "Name_ch": "圣马力诺",
    "lat": 43.9810089,
    "lng": 12.4896372,
    "확진자수": 23,
    "사망자수": 1,
    "완치자수": 0,
    "추가날짜": "3/6"
  },
  {
    "Name": "에콰도르",
    "Name_en": "Ecuador",
    "Name_ch": "厄瓜多尔",
    "lat": -1.831239,
    "lng": -78.183406,
    "확진자수": 13,
    "사망자수": 0,
    "완치자수": 0,
    "추가날짜": "3/6"
  },
  {
    "Name": "멕시코",
    "Name_en": "Mexico",
    "Name_ch": "墨西哥",
    "lat": 19.4978,
    "lng": -99.1269,
    "확진자수": 6,
    "사망자수": 0,
    "완치자수": 1,
    "추가날짜": "3/6"
  },
  {
    "Name": "한국",
    "Name_en": "Korea, Republic of",
    "Name_ch": "韩国",
    "lat": 37.5456299,
    "lng": 126.9540667,
    "확진자수": 7041,
    "사망자수": 49,
    "격리자수": 6605,
    "완치자수": 118,
    "검사진행": 19620
  },
  {
    "Name": "제주",
    "Name_en": "Jeju",
    "Name_ch": "濟州",
    "lat": 33.50972,
    "lng": 126.52194,
    "확진자수": 4,
    "사망자수": 0,
    "격리자수": 0,
    "완치자수": 0,
    "검사진행": 60
  }
];

// 선차트용 데이터 세계 확진자수, 세계 사망자수, 세계 완치자수
// 세계 확진자수, 세계 사망자수는 질병관리본부 데이터 근거
// 세계 완치자수는 존스 홉킨스 코로나 맵 데이터에 근거

// 질본(data, data2) : http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=&brdGubun=&ncvContSeq=&contSeq=&board_id=&gubun=
// data : 확진환자
// data2 : 사망
// 존스홉킨스(data3) : https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6
// data3 : 완치자

var marker2 = {
  //날짜
  labels: ["1/24", "1/25", "1/26", "1/27", "1/28", "1/29", "1/30", "1/31", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9", "2/10", "2/11", "2/12", "2/13", "2/14", "2/15", "2/16", "2/17", "2/18", "2/19", "2/20", "2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27", "2/28", "2/29", "3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3/7"],
  //전세계 확진환자
  data: [845, 1315, 2010, 2794, 4576, 6056, 7812, 9812, 11925, 14550, 17378, 20619, 24524, 28253, 31422, 34929, 37607, 40597, 43099, 45260, 59287, 64420, 67097, 69195, 71673, 73326, 75196, 75710, 76563, 77778, 78346, 78595, 80294, 81467, 82227,
    83706, //2월 28일
    85329, //2월 29일
    87199, //3월 1일
    89217, //3월 2일
    90920, //3월 3일
    93036, //3월 4일
    95479, //3월 5일
    98875, //3월 6일
    102050, //3월 7일
    104144, //3월 8일
  ],
  //사망자
  data2: [25, 41, 56, 80, 106, 132, 170, 213, 259, 304, 362, 426, 492, 565, 638, 724, 813, 910, 1016, 1115, 1115, 1382, 1526, 1669, 1775, 1873, 2009, 2124, 2246, 2359, 2456, 2612, 2707, 2766, 2801,
    2860, //2월 28일
    2924, //2월 29일
    2980, //3월 1일
    3058, //3월 2일
    3125, //3월 3일
    3168, //3월 4일
    3288, //3월 5일
    3393, //3월 6일
    3494, //3월 7일
    3526, //3월 8일
  ],
  //완치자
  data3: [36, 49, 54, 63, 110, 133, 141, 220, 284, 487, 621, 899, 1100, 1500, 2000, 2600, 3200, 3300, 3957, 4849, 5924, 6982, 8158, 9600, 10892, 12604, 14417, 16195, 18327, 20707, 23377, 25038, 27806, 30199, 32898,
    36636, //2월 28일
    39448, //2월 29일
    42326, //3월 1일
    45185, //3월 2일
    48129, //3월 3일
    48596, //3월 4일
    53688, //3월 5일
    55696, //3월 6일
    57611, //3월 7일
    58559, //3월 8일
  ]
}

// 선차트용 데이터
// 바울랩 메일 참고

var 입도객현황 = {
  날짜: ["19년평균", "2/3", "2/4", "2/5", "2/6", "2/8", "2/9", "2/10", "2/11", "2/12", "2/13", "2/16", "2/17", "2/18", "2/19", "2/20", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27",
    "2/29",
    "3/1",
    "3/2",
    "3/3",
    "3/4",
  ],
  내국인: [37150, 19209, 17633, 15873, 17184, 20488, 18959, 19074, 18922, 18720, 24409, 26120, 25105, 27135, 27247, 29316, 23732, 20508, 16379, 14567, 13978, 13318,
    14855, //2월 29일
    13402, //3월 1일
    15628, //3월 2일
    15668, //3월 3일
    14598, //3월 4일
  ],
  외국인: [4729, 1866, 1285, 1247, 1280, 1127, 976, 906, 1003, 755, 793, 769, 639, 453, 623, 815, 762, 613, 524, 598, 351, 383,
    320, //2월 29일
    337, //3월 1일
    270, //3월 2일
    343, //3월 3일
    205, //3월 4일
  ],
  중국인: [2957, 755, 156, 116, 157, 86, 209, 66, 76, 103, 52, 186, 6, 12, 100, 7, 9, 7, 6, 6, 1, 24,
    33, //2월 29일
    69, //3월 1일
    61, //3월 2일
    54, //3월 3일
    24, //3월 4일
  ]
}

// This is a bad way to copy, but for now it will suffice.
// 네이버 지도 API가 로드된 후 marker를 수정하기 때문에 일단 copy를 진행하지만 수정이 필요한 코드입니다.
var _marker = JSON.parse(JSON.stringify(marker));

// 업데이트 일시 데이터
var updateLog = {
<<<<<<< HEAD
  date: "3/8",
  time: "00:40"
=======
  date: "3/7",
  time: "17:00"
>>>>>>> 914aac0ab1a7d7e8e65f1e4ea0992caf4f3c169c
};

//KBS 또는 중앙방역대책본부 데이터 참고해주세요.
var 지역별확진자_업데이트_시간 = "3/7 10:00";
var 지역별확진자 = [
  108, //서울
  9, //인천
  130, //경기
  2, //세종
  18, //대전
  92, //충남
  7, //전북
  13, //광주
  4, //전남
  26, //강원
  20, //충북
  1049, //경북
  5084, //대구
  82, //경남
  23, //울산
  96, //부산
  4, //제주
];

// 한국 확진자 분석을 위한 데이터
// 참고링크 : https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EC%BD%94%EB%A1%9C%EB%82%98%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4%EA%B0%90%EC%97%BC%EC%A6%9D-19_%EC%9C%A0%ED%96%89
// 누적 확진자, 차이, 누적 사망자
// 참고사항 : 한국 확진자 오후 업데이트 되면 여기도 업데이트 부탁드립니다.
var 분석차트_한국누적확진자 = [
  // ["1/20",1, 1, 0],
  // ["1/21",1, 0, 0],
  // ["1/22",1, 0, 0],
  // ["1/23",1, 0, 0],
  // ["1/24",2, 1, 0],
  // ["1/25",2, 0, 0],
  // ["1/26",3, 1, 0],
  // ["1/27",4, 1, 0],
  // ["1/28",4, 0, 0],
  // ["1/29",4, 0, 0],
  // ["1/30",6, 2, 0],
  // ["1/31",11, 5, 0],
  ["2/1", 12, 1, 0],
  ["2/2", 15, 3, 0],
  ["2/3", 15, 0, 0],
  ["2/4", 16, 1, 0],
  ["2/5", 19, 3, 0],
  ["2/6", 23, 4, 0],
  ["2/7", 24, 1, 0],
  ["2/8", 24, 0, 0],
  ["2/9", 27, 3, 0],
  ["2/10", 27, 0, 0],
  ["2/11", 28, 1, 0],
  ["2/12", 28, 0, 0],
  ["2/13", 28, 0, 0],
  ["2/14", 28, 0, 0],
  ["2/15", 28, 0, 0],
  ["2/16", 29, 1, 0],
  ["2/17", 30, 1, 0],
  ["2/18", 31, 1, 0],
  ["2/19", 51, 20, 0],
  ["2/20", 104, 53, 1],
  ["2/21", 204, 100, 2],
  ["2/22", 433, 229, 2],
  ["2/23", 602, 169, 6],
  ["2/24", 833, 231, 8],
  ["2/25", 977, 144, 12],
  ["2/26", 1261, 284, 13],
  ["2/27", 1766, 505, 13],
  ["2/28", 2337, 571, 16],
  ["2/29", 3150, 813, 17],
  ["3/1", 4212, 1062, 21],
  ["3/2", 4812, 600, 22],
  ["3/3", 5328, 516, 28],
  ["3/4", 5766, 438, 32],
  ["3/5", 6284, 518, 43],
  ["3/6", 6767, 483, 44],
  ["3/7", 7041, 274, 49],
];
