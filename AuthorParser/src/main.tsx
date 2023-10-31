import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, ScrollView } from 'react-native';

import { Container } from './UI/Container/Container';

export default function main() {
    return (
        <Container>
            <StatusBar style="auto" />
            <Container orientCenter={true} style={{ maxHeight: "10%" }}>
                <Text>Paste text into text area for parsing!</Text>
            </Container>
            <ScrollView style={{ minHeight: 400 }}>
                <Container orientCenter={true} style={{ minHeight: 400 }}>
                    <TextInput multiline={true} style={{ minWidth: "80%", minHeight: "100%", backgroundColor: "#ECE3CE" }} />
                </Container>
                <Container orientCenter={true} style={{ minHeight: 100 }}>
                    <Button title='Fix text!' />
                </Container>
                <Container orientCenter={true} style={{ minHeight: 400 }}>
                    <TextInput multiline={true} style={{ minWidth: "80%", minHeight: "100%", backgroundColor: "#ECE3CE" }} />
                </Container>
            </ScrollView >
        </Container >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
