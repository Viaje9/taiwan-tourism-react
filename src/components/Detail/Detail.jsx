// FIXME:還不能使用
export default function Detail() {



    return (
        <div className="wrap">
            <div className="header">
                <div class="header_title">{info.Name}</div>
                <div class="location">
                    <img src="@/assets/images/map.svg" />{info.City}
                </div>
                <div class="left_side">
                    <a
                        class="fast_search"
                        target="_blank"
                        href={`https://www.google.com/search?q=${info.Name}`}
                    >
                        <img src="@/assets/images/googleBig.svg" />
                        快速搜索
                    </a>
                    <div class="favorite" onClick={clickAddFavorite}>
                        {/* <img v-show="isFavorite" src="@/assets/images/addedJourneyBig.svg" />
                        <img v-show="!isFavorite" src="@/assets/images/addJourneyBig.svg" /> */}
                        加入收藏
                    </div>
                    <div class="desc">
                        {/* <template v-if="info.DescriptionDetail">
                            { info.Description }
                        </template> */}
                    </div>
                </div>
                <div class="images">
                    <div class="main_img">
                        <img
                            class="img"
                            src={info.Picture.PictureUrl1}
                            alt={info.Picture.PictureDescription1}
                        />
                    </div>
                    <div class="side_img">
                        <img
                            class="img"
                            src={info.Picture.PictureUrl1}
                            alt={info.Picture.PictureDescription1}
                        />
                    </div>
                    <div class="side_img">
                        <img
                            class="img"
                            src={info.Picture.PictureUrl2}
                            alt={info.Picture.PictureDescription1}
                        />
                    </div>
                    <div class="side_img">
                        <img
                            class="img"
                            src={info.Picture.PictureUrl3}
                            alt={info.Picture.PictureDescription1}
                        />
                    </div>
                </div>
                <div className="intro">
                    <div class="lg:col-span-8">
                        <div class="content">
                            <div class="content_title">{categoryStr}介紹</div>
                            <div class="content_subtitle">
                                {info.Picture.PictureDescription1}
                            </div>
                            <div class="content_desc">
                                {info.DescriptionDetail || info.Description}
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-4">
                        <div class="info">
                            <div class="info_title">{categoryStr}資訊</div>
                            <div class="info_item">
                                <div class="info_label">開放時間</div>
                                <div class="info_text">{info.OpenTime}</div>
                            </div>
                            <div class="info_item">
                                <div class="info_label">聯絡電話</div>
                                <div class="info_text">{info.Phone}</div>
                            </div>
                            <div class="info_item">
                                <div class="info_label">地址</div>
                                <div class="info_text">{info.Address}</div>
                            </div>
                            <div class="info_map">
                                <iframe
                                    // v-if="info.Position.PositionLat && info.Position.PositionLon"
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${info.Position.PositionLat}!3d${info.Position.PositionLon}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd03748c065726588!2z${coordinate}!5e0!3m2!1sen!2szh-tw`}
                                    class="w-full"
                                    height="200"
                                    allowfullscreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}