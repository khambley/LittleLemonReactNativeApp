import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

// const menuItemsToDisplay = [
//   'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
// ];

const menuItemsToDisplay = [
    { name: 'Hummus', id: '1A' },
    { name: 'Moutabal', id: '2B' },
    { name: 'Falafel', id: '3C' },
    { name: 'Marinated Olives', id: '4D' },
    { name: 'Kofta', id: '5E' }
];

const Item = ({name}) => {
    return (
        <View style={menuStyles.container}>
            <Text style={menuStyles.itemText}>{name}</Text>
        </View>
    )
}

const MenuItems = () => {

    const renderItem = ({item}) => <Item name={item.name} />

    return (
        <View style={menuStyles.container}>
            {/* <ScrollView
            indicatorStyle={"white"}
            style={menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>
                View Menu
                </Text>
                <Text style={menuStyles.itemText}>
                {menuItemsToDisplay[0]}
                </Text>
            </ScrollView> */}
            <Text style={menuStyles.headerText}>View Menu</Text>
            <FlatList data={menuItemsToDisplay} renderItem={renderItem} />
        </View>
    );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: "green",
    },
    headerText: { 
        color: 'white', 
        fontSize: 40, 
        flexWrap: 'wrap' 
    },
    itemText: { 
        color: '#F4CE14', 
        fontSize: 36 
    }
})