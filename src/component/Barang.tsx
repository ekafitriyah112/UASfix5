import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Barang = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>ROTE MADHURA</Text>
            <Text style={styles.storeText}>bakerystore</Text>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#000000" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Cari..."
                    placeholderTextColor="#000000"
                    color="#000000"
                />
            </View>

            <View style={styles.whiteView}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    <View style={styles.productContainer}>
                        <Image source={require('../img/roti1.png')} style={styles.productImage} resizeMode="cover" />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>Roti Pisang</Text>
                            <Text style={styles.productPrice}>Rp.45.000</Text>
                        </View>
                    </View>
                    <View style={styles.productContainer}>
                        <Image source={require('../img/roti2.png')} style={styles.productImage} resizeMode="cover" />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>Roti Lapis</Text>
                            <Text style={styles.productPrice}>Rp.50.000</Text>
                        </View>
                    </View>
                    <View style={styles.productContainer}>
                        <Image source={require('../img/roti3.png')} style={styles.productImage} resizeMode="cover" />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>Roti Cumcum</Text>
                            <Text style={styles.productPrice}>Rp.35.000</Text>
                        </View>
                    </View>
                    <View style={styles.productContainer}>
                        <Image source={require('../img/roti4.png')} style={styles.productImage} resizeMode="cover" />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>Roti Kukus</Text>
                            <Text style={styles.productPrice}>Rp.25.0000</Text>
                        </View>
                    </View>
                    
                </ScrollView>

                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Cari Lain</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5272F2',
    },
    welcomeText: {
        fontSize: 25,
        color: '#FFFFFF',
        marginLeft: 20,
        marginTop: 30,
    },
    storeText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 20,
        marginLeft: 20,
    },
    searchContainer: {
        width: 341,
        height: 49,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 5,
        marginBottom: 90,
        marginLeft: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 12,
        color: '#000000',
    },
    whiteView: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 16,
        paddingTop: 70,
    },
    scrollViewContent: {
        flexDirection: 'row',
    },
    productContainer: {
        backgroundColor: '#4CB9E7',
        width: 200,
        height: 228,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 16,
    },
    productImage: {
        width: '100%',
        height: '70%',
        borderRadius: 10,
    },
    productInfo: {
        padding: 10,
    },
    productName: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    productPrice: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        width: 235,
        height: 48,
        backgroundColor: '#FFB534',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Barang;