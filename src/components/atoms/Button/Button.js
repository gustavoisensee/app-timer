import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import style from './style';

class Button extends PureComponent {
  static defaultProps = {
    isPrimary: true
  }

  render() {
    const { onPress, text, loading, isPrimary } = this.props;
    const _style = (isPrimary
      ? { view: style.primaryButton, label: style.primaryLabel }
      : { view: style.secondaryButton, label: style.secondaryLabel });

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={_style.view}>
          {loading
            ? <ActivityIndicator size='large' color='#FFFFFF' />
            : <Text style={_style.label}>{text}</Text>}
          
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Button;
