/**
 * Un componente de bienvenida para la aplicación.
 *
 * Uso:
 * <Welcome navigation={navigation} />
 */
import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "./constants/colors";
import Berto from "../components/Button";
const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/personasCorriendo.jpg")}
            style={{
              height: 150,

              width: 150,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 150 },
                { rotate: "-15deg" },
              ],
            }}
          />
          <Image
            source={require("../assets/personaLeyendo.jpg")}
            style={{
              height: 150,
              width: 150,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              left: 100,
              transform: [
                { translateX: 120 },
                { translateY: 120 },
                { rotate: "10deg" },
              ],
            }}
          />

          <Image
            source={require("../assets/horizonte.jpg")}
            style={{
              height: 160,
              width: 160,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: -20,
              transform: [
                { translateX: 40 },
                { translateY: 400 },
                { rotate: "15deg" },
              ],
            }}
          />
          <Image
            source={require("../assets/victoria.jpg")}
            style={{
              height: 250,
              width: 250,
              borderRadius: 20,
              position: "absolute",
              top: 220,
              left: 150,
              transform: [
                { translateX: 70 },
                { translateY: 100 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>
        {/* content */}
        <View
          style={{
            paddingVertical: 170,
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
           Bienvenido
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: COLORS.white,
              marginLeft: 30
            }}
          >
            empecemos
          </Text>

          <View style={{ paddingVertical: 15, paddingHorizontal: 5 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 15,
              }}
            >
             Una mejor version de tí te espera
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: -15,
              }}
            >
              Adopta y disfruta de un estilo de vida más saludable con un seguimiento perfecto de tus hábitos.
            </Text>
          </View>
          <Berto
            title="Únete ahora "
            onPress={() => navigation.navigate("Signup")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 80,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              {" "}
             ¿Ya tienes una cuenta?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
               Iniciar sesión
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
