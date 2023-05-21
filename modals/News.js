import { View, Text } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { ScrollView } from "react-native";
import NewsHeading from "../utils/NewsHeading";

const News = () => {
  const url =
    "https://api.worldnewsapi.com/search-news?api-key=d6c1a4d91a414aff92857373d4e91050&text=barkatullah+university";

  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNewsData = async () => {
      const resposne = await axios.get(url);
      const data = resposne.data;
      setNews(data.news);
    };
    getNewsData();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <View>
        <NewsHeading />
        <View>
          {news.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              description={item.text}
              url={item.url}
              image={item.image}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default News;
