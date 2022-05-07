export default function Restaurants() {
    return (
        <div className="contentWrapper">
            <div className="restaurantArea w-full">
                <div className="flex items-center mb-5">
                    <p className="title">
                        熱門餐飲<span className="subtitle hidden lg:inline ml-5"
                        >饕客必吃美食</span
                        >
                    </p>
                </div>
                <div className="restaurantCardGroup">
                    {/* {itmes.map((data) =>
                        <RestaurantCard
                            cardData={data}
                            key={data.ID}
                            className="underLine"
                        />)
                    } */}
                </div>
            </div>
        </div>
    )
}