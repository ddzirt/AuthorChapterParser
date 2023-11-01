import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, ScrollView } from 'react-native';

import { Container } from './UI/Container/Container';
import { Parse } from './lib/Parser/parser';

export default function main() {
    const [text, onChangeText] = React.useState<string>('');
    const [newText, setText] = React.useState<string>('');

    const parsingLogicOnClick = () => {
        if (text !== '' && text !== null) {
            setText(Parse(text));
        }
    }

    return (
        <Container>
            <StatusBar style="auto" />
            <Container orientCenter={true} style={{ maxHeight: "10%" }}>
                <Text>Paste text into text area for parsing!</Text>
            </Container>
            <ScrollView style={{ minHeight: 400 }}>
                <Container orientCenter={true} style={{ minHeight: 400 }}>
                    <TextInput onChangeText={onChangeText} multiline={true} style={{ minWidth: "80%", minHeight: "100%", backgroundColor: "#ECE3CE" }} />
                </Container>
                <Container orientCenter={true} style={{ minHeight: 100 }}>
                    <Button onPress={parsingLogicOnClick} title='Fix text!' />
                </Container>
                <Container orientCenter={true} style={{ minHeight: 400 }}>
                    <TextInput value={newText} multiline={true} style={{ minWidth: "80%", minHeight: "100%", backgroundColor: "#ECE3CE" }} />
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
