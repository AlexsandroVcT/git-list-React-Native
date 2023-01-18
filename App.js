// Crear um aplicativo que recebe as informaçoes do Github, Repositorio de Usuarios
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles.js'
import api from './api';

export default function App() {
  const [respositores, setRepositores] = useState([]);
  
  const _loadingRepositores = async() =>{
    try {
      const response = await api.get("/users");
        setRepositores(response.data)
      } catch (error) {
        console.error('Error on _loadingRepositores', error)
      }
    }

  const _viewDetails = async(userLogin) => {
    try {
      const response = await api.get(`/users/${userLogin}/repos`);
      const reposNumber = response.data.length;
      console.log(reposNumber)
      Alert.alert(userLogin, `Repositórios: ${reposNumber}`)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    _loadingRepositores();
  },[])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Repositório do Github</Text>
        {respositores.map((item)=>{
          return <TouchableOpacity key={item.id} onPress={()=>_viewDetails(item.reposNumber)} style={styles.line}>
            <View style={styles.pai}>
              <Image source={{uri: item.avatar_url}} style={styles.image}/>
              <Text style={styles.lineText}>{item.login}</Text>
            </View>
          </TouchableOpacity>
        })}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

