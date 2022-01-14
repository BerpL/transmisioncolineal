import React, { useState, useMemo } from 'react';
import { Container, Img, ToggleIcon, Wrapper } from './styles';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
// import ReactPlayer from 'react-player'
import VergeChangeMedia from '../VergeChangeMedia';


function VergeScreen({ images, path }) {

    const [open, setOpen] = useState(true);
    const [pos, setPos] = useState(0);


    const onOpenCloseScreen = () => {
        setOpen(!open);
    };

    const handleNext = () => {
        var temp = pos;
        temp++
        if (temp === images.length) {
            temp = 0;
        }
        setPos(temp)
    }
    const handlePrev = () => {
        var temp = pos;
        if (temp === 0) {
            temp = images.length - 1;
        } else {
            temp--;
        }
        setPos(temp)
    }

    const renderView = useMemo(() => {


        if (!images) return null

        if (images[pos]) {
            return <Img src={`${path}/${images[pos]}.png`} />
        }

        // if (test[pos]["video"]) {
        //     return (
        //         <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
        //             <ReactPlayer url='https://vimeo.com/1844603' width="100%" height="auto" />
        //         </div>
        //     )
        // }
    }, [images, pos, path])

    return (
        <Wrapper style={{ display: !images ? "none" : "block" }}>
            <ToggleIcon onClick={onOpenCloseScreen}>
                {open ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
            </ToggleIcon>
            <Container open={open}>
                {renderView}
                <VergeChangeMedia onNext={handleNext} onPrev={handlePrev}>Imagen {images && images[pos]}</VergeChangeMedia>
            </Container>
        </Wrapper>
    );
}

export default VergeScreen;