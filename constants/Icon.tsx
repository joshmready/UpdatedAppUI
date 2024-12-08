import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Icons = {
    Ionicons
}

export default Icons;

Ionicons.loadFont();

type IconSizeProps = {
    iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
    size: IconSizeProps['iconSizes'];
    name: string;
    color: string;
}

export const IconSizes = {
    small: 13,
    medium: 18,
    large: 23,
    extraLarge: 27,
};

export const IIcon = ({ size, name, color }: IconProps) => (
    <Ionicons size={IconSizes[size]} name={name} color={color} />
); 