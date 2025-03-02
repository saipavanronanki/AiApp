import { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput, StyleSheet,KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

function Ai() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  async function generateAnswer() {
    setAnswer('Loading...');

    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCY7yxWjBVMMcXvJtSnWmq7W0U4Tcjn7mc',
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );

      console.log(response.data); // Debugging API response

      if (response.data?.candidates?.length > 0) {
        setAnswer(response.data.candidates[0].content.parts[0].text);
      } else {
        setAnswer('No answer received.');
      }
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      setAnswer('Error generating answer.');
    }
    
  }

  return (
   
 
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Chat Hai</Text>

        <TextInput
          style={styles.input}
          multiline
          placeholder="Type your question..."
          value={question}
          onChangeText={(text) => setQuestion(text)}
        />

        <Button onPress={generateAnswer} title="Generate Answer" />

        <Text style={styles.answer}>{answer}</Text>
      </ScrollView>
    
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  answer: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default Ai;
