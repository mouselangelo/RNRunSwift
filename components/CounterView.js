import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Counter from '../models/Counter';

class CounterView extends Component {

    state = {
        count: 0
    };

    increment = () => {
        Counter.increment();
    }

    decrement = () => {
        Counter.decrement();
    }

    updateState() {
        Counter.getCount(res => this.setState({ count: res }));
    }

    componentWillMount() {
        this.updateState()
        Counter.addListener("onIncrement",
            res => this.setState(res));
        Counter.addListener("onDecrement",
            res => this.setState(res));
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.increment}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
                <Text style={styles.counter}>
                    {this.state.count}
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.decrement}
                >
                    <Text style={styles.buttonText}>
                        -
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        padding: 10,
        paddingTop: 80,
        paddingBottom: 80,
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        margin: 10,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
    },
    buttonText: {
        textAlign: "center",
        fontSize: 48,
        color: "#999",
        padding: 10,
    },
    counter: {
        fontSize: 72,
        color: "deepskyblue",
        alignSelf: "center",
        padding: 10,
    }
});

export default CounterView;