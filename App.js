import React from 'react';
import {KeyboardAvoidingView, View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function WhatsApp () {
  return (
    <KeyboardAvoidingView>
      <View style={styles.topContainer}>

        <Text style={styles.whatsapp}>WhatsApp</Text>

        <TouchableOpacity style={styles.botaocam}>
          <Image
            style={styles.cam}
            source={{ uri: "https://www.tecword.com.br/wp-content/uploads/2021/12/WhatsApp-lancara-novidades-em-sua-camera-1.png"}}
    />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaochats}>
          <Text style={styles.chats}>CHATS</Text>
        </TouchableOpacity>

        <Text style={styles.chatgeralnotifications}></Text>
        <Text style={styles.chatgeralnotificationsn}>70</Text>


        <TouchableOpacity style={styles.botaostatus}>
          <Text style={styles.status}>STATUS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaocalls}>
          <Text style={styles.calls}>CALLS</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.chatscreencontainer}>

      <Image 
        style={styles.imagechat001}
        source={{ uri: "https://tm.ibxk.com.br/2022/02/03/03175654472418.jpg?ims=1120x420 "}}
    />

      <Text style={styles.chat001}>Tio Zuck</Text>
      <Text style={styles.chat001message}>Fi, apressa ae no projeto!</Text>
      <Text style={styles.messagetime001}>02:00</Text>

      <Text style={styles.notification}></Text>
      <Text style={styles.numbernotification}>7</Text>

      <Image 
        style={styles.imagechat001}
        source={{ uri: "https://pbs.twimg.com/profile_images/1057631480459886595/9VPdGJJz_400x400.jpg "}}
    />

      <Text style={styles.chat001}>Biroliro</Text>
      <Text style={styles.chat001message}>Olha só, a gente tá neutro, talkey</Text>
      <Text style={styles.messagetime001}>10:25</Text>

      <Text style={styles.notification}></Text>
      <Text style={styles.numbernotification}>2</Text>

      <Image 
        style={styles.imagechat001}
        source={{ uri: "https://yt3.ggpht.com/ytc/AKedOLTxp_yA1EqeS8rPJDe4m5qExsd3-OKqmlB3M6Oq5A=s900-c-k-c0x00ffffff-no-rj"}}
    />

      <Text style={styles.chat001}>Código Font TV</Text>
      <Text style={styles.chat001message}>Qual o projeto de hoje?</Text>
      <Text style={styles.messagetime001}>19:10</Text>

      <Text style={styles.notification}></Text>
      <Text style={styles.numbernotification}>1</Text>

      <Image 
        style={styles.imagechat001}
        source={{ uri: "https://pbs.twimg.com/media/EVA6NnQXsAUsceZ.jpg"}}
    />

      <Text style={styles.chat001}>Guanabara</Text>
      <Text style={styles.chat001message}>Gafanhoto, mundo 4 de Python...</Text>
      <Text style={styles.messagetime001}>07:30</Text>

      <Text style={styles.notification}></Text>
      <Text style={styles.numbernotification}>1</Text>

      <Image 
        style={styles.imagechat001}
        source={{ uri: "https://veja.abril.com.br/wp-content/uploads/2019/06/bill-gates-2019_1528.jpg.jpg"}}
    />

      <Text style={styles.chat001}>Bill Gates</Text>
      <Text style={styles.chat001message}>Mas por que Linux??</Text>
      <Text style={styles.messagetime001}>22:09</Text>

      <Text style={styles.notification}></Text>
      <Text style={styles.numbernotification}>8</Text>

      <Image 
        style={styles.imagechat001}
        source={{ uri: "https://revistaesmeril.com.br/wp-content/uploads/morgen-2-696x696.jpg"}}
    />

      <Text style={styles.chat001}>Dr. Morgen</Text>
      <Text style={styles.chat001message}>Errado. Segundo Duns Scotus, ...</Text>
      <Text style={styles.messagetime001}>18:21</Text>

      <Text style={styles.notification}></Text>
      <Text style={styles.numbernotification}>5</Text>

    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    width: 328,
    height: 100,
    borderRadius: 1,
    elevation: 3,
    backgroundColor: "#363636",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 2,
    marginTop: 2
  },
  whatsapp: {
    fontSize: 19,
    fontWeight: "lighter",
    color: "white",
    marginTop: 13,
    marginLeft: 20
  },
  cam: {
    width: 25,
    height: 25,
    borderRadius: 30,
    marginTop: 26,
    marginLeft: 8
  },
  botaocam: {
    width: 25,
    height: 25
  },
  chats: {
    fontSize: 14,
    fontWeight: "lighter",
    color: "white",
    marginTop: 4,
    marginLeft: 55
  },
  botaochats: {
    fontSize: 16
  },
  status: {
    fontSize: 14,
    fontWeight: "lighter",
    color: "white",
    marginTop: -18,
    marginLeft: 158
  },
  calls: {
    fontSize: 14,
    fontWeight: "lighter",
    color: "white",
    marginTop: -21,
    marginLeft: 260
  },
  botaostatus: {
    fontSize: 16,
  },
  botaocalls: {
    fontSize: 16,
  },
  chatgeralnotifications: {
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    backgroundColor: "#66CDAA",
    borderRadius: 25,
    width: 17,
    height: 17,
    marginLeft: 100,
    marginTop: -18
  },
  chatgeralnotificationsn: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 101,
    marginTop: -17
  },
  chatscreencontainer: {
    width: 328,
    height: 422,
    backgroundColor: "#1C1C1C",
    marginTop: -6,
    marginLeft: 2
  },
  imagechat001: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 20
  },
  chat001: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    marginTop: -50,
    marginLeft: 84
  },
  chat001message: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
    marginTop: 7,
    marginLeft: 86
  },
  messagetime001: {
    fontSize: 11,
    color: "white",
    fontWeight: "lighter",
    marginTop: -40,
    marginLeft: 290
  },
  notification: {
    color: "black",
    backgroundColor: "#66CDAA",
    borderRadius: 25,
    width: 20,
    height: 20,
    marginLeft: 294,
    marginTop: 6
  },
  numbernotification: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 300,
    marginTop: -18
  }
})
