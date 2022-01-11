import React from 'react';
import 
  { SafeAreaView, View, FlatList, StyleSheet, Text, Image, StatusBar } 
from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { BOOK_DATA } from '../../assets/books';
import { FavoritesChart } from '../components/favoritesChart';

export default function Home() {
  const renderItem = ({ item }) => (
    <View>
      <Image
        source={item}
        style={{
          width: 100,
          height: 130,
          margin: 8,
          borderRadius: 3,
        }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Good afternoon, Matt.</Text>
        <Text style={styles.header2}>You have 5 credits.</Text>
        <Button
          title="Continue listening                    "
          titleStyle={{
            flex: 1,
            textAlign: 'left',
            marginHorizontal: 6,
            fontWeight: 'bold',
          }}
          color={'white'}
          buttonStyle={{
            backgroundColor: 'black',
            
          }}
          icon={
            <Icon
              name="arrow-right"
              size={30}
              color="white"
              marginRight={-10}
            />
          }
          iconRight
        />
        <Text style={styles.text}>Best sellers</Text>
        <FlatList
          data={BOOK_DATA}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.toString()}
        />
        <Text style={styles.text}>Recommended for you</Text>
        <Text style={styles.text2}>Included with your membership</Text>
        <FlatList
          data={BOOK_DATA}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.toString()}
        />
        <Text style={styles.text}>Great first listens</Text>
        <FlatList
          data={BOOK_DATA}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.toString()}
        />
        <Text style={styles.text}>Hear what's popular</Text>
        <FlatList
          data={BOOK_DATA}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.toString()}
        />
        <Button
          title="Find your favorite genre                    "
          titleStyle={{
            flex: 1,
            textAlign: 'left',
            marginHorizontal: 6,
            fontWeight: 'bold',
          }}
          color={'white'}
          buttonStyle={{backgroundColor: 'black'}}
          icon={
            <Icon
              name="arrow-right"
              size={30}
              color="white"
            />
          }
          iconRight
        />
        <FavoritesChart />
        <Text style={styles.text}>Popular podcasts</Text>
        <FlatList
          data={BOOK_DATA}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.toString()}
        />
        <Button
          title="Browse all podcasts                    "
          titleStyle={{
            flex: 1,
            textAlign: 'right',
            fontSize: 15,
          }}
          color={'white'}
          buttonStyle={{backgroundColor: 'black'}}
          icon={
            <Icon
              name="arrow-right"
              size={30}
              color="white"
            />
          }
          iconRight
        />
        <Text style={styles.text}>Curated collections you may enjoy</Text>
        <Text style={styles.text2}>Included with your membership</Text>
        <Text style={styles.text2}>Six squares: Be your best self, Feel-good fiction, Listens for all ages, Never stop learning, crack the case, Haunting and otherworldy</Text>
        <Button
          title="Search by category and see more editor picks                    "
          color={'white'}
          buttonStyle={{backgroundColor: 'black'}}
          icon={
            <Icon
              name="arrow-right"
              size={30}
              color="white"
            />
          }
          iconRight
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#000000', 
  },
  item: {
    backgroundColor: '#8F999C',
    padding: 50,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 12,
    color: '#FFFFFF',
  },
  text2: {
    marginHorizontal: 12,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#B6B6B6',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#FFFFFF',
    marginTop: 10,
    marginHorizontal: 15,
  },
  header2: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFFFFF',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  chart: {
    width: 80,
    height: 40,
  },
  chartText: {
    fontSize: 10,
  },
});