/* source:      https://github.com/brucelin0325/react-native-resizable-flex-panes */

import React, { Component } from 'react'; 
import { StyleSheet, View, Dimensions, PanResponder, Animated } from 'react-native';
import Explorer from './Explorer';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';

export default class SplitView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset          : 0,
            leftWidth       : '20%',
            rightWidth      : '80%',
            deviceWidth     : Dimensions.get('window').width,
            spaceHight           : Dimensions.get('window').height - 55,
            isDividerClicked: false,

            pan             : new Animated.ValueXY()
        }

        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onStartShouldSetPanResponder: (e, gestureState) => {
                this.setState({
                    offset: e.nativeEvent.pageX,
                    isDividerClicked: true
                    
                })
                return true;
            },
            

            // Initially, set the X position offset when touch start
            onPanResponderGrant: (e, gestureState) => {
                this.setState({
                    offset: e.nativeEvent.pageX,
                    isDividerClicked: true
                })
            },

            // When we drag the divider, set the bottomHeight (component state) again.
            onPanResponderMove: (e, gestureState) => {

                this.setState({
                    rightWidth    : gestureState.moveX > (this.state.deviceWidth - 40) ? 40 : this.state.deviceWidth - gestureState.moveX,
                    offset: e.nativeEvent.pageX
                })
            },

            onPanResponderRelease: (e, gestureState) => {
                // Do something here for the touch end event
                this.setState({
                    offset: e.nativeEvent.pageX,
                    isDividerClicked: false
                })
            },
        });
    }


    render() {
        return ( 
            <View style={styles.content}>

                {/* Top View */}
                <Animated.View 
                    style       = {[{backgroundColor: 'white', minWidth: 150, flex: 1}, {width: this.state.leftWidth, height: this.state.spaceHight}]}

                >
                 {/* this.props.childone?this.props.childone:null */}
                 {/* <Explorer></Explorer> */}
                 {this.props.leftView}
                </Animated.View>

                {/* Divider */}
                <View 
                    style={[{width: 15, height: this.state.spaceHight}, this.state.isDividerClicked ? {backgroundColor: '#3b3b3b'} : {backgroundColor: '#666666'}]} 
                    {...this._panResponder.panHandlers}
                >
                </View>

                {/* Bottom View */}
                <Animated.View 
                    style={[{backgroundColor: 'white', minWidth: 40}, {width: this.state.rightWidth, height: this.state.spaceHight}]} 
                   
                >
                 {/* this.props.childTwo?this.props.childTwo:null */}
                 {/* <TextEditor></TextEditor> */}
                 {this.props.rightView}
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content         : {
        flex        : 1,
        flexDirection: 'row',
    },
})