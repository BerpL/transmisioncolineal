import React from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Container, Media, ToggleIconLeft, ToggleIconRight } from './styles';

function VergeChangeMedia({ children, onNext, onPrev }) {
    return (
        <Container>
            <ToggleIconLeft onClick={onNext}><FaAngleLeft /></ToggleIconLeft>
            <Media>{children}</Media>
            <ToggleIconRight onClick={onPrev}><FaAngleRight /></ToggleIconRight>
        </Container>
    );
}

export default VergeChangeMedia;