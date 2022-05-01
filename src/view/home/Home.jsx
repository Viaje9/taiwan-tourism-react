{
  /* <script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
  },
  data() {
    return {
      bannerInfo: {
        scenicSpot: {
          title: "景點快搜",
          subTitle: "在頂溪，找到令你怦然心動的風景",
        },
        hotel: {
          title: "住宿推薦",
          subTitle: "享受一夜好眠，讓出遊心情更加分",
        },
        restaurant: {
          title: "必吃美食",
          subTitle: "匯聚八方好滋味，滿足每個挑剔的味蕾",
        },
      },
      searchTab: "scenicSpot",
    };
  },
  computed: {
    bannerImg() {
      if (this.searchTab === "scenicSpot") {
        return require("@/assets/images/photoScenicSpot.jpg");
      }
      if (this.searchTab === "hotel") {
        return require("@/assets/images/photoHotel.jpeg");
      }
      if (this.searchTab === "restaurant") {
        return require("@/assets/images/photoRestaurant.jpg");
      }
      return require("@/assets/images/empty.svg");
    },
    searchData() {
      return this.$store.state.searchData;
    },
  },
};
</script> */
}

import './Home.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const bannerInfo = {
    scenicSpot: {
      title: '景點快搜',
      subTitle: '在頂溪，找到令你怦然心動的風景',
    },
    hotel: {
      title: '住宿推薦',
      subTitle: '享受一夜好眠，讓出遊心情更加分',
    },
    restaurant: {
      title: '必吃美食',
      subTitle: '匯聚八方好滋味，滿足每個挑剔的味蕾',
    },
  };
  const searchData = [1];
  const [searchTab, setSearchTab] = useState('scenicSpot');
  const [bannerImg, setBannerImg] = useState(
    '/src/assets/images/photoScenicSpot.jpg'
  );
  useEffect(() => {
    if (searchTab === 'scenicSpot') {
      setBannerImg('/src/assets/images/photoScenicSpot.jpg');
    }
    if (searchTab === 'hotel') {
      setBannerImg('/src/assets/images/photoHotel.jpeg');
    }
    if (searchTab === 'restaurant') {
      setBannerImg('/src/assets/images/photoRestaurant.jpg');
    }
  }, [searchTab]);
  return (
    <div className='home'>
      <div
        className={
          (searchData.length ? 'lessBanner' : '') + ' wrapper justify-end'
        }
      >
        {/* banner背景色塊 */}
        <div className='bannerBg'>
          <div className='w-1/12 mr-3'></div>
          <div className='w-2/12 mr-3'></div>
          <div className='w-3/12'></div>
        </div>
        {/* banner(含searchBar) */}
        <div className='banner'>
          <img src={bannerImg} />
          <div className='banner_intro'>
            <p className='banner_title'>{bannerInfo[searchTab].title}</p>
            <p className='banner_subtitle'>{bannerInfo[searchTab].subTitle}</p>
          </div>
          {/* <SearchBar v-model:tab="searchTab" className="searchBar" /> */}
        </div>
      </div>
      {/* <router-view></router-view> */}
    </div>
  );
}
