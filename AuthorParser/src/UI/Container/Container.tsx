import React from 'react';
import { StyleSheet, ViewStyle, View } from 'react-native';

const Container = ({ children, style, orientCenter }: { children?: React.ReactNode, orientCenter?: boolean, style?: ViewStyle }) => {
    return (
        <View style={[styles.container, style, orientCenter ? styles.center : null]}>
            {children}
        </View >
    );
}

export { Container };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4F6F52',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});