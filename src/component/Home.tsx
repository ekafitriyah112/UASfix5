import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    const handleButtonPress = () => {
        // Navigate to the 'Barang' screen when the button is pressed
        navigation.navigate('Barang');
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../img/roti2.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Text style={styles.title}>ROTE MADHURA</Text>
            <Text style={styles.description}>
                Butuh roti madura? di ROTEMADHURA serba ada!
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5272F2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFB534',
        width: 235,
        height: 48,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 25,
        color: '#FFFFFF',
    },
});

export default Home;