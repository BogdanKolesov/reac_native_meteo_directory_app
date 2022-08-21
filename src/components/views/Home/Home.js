import React from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import { meteo, thunder, weather } from '../../../constants/images';
import { Paragraph, Picture, ViewContainer, ViewTitle } from '../../atoms';
import { StyledText } from './Home.styles';



const Home = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <ViewTitle>Всем хорошей погоды!</ViewTitle>
                <StyledText>
                    <Text>
                        Данное приложение создано метеорологом для метеорологов и не претендует на уникальность в плане контената 🐺🐺🐺. Статьи были взяты из различных открытых источников в сети "ИНТЕРНЕТ" 🗺.
                        Надеюсь, данное приложение будет полезно для Вас!

                    </Text>
                </StyledText>
                <Picture source={thunder} />
            </ViewContainer>
        </View>
    );
}


export default Home;
