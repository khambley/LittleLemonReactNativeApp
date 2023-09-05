import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList, Pressable } from 'react-native';

// const menuItemsToDisplay = [
//   'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
// ];

// const menuItemsToDisplay = [
//   { name: 'Hummus', price: '$5.00', id: '1A' },
//   { name: 'Moutabal', price: '$5.00', id: '2B' },
//   { name: 'Falafel', price: '$7.50', id: '3C' },
//   { name: 'Marinated Olives', price: '$5.00', id: '4D' },
//   { name: 'Kofta', price: '$5.00', id: '5E' },
//   { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
//   { name: 'Lentil Burger', price: '$10.00', id: '7G' },
//   { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
//   { name: 'Kofta Burger', price: '$11.00', id: '9I' },
//   { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
//   { name: 'Fries', price: '$3.00', id: '11K' },
//   { name: 'Buttered Rice', price: '$3.00', id: '12L' },
//   { name: 'Bread Sticks', price: '$3.00', id: '13M' },
//   { name: 'Pita Pocket', price: '$3.00', id: '14N' },
//   { name: 'Lentil Soup', price: '$3.75', id: '15O' },
//   { name: 'Greek Salad', price: '$6.00', id: '16Q' },
//   { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
//   { name: 'Baklava', price: '$3.00', id: '18S' },
//   { name: 'Tartufo', price: '$3.00', id: '19T' },
//   { name: 'Tiramisu', price: '$5.00', id: '20U' },
//   { name: 'Panna Cotta', price: '$5.00', id: '21V' },

// ];
const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];
const Separator = () => <View style={menuStyles.separator} />

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>

const Footer = () => (
    <Text style={menuStyles.footerText}>All Rights Reserved by Little Lemon 2023</Text>
)

const Item = ({ name, price }) => {
    return (
        <View style={menuStyles.innerContainer}>
            <Text style={menuStyles.itemText}>{name}</Text>
            <Text style={menuStyles.itemText}>{price}</Text>
        </View>
    )
}

const MenuItems = () => {

    const [showMenu, setShowMenu] = useState(false);
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />

    const renderSectionHeader = ({ section: {title} }) => (
        <Text style={menuStyles.sectionHeader}>{title}</Text>
    );

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
            {/* <Text style={menuStyles.headerText}>View Menu</Text> */}
            {/* <FlatList data={menuItemsToDisplay} 
                      renderItem={renderItem} 
                      keyExtractor={(item) => item.id}
                      ItemSeparatorComponent={Separator}
                      ListHeaderComponent={Header}
                      ListFooterComponent={Footer} /> */}
            {!showMenu && (
              <Text style={menuStyles.infoSection}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. View our menu to explore our cuisine with daily specials!</Text>
            )}
            <View styles={menuStyles.buttonContainer}>
              <Pressable style={menuStyles.button} onPress={() => {
                setShowMenu(!showMenu);
              }}>
                <Text style={menuStyles.buttonText}>{showMenu ? 'Home' : 'View Menu'}</Text>
              </Pressable>
            </View>
           
            {showMenu && (
              <SectionList keyExtractor={(item, index) => item + index }
              sections={menuItemsToDisplay}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader} />
            )}
        </View>
    );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: { 
        color: 'white', 
        fontSize: 40, 
        flexWrap: 'wrap',
        textAlign: 'center' 
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20, 
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE'
    },
    sectionHeader: {
        backgroundColor: '#F4CE14',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 200
    },
    infoSection: {
      color: '#EDEFEE',
      textAlign: "center",
      fontSize: 24,
      padding: 30
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 8,
      margin: 40,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
      borderWidth: 2,
      borderRadius: 12,
    },
    buttonText: {
      fontSize: 32,
      color: '#333333',
      textAlign: 'center'
    }
    
})