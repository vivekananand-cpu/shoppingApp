import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'



const Home = () => {

    //dummy items to add

    const Items = [
        "Milk",
        "Butter",
        "Orange",
        "Soda",
        "Lemon",
        "Eggs",
        "Bread",
        "Cookies",
        "Oats",
        "nuts",
        "Paneer",
        "Oil",
        "Almond",
        "Noddles",
        "Soya Chunks"
    ]


    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');



    //filter function

    const searchFilter = (text) => {
        setSearchTerm(text);
        if (text !== "") {
            const newList = items.filter((item) => {
                return item.toLowerCase().includes(text.toLowerCase());
            })
            setFilteredItems(newList)
        } else {
            setFilteredItems(items);
        }

    }

    //add item randomly into the list

    const addItem = () => {
        let randomItem = Items[Math.floor(Math.random() * Items.length)]
        setItems([...items, randomItem])
    }






    return (
        <SafeAreaView >
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={(text) => searchFilter(text)}
                        style={styles.textInput} placeholder="Search" />
                </View>
                <TouchableOpacity
                    onPress={addItem}
                    style={styles.plusIconContainer}
                >
                    <Text style={styles.plusIcon}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.listContainer}
                keyExtractor={(index) => {
                    return index
                }}
                data={searchTerm.length < 1 ? items : filteredItems}
                renderItem={(element) => {
                    return (
                        <View style={styles.listItemTop}>
                        <Text style={{ fontSize: "20" ,fontWeight: "bold" }}>{element.item}</Text>
                       </View>
                    )
                }} />
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    searchContainer: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputContainer: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        flex: 6
    },
    plusIconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    plusIcon: {
        fontSize: 40
    },
    listContainer: {

        padding: 20,
    },
    listItemTop: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    }

})
