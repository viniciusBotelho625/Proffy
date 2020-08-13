import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsaaIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/viniciusBotelho625.png'}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Vinicius Botelho</Text>
                    <Text style={styles.subject}>Front-end</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Apaixonado pelo mundo da tecnologia.
                {'\n'}{'\n'}
                Meu sonho é ser desenvolvedor front-end, e criar interfaces maravilhosas e com grande usabilidade.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, , styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsaaIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;