import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button, TextInput, ScrollView } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

interface CardProps {
    title: string;
    imageUrl: any;
    ruleTemplate: any;
}

type afterSelect = {
    navigation: StackNavigationProp<RootStackParamList, 'AfterSelectService'>;
};

const openSelectService = ({ navigation }: afterSelect) => {
    console.log("Hizmet seçildi");
    navigation.navigate('AfterSelectService');
};

const Card = ({ title, imageUrl, ruleTemplate }: CardProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [ruleTemplateString, setRuleTemplateString] = useState(ruleTemplate);
    const [answer, setAnswer] = useState('');

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setCurrentPage(0);
    };

    const onPressButton = (ruleTemplate: any) => {
        const ruleTemplateString = JSON.parse(ruleTemplate);
        setRuleTemplateString(ruleTemplateString);
        setCurrentPage(0);
        openModal();
    };

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const renderQuestion = (question: string) => {
        return (
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{question}</Text>
            </View>
        );
    };

    const renderChoices = (choices: string[]) => {
        if (!choices || choices[0] === "") {
            return (
                <TextInput
                    style={styles.input}
                    placeholder="Cevabınızı girin"
                    onChangeText={text => setAnswer(text)}
                />
            );
        }

        return choices.map((choice, index) => (
            <TouchableOpacity key={`choice_${index}`} style={styles.choiceButton}>
                <Text style={styles.choiceText}>{choice}</Text>
            </TouchableOpacity>
        ));
    };


    return (
        <View style={styles.card}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.resim}
            />
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={() => onPressButton(ruleTemplate)}>
                <Text style={styles.buttonText}>Teklif Al</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                        <Text style={styles.closeButtonText}>Kapat</Text>
                    </TouchableOpacity>
                    <View style={styles.modalContent}>
                        {renderQuestion(ruleTemplateString[currentPage].question)}
                        {renderChoices(ruleTemplateString[currentPage].choices)}
                        <View style={styles.buttonContainer}>
                            <Button title="Geri" onPress={goToPreviousPage} disabled={currentPage === 0} />
                            <Button title="İleri" onPress={goToNextPage} disabled={currentPage === ruleTemplateString.length - 1} />
                        </View>
                    </View>

                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
        marginHorizontal: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
    resim: {
        width: 160,
        height: 130,
        marginBottom: 7,
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#2cb34f',
        paddingVertical: 8,
        borderRadius: 4,
        marginTop: 8,
        width: '80%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        minHeight: 250,
        minWidth: 350,

    },
    questionContainer: {
        marginBottom: 16,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    choiceButton: {
        backgroundColor: '#2cb34f',
        paddingVertical: 8,
        borderRadius: 4,
        marginTop: 8,
    },
    choiceText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    closeButton: {
        marginBottom: 16,

    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginTop: 8,
    },
});

export default Card;
