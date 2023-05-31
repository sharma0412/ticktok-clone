import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Share from '../../assets/Share.svg'
import Bookmark from '../../assets/Rectangle.svg'
import Comment from '../../assets/Subtract.svg'
import Like from '../../assets/Vector.svg'
import Flip from '../../assets/flip.svg'
import Add from '../../assets/add.svg'
import { Theme } from '../utils/theme'

const FunctionalBar = () => {
    return (
        <View style={{ flexDirection: 'column', alignItems: "center" }}>
            <Add width={45} height={55} />
            <Text style={styles.iconText}>
                140
            </Text>

            <Bookmark width={30} height={30} />
            <Text style={styles.iconText}>
                140
            </Text>
            <Share width={30} height={30} />
            <Text style={styles.iconText}>
                140
            </Text>

            <Comment width={26.08} height={25.18} />
            <Text style={styles.iconText}>
                140
            </Text>
            <Like width={22} height={24} />
            <Text style={styles.iconText}>
                140
            </Text>
            <Flip width={30} height={30} />
            <Text style={styles.iconText}>
                140
            </Text>
        </View>
    )
}

export default FunctionalBar

const styles = StyleSheet.create({
    iconText: {
        color: Theme.white,
        marginTop: 15, marginBottom: 15
    }
})

