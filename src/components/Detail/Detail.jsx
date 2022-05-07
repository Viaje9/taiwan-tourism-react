// FIXME:還不能使用
export default function Detail({detailiID,info,category,categoryStr}) {

    return (
        <div className="wrap">
            <div className="header">
                <div className="header_title">{info.Name}</div>
                <div className="location">
                    <img src="@/assets/images/map.svg" />{info.City}
                </div>
                <div className="left_side">
                    <a
                        className="fast_search"
                        target="_blank"
                        href={`https://www.google.com/search?q=${info.Name}`}
                    >
                        <img src="@/assets/images/googleBig.svg" />
                        快速搜索
                    </a>
                    <div className="favorite" onClick={clickAddFavorite}>
                        {isFavorite && <img src="@/assets/images/addedJourneyBig.svg" />}
                        {!isFavorite && <img src="@/assets/images/addJourneyBig.svg" />}
                        加入收藏
                    </div>
                    <div className="desc">
                        {info.DescriptionDetail && <>{info.Description}</>}
                    </div>
                </div>
                <div className="images">
                    <div className="main_img">
                        <img
                            className="img"
                            src={info.Picture.PictureUrl1}
                            alt={info.Picture.PictureDescription1}
                        />
                    </div>
                    <div className="side_img">
                        <img
                            className="img"
                            src={info.Picture.PictureUrl1}
                            alt={info.Picture.PictureDescription1}
                        />
                    </div>
                    <div className="side_img">
                        <img
                            className="img"
                            src={info.Picture.PictureUrl2}
                            alt={info.Picture.PictureDescription1}
                        />
                    </div>
                    <div className="side_img">
                        <img
                            className="img"
                            src={info.Picture.PictureUrl3}
                            alt={info.Picture.PictureDescription1}
                        />
                    </div>
                </div>
                <div className="intro">
                    <div className="lg:col-span-8">
                        <div className="content">
                            <div className="content_title">{categoryStr}介紹</div>
                            <div className="content_subtitle">
                                {info.Picture.PictureDescription1}
                            </div>
                            <div className="content_desc">
                                {info.DescriptionDetail || info.Description}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="info">
                            <div className="info_title">{categoryStr}資訊</div>
                            <div className="info_item">
                                <div className="info_label">開放時間</div>
                                <div className="info_text">{info.OpenTime}</div>
                            </div>
                            <div className="info_item">
                                <div className="info_label">聯絡電話</div>
                                <div className="info_text">{info.Phone}</div>
                            </div>
                            <div className="info_item">
                                <div className="info_label">地址</div>
                                <div className="info_text">{info.Address}</div>
                            </div>
                            <div className="info_map">
                                {(info.Position.PositionLat && info.Position.PositionLon) && <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${info.Position.PositionLat}!3d${info.Position.PositionLon}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd03748c065726588!2z${coordinate}!5e0!3m2!1sen!2szh-tw`}
                                    className="w-full"
                                    height="200"
                                    allowfullscreen=""
                                    loading="lazy"
                                ></iframe>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}