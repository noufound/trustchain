import "../styles/core-css-style.css";
import "../styles/ux.css";
import "../styles/_root.scss";
import Footer from "@/components/footer";
import Header from "@/components/header";
import StockCard from "@/components/StockCard";
import SecondaryNav from "@/components/SecondaryNav";
import MapWithRoutes from "@/components/MapWithRoutes";
import { getDictionary } from "@/dictionaries"; // 添加导入
import { PageProps } from "@/types/params";
import Link from "next/link";
export const runtime = "edge";
const klineData = [
  [
    "102027.19000000",
    "102447.47000000",
    "101819.10000000",
    "102010.00000000",
    "101496.18000000",
    "101013.66000000",
    "100770.85000000",
    "100411.89000000",
    "99638.28000000",
    "100347.35000000",
    "100806.08000000",
    "100797.95000000",
    "101169.20000000",
    "102397.12000000",
    "102609.46000000",
    "103395.25000000",
    "103783.09000000",
    "103879.23000000",
    "103633.03000000",
    "103339.08000000",
    "102713.15000000",
    "102996.84000000",
    "102846.65000000",
    "102592.76000000",
    "102565.03000000",
    "102304.00000000",
    "102215.62000000",
    "102352.96000000",
    "102431.74000000",
    "102399.46000000",
    "102480.04000000",
    "101857.10000000",
    "102065.14000000",
    "101804.63000000",
    "101827.19000000",
    "101711.45000000",
    "101850.22000000",
    "101994.52000000",
    "102139.53000000",
    "101989.65000000",
    "102068.06000000",
    "102272.81000000",
    "102377.46000000",
    "102312.94000000",
    "101797.74000000",
    "102045.07000000",
    "101633.25000000",
    "101662.05000000",
    "101724.91000000",
    "101928.54000000",
    "101752.83000000",
    "101944.59000000",
    "101972.94000000",
    "101657.46000000",
    "101876.36000000",
    "102239.41000000",
    "102086.90000000",
    "102911.39000000",
    "103037.90000000",
    "103762.17000000",
    "103845.04000000",
    "103637.57000000",
    "104512.65000000",
    "104805.57000000",
    "104633.12000000",
    "104528.82000000",
    "104732.48000000",
    "104722.96000000",
    "106314.96000000",
    "105699.99000000",
    "106006.69000000",
    "106027.97000000",
    "106153.14000000",
    "106100.00000000",
    "106221.88000000",
    "106461.45000000",
    "105965.46000000",
    "106440.00000000",
    "105995.26000000",
    "106176.50000000",
    "105944.17000000",
    "106548.02000000",
    "104898.15000000",
    "105079.99000000",
    "105242.05000000",
    "105953.10000000",
    "105478.00000000",
    "105817.99000000",
    "106010.73000000",
    "105631.27000000",
    "106062.80000000",
    "106011.13000000",
    "106139.83000000",
    "106110.36000000",
    "106655.02000000",
    "106456.00000000",
    "105755.32000000",
    "105249.35000000",
    "105261.27000000",
    "104783.98000000",
    "105157.80000000",
    "104971.63000000",
    "105176.38000000",
    "105311.90000000",
    "104530.83000000",
    "104390.92000000",
    "104560.16000000",
    "103455.99000000",
    "103399.43000000",
    "103338.99000000",
    "103401.07000000",
    "103126.39000000",
    "102809.27000000",
    "102633.92000000",
    "103000.01000000",
    "103058.99000000",
    "102885.99000000",
    "103254.64000000",
    "103151.66000000",
    "103399.98000000",
  ],
  [
    "3338.42000000",
    "3366.78000000",
    "3348.02000000",
    "3358.42000000",
    "3342.04000000",
    "3301.48000000",
    "3280.55000000",
    "3259.97000000",
    "3223.05000000",
    "3240.99000000",
    "3289.43000000",
    "3297.52000000",
    "3309.20000000",
    "3385.63000000",
    "3426.17000000",
    "3443.60000000",
    "3465.25000000",
    "3468.83000000",
    "3445.89000000",
    "3436.05000000",
    "3424.55000000",
    "3437.27000000",
    "3440.90000000",
    "3454.19000000",
    "3459.00000000",
    "3431.18000000",
    "3445.45000000",
    "3447.90000000",
    "3454.73000000",
    "3439.88000000",
    "3446.01000000",
    "3413.03000000",
    "3408.86000000",
    "3396.83000000",
    "3399.77000000",
    "3376.79000000",
    "3368.03000000",
    "3399.29000000",
    "3402.77000000",
    "3389.35000000",
    "3397.94000000",
    "3405.99000000",
    "3409.50000000",
    "3401.51000000",
    "3384.77000000",
    "3400.92000000",
    "3368.11000000",
    "3375.80000000",
    "3374.69000000",
    "3405.53000000",
    "3405.30000000",
    "3422.78000000",
    "3421.50000000",
    "3400.97000000",
    "3401.59000000",
    "3428.37000000",
    "3441.58000000",
    "3458.90000000",
    "3507.02000000",
    "3515.51000000",
    "3528.19000000",
    "3515.51000000",
    "3541.54000000",
    "3580.00000000",
    "3579.17000000",
    "3580.96000000",
    "3587.35000000",
    "3583.46000000",
    "3635.97000000",
    "3629.90000000",
    "3628.60000000",
    "3627.47000000",
    "3617.30000000",
    "3607.88000000",
    "3605.64000000",
    "3609.09000000",
    "3594.16000000",
    "3624.36000000",
    "3606.72000000",
    "3610.57000000",
    "3591.80000000",
    "3615.50000000",
    "3541.62000000",
    "3519.46000000",
    "3530.11000000",
    "3555.51000000",
    "3532.89000000",
    "3558.55000000",
    "3571.95000000",
    "3541.79000000",
    "3575.91000000",
    "3567.85000000",
    "3585.85000000",
    "3581.06000000",
    "3615.66000000",
    "3606.10000000",
    "3575.02000000",
    "3548.82000000",
    "3557.70000000",
    "3544.67000000",
    "3563.40000000",
    "3556.11000000",
    "3560.74000000",
    "3574.14000000",
    "3540.37000000",
    "3532.65000000",
    "3529.92000000",
    "3481.10000000",
    "3485.11000000",
    "3473.65000000",
    "3468.86000000",
    "3456.81000000",
    "3438.26000000",
    "3417.66000000",
    "3429.90000000",
    "3417.76000000",
    "3418.13000000",
    "3447.45000000",
    "3427.23000000",
    "3443.80000000",
  ],
  [
    "961.34000000",
    "968.75000000",
    "964.81000000",
    "970.06000000",
    "966.98000000",
    "956.96000000",
    "950.36000000",
    "942.57000000",
    "933.11000000",
    "936.08000000",
    "943.97000000",
    "944.73000000",
    "951.68000000",
    "968.65000000",
    "980.71000000",
    "981.81000000",
    "987.87000000",
    "994.49000000",
    "990.60000000",
    "991.15000000",
    "980.63000000",
    "990.92000000",
    "997.45000000",
    "996.72000000",
    "994.00000000",
    "989.30000000",
    "994.49000000",
    "995.38000000",
    "999.77000000",
    "995.09000000",
    "995.99000000",
    "989.60000000",
    "994.53000000",
    "988.20000000",
    "993.94000000",
    "990.80000000",
    "988.11000000",
    "995.38000000",
    "1004.09000000",
    "996.32000000",
    "997.24000000",
    "997.89000000",
    "996.00000000",
    "991.03000000",
    "989.80000000",
    "994.03000000",
    "983.19000000",
    "981.07000000",
    "987.00000000",
    "989.10000000",
    "987.82000000",
    "989.60000000",
    "988.26000000",
    "987.06000000",
    "987.69000000",
    "990.30000000",
    "988.24000000",
    "986.44000000",
    "987.50000000",
    "994.46000000",
    "1002.36000000",
    "993.46000000",
    "999.65000000",
    "1004.96000000",
    "998.90000000",
    "997.39000000",
    "997.00000000",
    "996.63000000",
    "1013.09000000",
    "1011.17000000",
    "1015.48000000",
    "1013.16000000",
    "1011.30000000",
    "1006.97000000",
    "1008.25000000",
    "1005.98000000",
    "998.28000000",
    "1004.93000000",
    "998.90000000",
    "999.49000000",
    "996.71000000",
    "1003.07000000",
    "984.30000000",
    "980.04000000",
    "980.41000000",
    "987.27000000",
    "982.48000000",
    "987.89000000",
    "989.29000000",
    "986.68000000",
    "994.98000000",
    "991.98000000",
    "993.94000000",
    "997.68000000",
    "1003.83000000",
    "1000.92000000",
    "988.74000000",
    "983.17000000",
    "984.09000000",
    "974.63000000",
    "977.63000000",
    "975.56000000",
    "978.69000000",
    "980.75000000",
    "980.08000000",
    "977.55000000",
    "983.75000000",
    "975.70000000",
    "975.19000000",
    "967.25000000",
    "968.00000000",
    "961.27000000",
    "960.29000000",
    "958.92000000",
    "964.60000000",
    "958.08000000",
    "956.33000000",
    "963.80000000",
    "961.19000000",
    "962.21000000",
  ],
  [
    "2.22160000",
    "2.23640000",
    "2.22230000",
    "2.23350000",
    "2.21890000",
    "2.20100000",
    "2.18500000",
    "2.18790000",
    "2.16870000",
    "2.18670000",
    "2.20550000",
    "2.21290000",
    "2.26390000",
    "2.30950000",
    "2.33650000",
    "2.35290000",
    "2.36450000",
    "2.34310000",
    "2.32990000",
    "2.31540000",
    "2.30050000",
    "2.31040000",
    "2.31690000",
    "2.31860000",
    "2.32660000",
    "2.31500000",
    "2.32310000",
    "2.32240000",
    "2.32180000",
    "2.31150000",
    "2.31320000",
    "2.29570000",
    "2.29420000",
    "2.27870000",
    "2.27630000",
    "2.25590000",
    "2.26470000",
    "2.27080000",
    "2.27800000",
    "2.27320000",
    "2.27820000",
    "2.28590000",
    "2.28730000",
    "2.28630000",
    "2.27430000",
    "2.28490000",
    "2.25880000",
    "2.25390000",
    "2.26120000",
    "2.27140000",
    "2.27970000",
    "2.29580000",
    "2.28060000",
    "2.26920000",
    "2.26680000",
    "2.27510000",
    "2.27500000",
    "2.27770000",
    "2.29130000",
    "2.31450000",
    "2.32620000",
    "2.30880000",
    "2.32780000",
    "2.34900000",
    "2.34000000",
    "2.33810000",
    "2.35390000",
    "2.36620000",
    "2.41620000",
    "2.39930000",
    "2.42390000",
    "2.46130000",
    "2.46440000",
    "2.45260000",
    "2.47210000",
    "2.48060000",
    "2.49630000",
    "2.53840000",
    "2.54040000",
    "2.54100000",
    "2.52990000",
    "2.55610000",
    "2.50930000",
    "2.52960000",
    "2.52910000",
    "2.55060000",
    "2.53850000",
    "2.54910000",
    "2.56380000",
    "2.51770000",
    "2.53200000",
    "2.52600000",
    "2.54100000",
    "2.52490000",
    "2.53730000",
    "2.53010000",
    "2.50060000",
    "2.47610000",
    "2.47340000",
    "2.44770000",
    "2.45460000",
    "2.45720000",
    "2.46340000",
    "2.46050000",
    "2.45750000",
    "2.44460000",
    "2.46300000",
    "2.43680000",
    "2.43160000",
    "2.43060000",
    "2.42480000",
    "2.41610000",
    "2.40840000",
    "2.38730000",
    "2.40310000",
    "2.39150000",
    "2.38400000",
    "2.40550000",
    "2.39360000",
    "2.40080000",
  ],
  [
    "0.53920000",
    "0.54530000",
    "0.54230000",
    "0.54790000",
    "0.54710000",
    "0.54090000",
    "0.53510000",
    "0.53110000",
    "0.52380000",
    "0.52730000",
    "0.53700000",
    "0.54420000",
    "0.56740000",
    "0.57840000",
    "0.57970000",
    "0.58020000",
    "0.58180000",
    "0.58560000",
    "0.58310000",
    "0.57630000",
    "0.57440000",
    "0.58360000",
    "0.58510000",
    "0.58230000",
    "0.58650000",
    "0.57830000",
    "0.57770000",
    "0.58250000",
    "0.58390000",
    "0.57640000",
    "0.57870000",
    "0.57470000",
    "0.57700000",
    "0.56670000",
    "0.56490000",
    "0.55740000",
    "0.55830000",
    "0.56090000",
    "0.56310000",
    "0.56090000",
    "0.56280000",
    "0.56420000",
    "0.56730000",
    "0.56880000",
    "0.56070000",
    "0.56370000",
    "0.55270000",
    "0.55040000",
    "0.55450000",
    "0.55590000",
    "0.55650000",
    "0.56290000",
    "0.55920000",
    "0.55350000",
    "0.55890000",
    "0.56270000",
    "0.56310000",
    "0.56460000",
    "0.57090000",
    "0.57540000",
    "0.57760000",
    "0.57170000",
    "0.57720000",
    "0.58300000",
    "0.58020000",
    "0.57960000",
    "0.57720000",
    "0.57900000",
    "0.58750000",
    "0.58390000",
    "0.58520000",
    "0.58840000",
    "0.58980000",
    "0.58980000",
    "0.58690000",
    "0.58940000",
    "0.58730000",
    "0.60020000",
    "0.59480000",
    "0.59590000",
    "0.59340000",
    "0.59720000",
    "0.58470000",
    "0.58490000",
    "0.58120000",
    "0.58720000",
    "0.58400000",
    "0.58830000",
    "0.59150000",
    "0.58800000",
    "0.59750000",
    "0.59280000",
    "0.59320000",
    "0.59370000",
    "0.60170000",
    "0.59880000",
    "0.58940000",
    "0.58280000",
    "0.58350000",
    "0.57590000",
    "0.57760000",
    "0.57550000",
    "0.57960000",
    "0.58030000",
    "0.57890000",
    "0.57560000",
    "0.58170000",
    "0.57220000",
    "0.57180000",
    "0.57050000",
    "0.56880000",
    "0.56230000",
    "0.55970000",
    "0.55630000",
    "0.56120000",
    "0.55640000",
    "0.55420000",
    "0.55970000",
    "0.55830000",
    "0.56130000",
  ],
  [
    "156.17000000",
    "158.09000000",
    "156.80000000",
    "157.79000000",
    "157.30000000",
    "154.74000000",
    "154.25000000",
    "153.85000000",
    "151.64000000",
    "152.31000000",
    "154.76000000",
    "155.42000000",
    "157.29000000",
    "161.16000000",
    "162.11000000",
    "164.17000000",
    "163.36000000",
    "163.52000000",
    "163.22000000",
    "161.79000000",
    "160.88000000",
    "162.04000000",
    "163.41000000",
    "162.52000000",
    "162.71000000",
    "161.37000000",
    "161.14000000",
    "161.06000000",
    "161.56000000",
    "161.13000000",
    "160.82000000",
    "159.39000000",
    "159.43000000",
    "158.21000000",
    "157.67000000",
    "156.65000000",
    "156.76000000",
    "157.60000000",
    "157.96000000",
    "157.36000000",
    "157.69000000",
    "158.05000000",
    "158.02000000",
    "158.02000000",
    "156.84000000",
    "158.18000000",
    "156.02000000",
    "155.88000000",
    "157.23000000",
    "158.11000000",
    "158.26000000",
    "159.30000000",
    "159.46000000",
    "158.27000000",
    "158.44000000",
    "159.06000000",
    "159.10000000",
    "160.06000000",
    "160.15000000",
    "162.53000000",
    "162.93000000",
    "161.80000000",
    "163.99000000",
    "166.15000000",
    "165.33000000",
    "165.22000000",
    "165.44000000",
    "164.53000000",
    "167.50000000",
    "167.07000000",
    "167.76000000",
    "168.12000000",
    "168.03000000",
    "167.54000000",
    "166.94000000",
    "167.38000000",
    "166.64000000",
    "169.47000000",
    "168.35000000",
    "168.33000000",
    "168.13000000",
    "169.72000000",
    "166.15000000",
    "166.26000000",
    "166.11000000",
    "167.84000000",
    "165.66000000",
    "167.19000000",
    "167.85000000",
    "165.52000000",
    "167.64000000",
    "167.31000000",
    "167.51000000",
    "167.41000000",
    "170.28000000",
    "169.97000000",
    "166.92000000",
    "165.16000000",
    "164.95000000",
    "163.98000000",
    "164.01000000",
    "164.02000000",
    "163.77000000",
    "163.69000000",
    "163.34000000",
    "162.81000000",
    "163.00000000",
    "160.89000000",
    "160.64000000",
    "159.51000000",
    "158.96000000",
    "157.58000000",
    "156.77000000",
    "156.08000000",
    "156.68000000",
    "154.63000000",
    "153.83000000",
    "155.42000000",
    "154.30000000",
    "154.81000000",
  ],
];
// 股票数据（包含密集的K线数据点，119个数据点）
const stockData = [
  {
    company: "NVIDIA",
    ticker: "NVDAon",
    price: 195.22,
    change: -5.77,
    changePercent: -2.87,
    chartData: klineData[0].map(Number), // 转换字符串为数字
  },
  {
    company: "Pfizer",
    ticker: "PFEon",
    price: 26.02,
    change: 1.06,
    changePercent: 4.23,
    chartData: klineData[1].map(Number),
  },
  {
    company: "Apple",
    ticker: "AAPLon",
    price: 178.5,
    change: 2.3,
    changePercent: 1.31,
    chartData: klineData[2].map(Number),
  },
  {
    company: "Microsoft",
    ticker: "MSFTon",
    price: 420.15,
    change: -3.25,
    changePercent: -0.77,
    chartData: klineData[3].map(Number),
  },
  {
    company: "Tesla",
    ticker: "TSLAon",
    price: 245.8,
    change: 8.5,
    changePercent: 3.59,
    chartData: klineData[4].map(Number),
  },
  {
    company: "Amazon",
    ticker: "AMZNon",
    price: 152.3,
    change: 1.2,
    changePercent: 0.79,
    chartData: klineData[5].map(Number),
  },
];

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // en
  console.log("dict:", lang);

  // 地图城市坐标配置
  const mapCities = {
    // 三大核心枢纽
    hongKong: { x: 77.8, y: 50.5 },
    singapore: { x: 74.3, y: 59.3 },
    tokyo: { x: 84.6, y: 44.3 },
    // 辐射城市
    seoul: { x: 81.5, y: 42.2 },
    newDelhi: { x: 66.7, y: 53 },
    sydney: { x: 88.2, y: 78.8 },
    kualaLumpur: { x: 73.6, y: 57 },
    dubai: { x: 60.1, y: 51.8 },
    berlin: { x: 50.4, y: 35.3 },
    moscow: { x: 60.1, y: 23.6 },
    saoPaulo: { x: 30.9, y: 78.3 },
    toronto: { x: 88.2, y: 83.4 },
    newYork: { x: 13.9, y: 41.1 },
  };

  // 地图航线配置（格式：[起点, 终点]）
  const mapRoutes = {
    hongKong: ["seoul", "newDelhi", "sydney", "kualaLumpur", "newYork"],
    singapore: ["sydney", "dubai", "berlin", "moscow"],
    tokyo: ["newYork", "moscow", "seoul", "saoPaulo", "toronto"],
  };

  // 导航项配置
  const navItems = [
    {
      id: "section1",
      label: dict.home.feature1,
      icon: "c-i-briefcase", // 产品与方案 - 公文包图标
    },
    {
      id: "section2",
      label: dict.home.feature2,
      icon: "c-i-link", // 链上优势 - 链接图标
    },
    {
      id: "section3",
      label: dict.home.feature3,
      icon: "c-i-lightbulb", // 精选 - 灯泡图标
    },
    {
      id: "section6",
      label: dict.home.feature4,
      icon: "c-i-location-point", // 区域 - 位置图标
    },
  ];

  return (
    <div className="home">
      <Header lang={{ dict }} locale={{ lang }} />
      <main
        className="colors-teal-pink service-page-template"
        id="main-content"
        tabIndex={-1}
        itemProp="articleBody"
      >
        <section
          aria-labelledby="hero-headline"
          id="hero"
          className="page-section page-section-hero page-section-hero-home page-section-set-bg-image-home bg-white position-relative overflow-hidden in-view"
          tabIndex={0}
        >
          <div className="d-none d-md-block page-section-inline-img-container position-absolute">
            <img
              aria-hidden="true"
              src="/images/banner.jpg"
              alt="banner"
              className="page-section-inline-img position-relative"
            />
          </div>
          <div className="container-fluid container-xl page-section-container">
            <div className="row py-5">
              <div className="col-12 col-md-6 col-lg-5 col-xl-6 position-relative d-flex align-items-center">
                <div className="page-section-headline-container w-100 ps-lg-3 pe-xl-4">
                  <div className="section-headline-top-border bg-primary-to-lightgreen"></div>
                  <h1 id="hero-headline" className="text-navy lh-1 display-5">
                    {dict.home.slogon}
                    <br className="d-lg-none d-xl-block" />
                    {dict.home.slogon2}
                  </h1>
                  <div className="pe-xl-5">
                    <p className="pe-lg-3 pe-xl-5">{dict.home.subslogon}</p>
                  </div>
                  <div className="hero-left-button mt-5 d-flex justify-content-center justify-content-md-start">
                    <Link
                      className="btn btn-primary text-uppercase rounded-pill d-flex align-items-center px-4 py-2"
                      href={`/${lang}/service/contact-sales/`}
                      style={{
                        backgroundColor: "var(--primary-color)",
                        borderColor: "var(--primary-color)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="csc-icon c-i-chat-bubbles-blank me-2"
                      ></span>
                      {dict.home.slogonbutton}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SecondaryNav items={navItems} />
        <div className="sticky-indicator position-absolute"></div>
        <section
          aria-labelledby="section1-headline"
          id="section1"
          className="page-section px-3 px-xl-0 py-5 bg-teal"
          tabIndex={0}
        >
          <div className="container-fluid container-xl page-section-container rounded-3 bg-white mb-lg-5">
            <div className="row px-4 px-md-5 pt-5 pb-4">
              <div className="col">
                <div className="page-section-headline-container">
                  <div className="section-headline-top-border bg-teal"></div>
                  <h2 id="section1-headline" className="text-navy display-6">
                    {dict.home.assetdiscover}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pb-5">
              {stockData.map((stock, index) => (
                <div key={index} className="col">
                  <StockCard stock={stock} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          aria-labelledby="section2-headline"
          id="section2"
          className="page-section bg-lightergray py-5"
          tabIndex={0} // 改成 tabIndex 并使用数字
        >
          <div className="container-fluid container-xl page-section-container px-3 px-xl-0 my-xxl-3">
            <div className="rounded-3 bg-navyteal-ltor px-4 ps-sm-3 pe-sm-1 ps-md-4 ps-lg-5 pe-lg-3 py-3">
              <div className="row align-items-center">
                <div className="col-sm-12 col-md-5 col-lg-6 py-3 py-lg-4 py-xl-0 ps-lg-3">
                  <h2
                    id="section2-headline"
                    className="avenir-heavy text-white mb-0"
                  >
                    {dict.home.createTrustDESC1}
                    <br className="d-none d-md-block" />
                  </h2>
                  <h3 className={`avenir-light text-white h5 mt-3`}>
                    {dict.home.createTrustDESC2}
                  </h3>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-6 d-sm-block">
                  <img
                    aria-hidden="true"
                    src="/images/2.png"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="section3-headline"
          id="section3"
          className="page-section bg-bluegraylightblue-ltor px-3 px-xl-0 py-5 position-relative"
          tabIndex={0}
        >
          <div className="container-fluid container-xl page-section-container position-relative pb-xxl-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-5 col-xxl-4 rounded-3 bg-white shadow position-xxl-absolute homepage-video-intro px-4 px-xxl-5 py-4 pt-xxl-5 mt-xxl-3">
                <div className="page-section-headline-container pb-4 pb-md-5 pt-xl-1 pb-xl-1">
                  <div className="section-headline-top-border bg-teal"></div>
                  <h2 id="section3-headline" className="text-navy lh-1 h3">
                    {dict.home.truststructure}
                    {/* <br className="d-none d-xxl-block" />An Unwavering Commitment. */}
                  </h2>
                  <p className={lang === "cn" ? "pt-4" : "pt-2"}>
                    {dict.home.truststructureDESC}
                  </p>
                  {/* <div className="hero-left-button mt-4 mt-lg-5 mt-xl-4">
                    <Link className="btn btn-navy rounded-pill text-uppercase" href={`/${lang}/service/about/`}>
                          {dict.home.truststructureButton}
                          
                      <span className="visually-hidden"> about CSC and out history</span>
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-7 col-xxl-9 mt-sm-4 offset-xxl-3 rounded-3 homepage-video-column mt-xxl-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="modal-video rounded-2 shadow-lg"
                    src="https://www.youtube.com/embed/ZqJxv5PiPJo?si=XZ696tgF0YhCZ6OX&amp;controls=0&amp;start=270"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="section4-headline"
          id="section4"
          className="page-section px-3 px-xl-0 py-5"
          tabIndex={0}
        >
          <div className="container-fluid container-xl page-section-container">
            <div className="row">
              <div className="col px-0">
                <div className="page-section-headline-container mb-0">
                  <div className="section-headline-top-border bg-teal"></div>
                  <h2 id="section4-headline" className="text-navy display-6 h4">
                    {dict.home.rules}
                  </h2>
                  <p className="mb-0">{dict.home.rulesdesc}</p>
                </div>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 page-section-content page-section-rolling-stats justify-content-center mt-2"
                  data-element="stats-row"
                >
                  {/* <div className="col-12 col-sm-6 col-lg-3 csc-card-col mt-0">
                    <div className="card csc-card h-100 border-0 d-flex flex-column align-items-center justify-content-center py-5 bg-transparent position-relative mt-2 mb-4">
                      <img aria-hidden="true" width="215" className="position-absolute" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/section-photos/90percent-navyteal-ltor.svg" />
                      <div className="stat-number-text-container d-flex flex-column align-items-center h6 text-center px-3 mb-0 mt--3">
                        <span aria-hidden="true" className="stat-number text-navy avenir-medium display-4 mt-3">
                          <span data-number="90" data-delay="100" data-float="0" data-lang="en" className="js-count">0</span>% 
                        </span>
                      </div>
                      <p className="text-center px-4 my-0 py-0 small avenir-light lh-sm">of the Fortune 500
                        <sup>®</sup>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 csc-card-col mt-0">
                    <div className="card csc-card h-100 border-0 d-flex flex-column align-items-center justify-content-center py-5 bg-transparent position-relative mt-2 mb-4">
                      <img
                            aria-hidden="true"
                            width={215}
                            className="position-absolute"
                            src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/section-photos/90percent-orangered-ltor.svg"
                            alt="" // JSX img 需有 alt 属性
                          />
                      <div className="stat-number-text-container d-flex flex-column align-items-center h6 text-center px-3 mb-0">
                        <span aria-hidden="true" className="stat-number text-navy avenir-medium display-4 mt-3">
                          <span
                                data-number={90}
                                data-delay={1000}
                                data-float={0}
                                data-lang="en"
                                className="js-count"
                              >
                                0
                              </span>
                              %
                            
                        </span>
                      </div>
                      <p className="text-center px-4 my-0 py-0 small avenir-light lh-sm">
                            of the 100 Best
                            
                        <br />
                            Global Brands
                            
                        <br />
                            (Interbrand
                        <sup>®</sup>)
                          
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 csc-card-col mt-0">
                    <div className="card csc-card h-100 border-0 d-flex flex-column align-items-center justify-content-center py-5 bg-transparent position-relative mt-2 mb-4">
                      <img aria-hidden="true" width="211" className="position-absolute" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/section-photos/70percent-purplepink-ltor.svg" />
                      <div className="stat-number-text-container d-flex flex-column align-items-center h6 text-center px-3 mb-0 mt--3">
                        <span aria-hidden="true" className="stat-number text-navy avenir-medium display-4 mt-3">
                          <span data-number="70" data-delay="2000" data-float="0" data-lang="en" className="js-count">0</span>% 
                        </span>
                      </div>
                      <p className="text-center px-4 my-0 py-0 small avenir-light lh-sm">of the PEI 300</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 csc-card-col mt-0">
                    <div className="card csc-card h-100 border-0 d-flex flex-column align-items-center justify-content-center py-5 bg-transparent position-relative mt-2 mb-4">
                      <div className="stat-ring-homepage border border-12 border-navy rounded-circle d-flex flex-column align-items-center justify-content-center">
                        <div className="stat-number-text-container d-flex flex-column align-items-center h6 text-center px-3 mb-0 mt--3">
                          <span aria-hidden="true" className="stat-number text-navy avenir-medium display-4 mt-3">
                            <span data-number="10" data-delay="2000" data-float="0" data-lang="en" className="js-count">0</span>k 
                          </span>
                        </div>
                        <p className="text-center px-4 my-0 py-0 small avenir-light lh-sm">law firms</p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 gy-2 page-section-content justify-content-center mt-1 position-relative z-index-1">
                  <div className="col-12 col-md-6 col-lg-4 csc-card-col">
                    <div className="card csc-card h-100 border-1 border-lightergray rounded-3 shadow-lg d-flex flex-column align-items-center justify-content-start py-4 px-4 bg-white position-relative my-2">
                      <span className="csc-icon csc-icon-xl mt-2 c-i-handshake rounded-circle p-3 d-flex align-items-center text-white justify-content-center bg-teal"></span>
                      <p className="text-center mb-0 fs-5 text-navy avenir-heavy px-4 px-xl-5 lh-sm mt-4">
                        {dict.home.rule1}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 csc-card-col">
                    <div className="card csc-card h-100 border-1 border-lightergray rounded-3 shadow-lg d-flex flex-column align-items-center justify-content-start py-4 px-4 bg-white position-relative my-2">
                      <span className="csc-icon csc-icon-xl mt-2 c-i-clock rounded-circle p-3 d-flex align-items-center text-white justify-content-center bg-teal"></span>
                      <p className="text-center mb-0 fs-5 text-navy avenir-heavy px-4 px-xl-5 lh-sm mt-4">
                        {dict.home.rule2}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 csc-card-col">
                    <div className="card csc-card h-100 border-1 border-lightergray rounded-3 shadow-lg d-flex flex-column align-items-center justify-content-start py-4 px-4 bg-white position-relative my-2">
                      <span className="csc-icon csc-icon-xl mt-2 c-i-calendar rounded-circle p-3 d-flex align-items-center text-white justify-content-center bg-teal"></span>
                      <p className="text-center mb-0 fs-5 text-navy avenir-heavy px-4 px-xl-5 lh-sm mt-4">
                        {dict.home.rule3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
              aria-labelledby="section5-headline"
              id="section5"
              className="page-section bg-navyteal-ltor px-3 px-xl-0 py-5 mt--6 mb--7"
              tabIndex={0} // 注意这里
        >
          <div className="container-fluid container-xl page-section-container rounded-3 bg-white border-gray shadow-lg pt-5 pb-4 mt-5 position-relative z-index-1 px-0">
            <div className="row px-4 px-md-5">
              <div className="col">
                <div className="page-section-headline-container mb-5">
                  <div className="section-headline-top-border bg-purple"></div>
                  <h2 id="section5-headline" className="text-navy display-6">{dict.home.insights}</h2>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="row mx-0 home-resource-slides-slick slick-initialized slick-slider">
                <div
                  className="slick-list draggable"
                  style={{ padding: "0px 50px" }}
                >
                  <div
                    className="slick-track"
                    style={{
                          opacity: 1,
                          width: "6500px",
                          transform: "translate3d(-975px, 0px, 0px)"
                    }}
                  >
                    <div
                          className="col home-resource-slides-slide px-3 pb-4 pt-3 slick-slide slick-cloned"
                          data-slick-index={-4}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: "325px" }}
                    >
                   
              
                      <div className="card border-lightestgray rounded-3 shadow h-100">
                        <div className="card-body p-0 d-flex flex-column justify-content-center">
                          <div className="card-body-upper">
                            <div className="resource-tile-text-container px-4">
                              <h3 className="card-title text-navy">SPV Domiciliation for Capital Markets Transactions</h3>
                            </div>
                          </div>
                          <div className="card-body-lower w-100 px-4 mt-4">
                            <Link
                                    href="/service/resources/spv-domiciliation/"
                                    className="card-link link-with-icon card-link-resource"
                                    tabIndex={-1} // 注意这里
                                  >
                              <span aria-hidden="true" className="link-with-icon-text text-uppercase">Download now</span>
                              <span className="visually-hidden">Download SPV Domiciliation for Capital Markets Transactions report now</span>
                              <span aria-hidden="true" className="csc-icon csc-icon-sm c-i-arrow-right ms-2"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col home-resource-slides-slide px-3 pb-4 pt-3 slick-slide slick-cloned" data-slick-index={-3} id="" aria-hidden="true" tabIndex={-1} style={{ width: 325 }} >
                      <div className="card border-0 h-100">
                        <div className="card-body p-0 d-flex flex-column justify-content-between">
                          <div className="card-body-upper">
                            <div className="resource-tile-image-container rounded-3 shadow">
                              <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/Resourcetile-400x21417.jpg" alt="" />
                            </div>
                            <div className="resource-tile-text-container px-4 mt-4">
                              <h3 className="card-title text-navy">Future Private Capital CFO Survey 2025</h3>
                            </div>
                          </div>
                          <div className="card-body-lower w-100 px-4 mt-4 mb-3">
                            <Link
                                    href="/service/resources/private-capital-cfo-survey-2025/"
                                    className="card-link link-with-icon card-link-resource"
                                    tabIndex={-1} // 注意大小写和数值形式
                                  >
                              <span aria-hidden="true" className="link-with-icon-text text-uppercase">Download now</span>
                              <span className="visually-hidden">Download Future Private Capital CFO Survey 2025 report now</span>
                              <span aria-hidden="true" className="csc-icon csc-icon-sm c-i-arrow-right ms-2"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col home-resource-slides-slide px-3 pb-4 pt-3 slick-slide slick-cloned"
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}  // 改成 tabIndex 并使用数值
                      style={{ width: 325 }}  // style 使用对象
                    >
                      <div className="card border-lightestgray rounded-3 shadow h-100">
                        <div className="card-body p-0 d-flex flex-column justify-content-center">
                          <div className="card-body-upper">
                            <div className="resource-tile-text-container px-4">
                              <h3 className="card-title text-navy">Escrow Best Practice Guide 2025</h3>
                            </div>
                          </div>
                          <div className="card-body-lower w-100 px-4 mt-4">
                            <Link
                                    href="/service/resources/escrow-best-practice-guide-2025/"
                                    className="card-link link-with-icon card-link-resource"
                                    tabIndex={-1}  // JSX 中用 tabIndex 并且是数字
                                  >
                              <span aria-hidden="true" className="link-with-icon-text text-uppercase">Download now</span>
                              <span className="visually-hidden">Download Escrow Best Practice Guide 2025 report now</span>
                              <span aria-hidden="true" className="csc-icon csc-icon-sm c-i-arrow-right ms-2"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col home-resource-slides-slide px-3 pb-4 pt-3 slick-slide slick-cloned slick-active"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="false"
                      tabIndex={-1}  // 注意这里
                      style={{ width: 325 }}
                    >
                      <div className="card border-0 h-100">
                        <div className="card-body p-0 d-flex flex-column justify-content-between">
                          <div className="card-body-upper">
                            <div className="resource-tile-image-container rounded-3 shadow">
                              <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/Resourcetile-400x2142.jpg" alt="" />
                            </div>
                            <div className="resource-tile-text-container px-4 mt-4">
                              <h3 className="card-title text-navy">{dict.home.insight1}</h3>
                            </div>
                          </div>
                          <div className="card-body-lower w-100 px-4 mt-4 mb-3">
                            <Link
                                    href="https://www.cscdbs.com/en/resources-news/domain-security-report/"
                                    target="_blank"
                                    className="card-link link-with-icon card-link-resource"
                                    tabIndex={0} // 注意大小写和类型
                                  >
                              <span aria-hidden="true" className="link-with-icon-text text-uppercase">Download now</span>
                              <span className="visually-hidden">Download Domain Security Report 2024-2025 report now</span>
                              <span aria-hidden="true" className="csc-icon csc-icon-sm c-i-arrow-right ms-2"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col home-resource-slides-slide px-3 pb-4 pt-3 slick-slide slick-current slick-active slick-center"
                      data-slick-index={0}
                      aria-hidden={false}
                      tabIndex={0}  // 注意大小写和数字类型
                      style={{ width: 325 }}
                    >
                      <div className="card border-lightestgray rounded-3 shadow h-100">
                        <div className="card-body p-0 d-flex flex-column justify-content-center">
                          <div className="card-body-upper">
                            <div className="resource-tile-text-container px-4">
                              <h3 className="card-title text-navy">{dict.home.insight2}</h3>
                            </div>
                          </div>
                          <div className="card-body-lower w-100 px-4 mt-4">
                            <Link
                                    href="/service/resources/bankruptcy-and-restructuring-guide/"
                                    className="card-link link-with-icon card-link-resource"
                                    tabIndex={0} // 改为大写且使用数字
                                  >
                              <span aria-hidden="true" className="link-with-icon-text text-uppercase">Download now</span>
                              <span className="visually-hidden">Download Trusted Support Across the Bankruptcy and Restructuring Ecosystem report now</span>
                              <span aria-hidden="true" className="csc-icon csc-icon-sm c-i-arrow-right ms-2"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col home-resource-slides-slide px-3 pb-4 pt-3 slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden={false}  // 布尔值，不是字符串
                      tabIndex={0}         // 驼峰命名，值为数字
                      style={{ width: 325 }} // JSX 中 style 是对象
                    >
                      <div className="card border-0 h-100">
                        <div className="card-body p-0 d-flex flex-column justify-content-between">
                          <div className="card-body-upper">
                            <div className="resource-tile-image-container rounded-3 shadow">
                              <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/resourcetiles_600x40016.jpg" alt="" />
                            </div>
                            <div className="resource-tile-text-container px-4 mt-3">
                              <h3 className="card-title text-navy">{dict.home.insight3}</h3>
                            </div>
                          </div>
                          <div className="card-body-lower w-100 px-4 mt-3 mb-3">
                            <Link
                                    href="/service/resources/bankruptcy-and-restructuring-ebook/"
                                    className="card-link link-with-icon card-link-resource"
                                    tabIndex={0}
                                  >
                              <span aria-hidden="true" className="link-with-icon-text text-uppercase">Download now</span>
                              <span className="visually-hidden">Download eBook: The Surge in Large Corporate Bankruptcy Filings report now</span>
                              <span aria-hidden="true" className="csc-icon csc-icon-sm c-i-arrow-right ms-2"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col home-resource-slides-slide px-3 pb-4 pt-3 slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={0} // 注意这里
                      style={{ width: 325 }}
                    >
                      <div className="card border-lightestgray rounded-3 shadow h-100">
                        <div className="card-body p-0 d-flex flex-column justify-content-center">
                          <div className="card-body-upper">
                            <div className="resource-tile-text-container px-4">
                              <h3 className="card-title text-navy">SPV Global Outlook 2025</h3>
                            </div>
                          </div>
                          <div className="card-body-lower w-100 px-4 mt-4">
                            <Link
                                    href="/service/resources/spv-global-outlook-2025-report/"
                                    className="card-link link-with-icon card-link-resource"
                                    tabIndex={-1} // 注意这里
                                  >
                              <span aria-hidden="true" className="link-with-icon-text text-uppercase">Download now</span>
                              <span className="visually-hidden">Download SPV Global Outlook 2025 report now</span>
                              <span aria-hidden="true" className="csc-icon csc-icon-sm c-i-arrow-right ms-2"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  
            </div>
          </div>
        </div>
        
      </div>
    </div>
        </section> */}
        <section
          aria-labelledby="section6-headline"
          id="section6"
          className="page-section page-section-home-map position-relative z-index-0 bg-navy overflow-hidden"
          tabIndex={0} // 注意这里用 tabIndex
        >
          <div className="container-fluid container-xl page-section-container px-3 px-xl-0 py-5 pt-md-0 pb-md-4">
            <div className="row mx-2 mx-md-3 mx-xl-0 mb-3 mb-md-0">
              <div className="col col-md-12 col-lg-4 pe-3 pe-lg-5">
                <div className="page-section-headline-container mb-4 mt-4 pt-5">
                  <div className="section-headline-top-border bg-teal"></div>
                  <h2 id="section6-headline" className="text-white display-6">
                    {dict.home.location}
                  </h2>
                </div>
                <p className="text-white py-2">{dict.home.locationdesc}</p>
                <div className="pb-3 mb-md-0 pb-md-0 mb-lg-5 pb-lg-3">
                  <Link
                    className="btn mt-4 mb-2 mb-md-0"
                    style={{
                      backgroundColor: "var(--primary-color)",
                      borderColor: "var(--primary-color)",
                      color: "var(--white)",
                    }}
                    href={`/${lang}/service/about/csc-office-locations/`}
                  >
                    {" "}
                    {dict.home.locationbutton}{" "}
                  </Link>
                </div>
              </div>
              <div className="col-md-12 col-lg-8 d-md-block">
                <MapWithRoutes
                  mapSrc="/world.svg"
                  points={[
                    // 三大核心枢纽（带标签）
                    {
                      ...mapCities.hongKong,
                      label: dict.home.hongKong,
                      color: "#00b2a9",
                    },
                    {
                      ...mapCities.singapore,
                      label: dict.home.singapore,
                      color: "#00b2a9",
                    },
                    {
                      ...mapCities.tokyo,
                      label: dict.home.tokyo,
                      color: "#00b2a9",
                    },
                    // 所有终点城市（不带标签）
                    ...Object.entries(mapCities)
                      .filter(
                        ([key]) =>
                          !["hongKong", "singapore", "tokyo"].includes(key)
                      )
                      .map(([, coords]) => ({ ...coords, color: "#00b2a9" })),
                  ]}
                  routes={
                    // 自动生成所有航线
                    Object.entries(mapRoutes).flatMap(([hub, destinations]) =>
                      destinations.map((dest) => ({
                        from: mapCities[hub as keyof typeof mapCities],
                        to: mapCities[dest as keyof typeof mapCities],
                        color: "#00b2a9",
                        animated: true,
                      }))
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={{ dict }} locale={{ lang }} />
      {/* <div id="searchResultsModal" className="modal search-results-modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content border border-3 border-teal">
          <div className="modal-header">
            <span className="csc-icon csc-icon-md c-i-search text-teal d-none d-md-inline me-2"></span>
            <h2 className="modal-title text-navy avenir-heavy text-uppercase h3">Search results</h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div id="st-results-container"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div id="CSCLoginModal" className="modal csc-login-modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content border border-3 border-teal">
          <div className="modal-header">
            <span className="csc-icon csc-icon-md c-i-login text-teal d-none d-md-inline me-2"></span>
            <h3 className="modal-title text-navy avenir-heavy">Choose a login</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0">
            <div className="container-fluid px-3 py-3 px-lg-4 py-lg-4">
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <Link className="btn btn-navy rounded-pill text-uppercase login-url" href="https://login.cscglobal.com/cscglobal-login/public/login" target="_blank"> CSC Account </Link>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-10"></div>
              </div>
              <div className="row justify-content-between px-lg-4">
                <div className="col-12 col-md-6">
                  <Link href="https://users.appealtrack.com/logon" target="_blank" className="btn btn-transparent rounded-pill w-100 my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="link-text-underline">AppealTrack</span>
                      <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                    </div>
                  </Link>
                  <Link href="https://classics.intertrustgroup.com/" target="_blank" className="btn btn-transparent rounded-pill w-100 my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="link-text-underline">Classic Awards</span>
                      <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                    </div>
                  </Link>
                  <Link href="https://apps.erecording.com/portal/" target="_blank" className="btn btn-transparent rounded-pill w-100 my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="link-text-underline">County Portal</span>
                      <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                    </div>
                  </Link>
                  <Link href="https://support.corptax.com" target="_blank" className="btn btn-transparent rounded-pill w-100 my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="link-text-underline">CSC Connections</span>
                      <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link href="https://documents.intertrustgroup.com/" target="_blank" className="btn btn-transparent rounded-pill w-100 my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="link-text-underline">Document Share</span>
                      <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                    </div>
                  </Link>
                  <Link href="https://ep.erecording.com/Login.aspx" target="_blank" className="btn btn-transparent rounded-pill w-100 my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="link-text-underline">ePrepare for Submitters</span>
                      <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                    </div>
                  </Link>
                  <Link href="https://iris.intertrustgroup.com/" target="_blank" className="btn btn-transparent rounded-pill w-100 my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="link-text-underline">IRIS</span>
                      <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                    </div>
                  </Link>
                  <Link href="https://users.csclicensepro.com/" target="_blank" className="btn btn-transparent rounded-pill w-100 my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="link-text-underline">License Pro
                        <sup>®</sup>
                      </span>
                      <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <script type="text/javascript" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/includes/centralized_code/bootstrap.bundle.min.js"></script>undefined<iframe src="https://a28417170302.cdn.optimizely.com/client_storage/a28417170302.html" hidden="" tabIndex={-1} title="Optimizely Internal Frame" height="0" width="0" style={{ display: 'none' }}></iframe>undefined<script type="text/javascript" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/includes/centralized_code/slick.min.js"></script>undefined<script type="text/javascript" src="/service/templates/rebrand_reskin/js/ux.js"></script>undefined<iframe name="TS_Injection" style="width: 0px; height: 0px; visibility: hidden; display: none;"></iframe>undefined<script type="text/javascript" id="" charset="">document.cookie="optimizelyAllowDataSharing\x3dfalse; Max-Age\x3d-1; path\x3d/";optimizely.push({type:"holdEvents"});</script>undefined<script type="text/javascript" id="" charset="">document.cookie="optimizelyAllowDataSharing\x3dfalse; Max-Age\x3d-1; path\x3d/";optimizely.push({type:"holdEvents"});</script>undefined<script type="text/javascript" id="" charset="">document.cookie="optimizelyAllowDataSharing\x3dfalse; Max-Age\x3d-1; path\x3d/";optimizely.push({type:"holdEvents"});</script>undefined<script type="text/javascript" id="" charset="">document.cookie="optimizelyAllowDataSharing\x3dfalse; Max-Age\x3d-1; path\x3d/";optimizely.push({type:"holdEvents"});</script>undefined<script type="text/javascript" id="" charset="">document.cookie="optimizelyAllowDataSharing\x3dfalse; Max-Age\x3d-1; path\x3d/";optimizely.push({type:"holdEvents"});</script>undefined<script type="text/javascript" id="" charset="">document.cookie="optimizelyAllowDataSharing\x3dfalse; Max-Age\x3d-1; path\x3d/";optimizely.push({type:"holdEvents"});</script>undefined<script type="text/javascript" id="" charset="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","566053297164824");fbq("track","PageView");</script>undefined<noscript>
      <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=566053297164824&amp;ev=PageView&amp;noscript=1" />undefined</noscript>undefined<script type="text/javascript" id="" charset="">(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.referrerPolicy="unsafe-url";a.src="https://ws.zoominfo.com/pixel/61671da40b0f5a00156ff193";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();</script>undefined<noscript>
      <img src="https://ws.zoominfo.com/pixel/61671da40b0f5a00156ff193" width="1" height="1" style={{ display: 'none' }} />undefined</noscript>undefined<script id="hs-script-loader" text="" charset="" type="text/javascript" src="//js.hs-scripts.com/2490359.js"></script>undefined<script type="text/javascript" id="" charset="">document.cookie="optimizelyAllowDataSharing\x3dtrue; Max-Age\x3d15780000; path\x3d/";window.optimizely.push({type:"sendEvents"});</script>undefined<script type="text/javascript" id="" charset="">(function(){var a=parseInt(localStorage.getItem("total_sessions"))||0,b=sessionStorage.getItem("session_flag");b||(a++,localStorage.setItem("total_sessions",a),sessionStorage.setItem("session_flag","true"))})();</script>undefined<iframe height="0" width="0" style="display: none; visibility: hidden;">
      // </iframe><div id="onetrust-consent-sdk">
      <div className="onetrust-pc-dark-filter ot-hide ot-fade-in"></div>
      <div id="onetrust-pc-sdk" className="otPcPanel ot-hide ot-fade-in" lang="en" aria-label="Preference center" role="region">
        <div role="alertdialog" aria-modal="true" aria-describedby="ot-pc-desc" style="height: 100%;" aria-label="Privacy Preference Center">
          <div className="ot-pc-header">
            <div className="ot-pc-logo" role="img" aria-label="Company Logo">
              <img alt="Company Logo" src="https://cdn.cookielaw.org/logos/static/ot_company_logo.png" />
              </div>
              <button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Close" style="background-image: url(&quot;https://cdn.cookielaw.org/logos/static/ot_close.svg&quot;);"></button>
            </div>
            <div id="ot-pc-content" className="ot-pc-scrollbar">
              <div className="ot-optout-signal ot-hide">
                <div className="ot-optout-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg">
                    <path className="ot-floating-button__svg-fill" d="M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z" fill="#FFF" fill-rule="evenodd"></path>
                  </svg>
                </div>
                <span></span>
              </div>
              <h2 id="ot-pc-title">Privacy Preference Center</h2>
              <div id="ot-pc-desc">When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
                      
                <br/>
                <Link href="https://cookiepedia.co.uk/giving-consent-to-cookies" className="privacy-notice-link" rel="noopener" target="_blank" aria-label="More information about your privacy, opens in a new tab">More information</Link>
              </div>
              <button id="accept-recommended-btn-handler">Allow All</button>
              <section className="ot-sdk-row ot-cat-grp">
                <h3 id="ot-category-title"> Manage Consent Preferences</h3>
                <div className="ot-accordion-layout ot-cat-item ot-vs-config" data-optanongroupid="C0001">
                  <button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001 ot-status-id-C0001"></button>
                  <div className="ot-acc-hdr ot-always-active-group">
                    <div className="ot-plus-minus">
                      <span></span>
                      <span></span>
                    </div>
                    <h4 className="ot-cat-header" id="ot-header-id-C0001">Strictly Necessary Cookies</h4>
                    <div id="ot-status-id-C0001" className="ot-always-active">Always Active</div>
                  </div>
                  <div className="ot-acc-grpcntr ot-acc-txt">
                    <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0001">These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</p>
                    <div className="ot-hlst-cntr">
                      <button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0001">Cookies Details&lrm;</button>
                    </div>
                  </div>
                </div>
                <div className="ot-accordion-layout ot-cat-item ot-vs-config" data-optanongroupid="C0002">
                  <button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0002" aria-labelledby="ot-header-id-C0002"></button>
                  <div className="ot-acc-hdr">
                    <div className="ot-plus-minus">
                      <span></span>
                      <span></span>
                    </div>
                    <h4 className="ot-cat-header" id="ot-header-id-C0002">Performance Cookies</h4>
                    <div className="ot-tgl">
                      <input type="checkbox" name="ot-group-id-C0002" id="ot-group-id-C0002" role="switch" className="category-switch-handler" data-optanongroupid="C0002" checked="" aria-labelledby="ot-header-id-C0002" />
                        <label className="ot-switch" for="ot-group-id-C0002">
                          <span className="ot-switch-nob" aria-label="Performance Cookies"></span>
                          <span className="ot-label-txt">Performance Cookies</span>
                        </label>
                      </div>
                    </div>
                    <div className="ot-acc-grpcntr ot-acc-txt">
                      <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0002">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>
                      <div className="ot-hlst-cntr">
                        <button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0002">Cookies Details&lrm;</button>
                      </div>
                    </div>
                  </div>
                  <div className="ot-accordion-layout ot-cat-item ot-vs-config" data-optanongroupid="C0003">
                    <button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0003" aria-labelledby="ot-header-id-C0003"></button>
                    <div className="ot-acc-hdr">
                      <div className="ot-plus-minus">
                        <span></span>
                        <span></span>
                      </div>
                      <h4 className="ot-cat-header" id="ot-header-id-C0003">Functional Cookies</h4>
                      <div className="ot-tgl">
                        <input type="checkbox" name="ot-group-id-C0003" id="ot-group-id-C0003" role="switch" className="category-switch-handler" data-optanongroupid="C0003" checked="" aria-labelledby="ot-header-id-C0003" />
                          <label className="ot-switch" for="ot-group-id-C0003">
                            <span className="ot-switch-nob" aria-label="Functional Cookies"></span>
                            <span className="ot-label-txt">Functional Cookies</span>
                          </label>
                        </div>
                      </div>
                      <div className="ot-acc-grpcntr ot-acc-txt">
                        <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0003">These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.</p>
                        <div className="ot-hlst-cntr">
                          <button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0003">Cookies Details&lrm;</button>
                        </div>
                      </div>
                    </div>
                    <div className="ot-accordion-layout ot-cat-item ot-vs-config" data-optanongroupid="C0004">
                      <button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0004" aria-labelledby="ot-header-id-C0004"></button>
                      <div className="ot-acc-hdr">
                        <div className="ot-plus-minus">
                          <span></span>
                          <span></span>
                        </div>
                        <h4 className="ot-cat-header" id="ot-header-id-C0004">Targeting Cookies</h4>
                        <div className="ot-tgl">
                          <input type="checkbox" name="ot-group-id-C0004" id="ot-group-id-C0004" role="switch" className="category-switch-handler" data-optanongroupid="C0004" checked="" aria-labelledby="ot-header-id-C0004">
                            <label className="ot-switch" for="ot-group-id-C0004">
                              <span className="ot-switch-nob" aria-label="Targeting Cookies"></span>
                              <span className="ot-label-txt">Targeting Cookies</span>
                            </label>
                          </div>
                        </div>
                        <div className="ot-acc-grpcntr ot-acc-txt">
                          <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0004">These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>
                          <div className="ot-hlst-cntr">
                            <button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0004">Cookies Details&lrm;</button>
                          </div>
                        </div>
                      </div>
        
                    </section>
                  </div>
                  <section id="ot-pc-lst" className="ot-hide ot-pc-scrollbar">
                    <div id="ot-pc-hdr">
                      <div id="ot-lst-title">
                        <button className="ot-link-btn back-btn-handler" aria-label="Back">
                          <svg id="ot-back-arw"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xml:space="preserve">
                            <title>Back Button</title>
                            <g>
                              <path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                    l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                    c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                    s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                    L213.13,222.409z"></path>
                            </g>
                          </svg>
                        </button>
                        <h3>Cookie List</h3>
                      </div>
                      <div className="ot-lst-subhdr">
                        <div className="ot-search-cntr">
                          <p role="status" className="ot-scrn-rdr"></p>
                          <input id="vendor-search-handler" type="text" name="vendor-search-handler" placeholder="Search…" aria-label="Cookie list search">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true">
                              <title>Search Icon</title>
                              <path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                      s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                      c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                      s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                            </svg>
                          </div>
                          <div className="ot-fltr-cntr">
                            <button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true">
                              <svg role="presentation" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xml:space="preserve">
                                <title>Filter Icon</title>
                                <g>
                                  <path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
                c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
                c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
                C402.765,25.895,404.093,19.231,400.858,11.427z"></path>
                                </g>
                              </svg>
                            </button>
                          </div>
                          <div id="ot-anchor"></div>
                          <section id="ot-fltr-modal">
                            <div id="ot-fltr-cnt">
                              <button id="clear-filters-handler">Clear</button>
                              <div className="ot-fltr-scrlcnt ot-pc-scrollbar">
                                <div className="ot-fltr-opts">
                                  <div className="ot-fltr-opt">
                                    <div className="ot-chkbox">
                                      <input id="chkbox-id" type="checkbox" className="category-filter-handler">
                                        <label for="chkbox-id">
                                          <span className="ot-label-txt">checkbox label</span>
                                        </label>
                                        <span className="ot-label-status">label</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ot-fltr-btns">
                                    <button id="filter-apply-handler">Apply</button>
                                    <button id="filter-cancel-handler">Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                        <section id="ot-lst-cnt" className="ot-pc-scrollbar">
                          <div id="ot-sel-blk">
                            <div className="ot-sel-all">
                              <div className="ot-sel-all-hdr">
                                <span className="ot-consent-hdr">Consent</span>
                                <span className="ot-li-hdr">Leg.Interest</span>
                              </div>
                              <div className="ot-sel-all-chkbox">
                                <div className="ot-chkbox" id="ot-selall-hostcntr">
                                  <input id="select-all-hosts-groups-handler" type="checkbox">
                                    <label for="select-all-hosts-groups-handler">
                                      <span className="ot-label-txt">checkbox label</span>
                                    </label>
                                    <span className="ot-label-status">label</span>
                                  </div>
                                  <div className="ot-chkbox" id="ot-selall-vencntr">
                                    <input id="select-all-vendor-groups-handler" type="checkbox">
                                      <label for="select-all-vendor-groups-handler">
                                        <span className="ot-label-txt">checkbox label</span>
                                      </label>
                                      <span className="ot-label-status">label</span>
                                    </div>
                                    <div className="ot-chkbox" id="ot-selall-licntr">
                                      <input id="select-all-vendor-leg-handler" type="checkbox">
                                        <label for="select-all-vendor-leg-handler">
                                          <span className="ot-label-txt">checkbox label</span>
                                        </label>
                                        <span className="ot-label-status">label</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="ot-sdk-row">
                                  <div className="ot-sdk-column">
                                    <ul id="ot-host-lst"></ul>
                                  </div>
                                </div>
                              </section>
                            </section>
                            <div className="ot-pc-footer ot-pc-scrollbar">
                              <div className="ot-btn-container">
                                <button className="save-preference-btn-handler onetrust-close-btn-handler">Confirm My Choices</button>
                              </div>
                              <div className="ot-pc-footer-logo">
                                <Link href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" aria-label="Powered by OneTrust Opens in a new Tab">
                                  <img alt="Powered by Onetrust" src="https://cdn.cookielaw.org/logos/static/powered_by_logo.svg" title="Powered by OneTrust Opens in a new Tab" />
                                  </Link>
                                </div>
                              </div>
                          
                              <span className="ot-scrn-rdr" aria-atomic="true" aria-live="polite"></span>
                            </div>
                            <iframe className="ot-text-resize" sandbox="allow-same-origin" title="onetrust-text-resize" style="position: absolute; top: -50000px; width: 100em;" aria-hidden="true"></iframe>
                          </div>
                          <div id="ot-sdk-btn-floating" className="ot-floating-button" data-title="Cookies settings">
                            <div className="ot-floating-button__front custom-persistent-icon">
                              <button type="button" className="ot-floating-button__open" aria-label="Open Preferences"></button>
                            </div>
                            <div className="ot-floating-button__back custom-persistent-icon">
                              <button type="button" className="ot-floating-button__close" aria-label="Close Preferences" aria-hidden="true" style={{ display: 'none' }}>
                                <svg role="presentation" tabIndex={-1} viewBox="0 0 24 24" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Banner_02" className="ot-floating-button__svg-fill" transform="translate(-318.000000, -725.000000)" fill="#ffffff" fill-rule="nonzero">
                                      <g id="Group-2" transform="translate(305.000000, 712.000000)">
                                        <g id="icon/16px/white/close">
                                          <polygon id="Line1" points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"></polygon>
                                          <polygon id="Line2" transform="translate(25.000000, 25.000000) scale(-1, 1) translate(-25.000000, -25.000000) " points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"></polygon>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="go2933276541 go2369186930" id="hs-web-interactives-top-anchor">
                          <div id="hs-interactives-modal-overlay" className="go1632949049"></div>
                        </div>
                        <div className="go2933276541 go1348078617" id="hs-web-interactives-bottom-anchor"></div>
                        <div id="hs-web-interactives-floating-container">
                          <div id="hs-web-interactives-floating-top-left-anchor" className="go2417249464 go613305155"></div>
                          <div id="hs-web-interactives-floating-top-right-anchor" className="go2417249464 go471583506"></div>
                          <div id="hs-web-interactives-floating-bottom-left-anchor" className="go2417249464 go3921366393"></div>
                          <div id="hs-web-interactives-floating-bottom-right-anchor" className="go2417249464 go3967842156"></div>
                        </div>
                        <iframe sandbox="" style={{ display: 'none' }}></iframe> */}
    </div>
  );
}
