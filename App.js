import React from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
//
// //Exercise 1
// const datasource = [
//   {key: 'a'},
//   {key: 'b'},
//   {key: 'c'},
//   {key: 'd'},
//   {key: 'e'},
//   {key: 'f'},
//   {key: 'g'},
//   {key: 'h'},
//   {key: 'i'},
//   {key: 'j'},
//   {key: 'k'},
//   {key: 'l'},
//   {key: 'm'},
//   {key: 'n'},
//   {key: 'o'},
//   {key: 'p'},
//   {key: 'q'},
//   {key: 'r'},
//   {key: 's'},
//   {key: 't'},
//   {key: 'u'},
//   {key: 'v'},
//   {key: 'w'},
//   {key: 'x'},
//   {key: 'y'},
//   {key: 'z'},
// ];
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
//
// export default function App() {
//   return (
//       <View>
//         <FlatList data={datasource} renderItem={renderItem} />
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left'
//   },
// });

//Exercise 2
// import {StyleSheet, Text, View, TouchableOpacity, SectionList} from 'react-native';
//
// const datasource = [
//   {data:[
//       {key: 'a'},
//       {key: 'e'},
//       {key: 'i'},
//       {key: 'o'},
//       {key: 'u'}
//     ],
//     title:"Vowels", bgcolor:"skyblue"},
//   {data:[
//       {key: 'b'},
//       {key: 'c'},
//       {key: 'd'},
//       {key: 'f'},
//       {key: 'g'},
//       {key: 'h'},
//       {key: 'j'},
//       {key: 'k'},
//       {key: 'l'},
//       {key: 'm'},
//       {key: 'n'},
//       {key: 'p'},
//       {key: 'q'},
//       {key: 'r'},
//       {key: 's'},
//       {key: 't'},
//       {key: 'v'},
//       {key: 'w'},
//       {key: 'x'},
//       {key: 'y'},
//       {key: 'z'},
//     ],
//     title:"Consonants", bgcolor: "khaki"}
// ];
//
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
//
// export default function App() {
//   return (
//       <View>
//         <SectionList sections={datasource}
//                      renderItem={renderItem}
//                      renderSectionHeader={({section:{title,bgcolor}})=>(
//                          <Text style={[styles.headerText,{backgroundColor:bgcolor}]}>
//                            {title}
//                          </Text>
//                      )}/>
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left'
//   },
//   headerText: {
//     fontSize: 20,
//     margin: 10,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   }
// });

//Exercise 3

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList, Image, Button } from 'react-native';

const datasource = [
    {data: [
            {name: "Pikachu", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png"},
            {name: "Raichu", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_26-2x.png"},
        ], elementType: "Lightning", bgcolor: "yellow", color: "#B8860B"},
    {data: [
            {name: "Charmander", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png"},
            {name: "Charizard", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png"},
        ], elementType: "Fire", bgcolor: "red", color: "#B22222"},
    {data: [
            {name: "Squirtle", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png"},
            {name: "Blastoise", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png"},
        ], elementType: "Water", bgcolor: "blue", color: "#4D9BFF"},
    {data: [
            {name: "Bulbasaur", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1-2x.png"},
            {name: "Venusaur", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_3-2x.png"},
        ], elementType: "Grass", bgcolor: "green", color: "#4DFF8C"},
]

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <View style={styles.parentContainer}>
                <Text style={styles.textStyle}>{item.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.img }} style={styles.imageStyle} />
            </View>
        </TouchableOpacity>
    )
}

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Add Pokemon"/>
            </View>
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{elementType, bgcolor, color}})=>(
                             <Text style={[styles.headerText, {backgroundColor: bgcolor, color: color}]}>{elementType}</Text>
                         )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F4F4F9',
    },
    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    textStyle: {
        fontSize: 18,
        color: "#333",
        fontWeight: "500",
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 5,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    imageStyle: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    addButton: {
        margin: 15,
        borderRadius: 8,
        backgroundColor: "#4CAF50",
        color: "white",
    },
});
