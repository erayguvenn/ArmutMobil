import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button, TextInput, ScrollView } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


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
    const [answers, setAnswers] = useState<string[]>([]);
    const [userId, setUserId] = useState(0);

    const getUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData !== null) {
                const parsedUserData = JSON.parse(userData);
                const { id } = parsedUserData;
                setUserId(id);
            }
        } catch (error) {
            console.error(error);
        }
    }
    getUserData();

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
        setAnswers([]); // Cevapları sıfırla
        openModal();
    };

    const goToNextPage = () => {
        if (answers[currentPage]) { // Mevcut sayfada cevap seçilmişse ileri git
            setCurrentPage(currentPage + 1);
        }
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

    const renderChoices = (choices: string[], index: number) => {
        if (!choices || choices[0] === "") {
            return (
                <TextInput
                    style={styles.input}
                    placeholder="Cevabınızı girin"
                    onChangeText={text => handleAnswerChange(text, index)}
                    value={answers[index] || ''}
                />
            );
        }

        return choices.map((choice, choiceIndex) => (
            <TouchableOpacity
                key={`choice_${choiceIndex}`}
                style={[styles.choiceButton, { backgroundColor: answers[index] === choice ? 'black' : '#2cb34f' }]}
                onPress={() => handleChoiceClick(choice, index)}
            >
                <Text style={styles.choiceText}>{choice}</Text>
            </TouchableOpacity>
        ));
    };

    const handleAnswerChange = (text: string, index: number) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = text;
        setAnswers(updatedAnswers);
    };

    const handleChoiceClick = (choice: string, index: number) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = choice;
        setAnswers(updatedAnswers);
    };

    const handleSave = () => {
        const inputData = {
            sorular: ruleTemplateString.map((item: any) => item.question),
            cevaplar: answers,
        };
        const ruleFill = JSON.stringify(inputData);
        const data = {
            categoryId: 1,
            state: "waiting_approval",
            userId: userId,
            ruleFill: ruleFill,
        };
        postData(data);
    };
    const postData = async (data: any) => {
        try {
            const response = await axios.post('http://3.127.53.229:60001/api/WorkListing/worklist', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        closeModal();

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
                        {renderChoices(ruleTemplateString[currentPage].choices, currentPage)}
                        <View style={styles.buttonContainer}>
                            <Button title="Geri" onPress={goToPreviousPage} disabled={currentPage === 0} />
                            {currentPage === ruleTemplateString.length - 1 ? (
                                <Button title="Kaydet" onPress={handleSave} />
                            ) : (
                                <Button title="İleri" onPress={goToNextPage} disabled={!answers[currentPage]} />
                            )}
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
