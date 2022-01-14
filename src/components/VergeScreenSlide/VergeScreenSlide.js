import React, { useState } from 'react';
import { Container, Box, Img, ToggleIcon, Overlay } from './styles';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import StickyBox from 'react-sticky-box';

function VergeScreen() {

    const [open, setOpen] = useState(true);
    const test = ([
        {
            imagen: 'https://www.volarenparamotor.com/blog/wp-content/uploads/2016/03/descompresor-1.jpg',
            texto: 'Texto 1'
        },
        {
            imagen: 'https://www.volarenparamotor.com/blog/wp-content/uploads/2016/03/descompresor-2.jpg',
            texto: 'Texto 2'
        }
    ]);

    const onOpenCloseScreen = () => {
        setOpen(!open);
    };

    return (
        <Overlay>
            <ToggleIcon onClick={onOpenCloseScreen}>
                {open ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
            </ToggleIcon>
            <Container open={open}>
                <StickyBox>
                    <ul
                        style={{
                            marginTop: "10px",
                            display: "flex",
                            flexDirection: "row",
                            overflowY: "hidden",
                            whiteSpace: "nowrap",
                            listStyleType: "none",
                            flexWrap: "nowrap",
                            height: "230px",
                            justifyItems: "center"
                        }}
                    >
                        {test.map(test => (
                            <li
                                style={{
                                    display: "inline-block",
                                    margin: "5px"
                                }}
                            >
                                <Img src={test.imagen} />
                                <Box />
                            </li>
                        ))}
                    </ul>
                </StickyBox>
            </Container>
        </Overlay>
    );
}

export default VergeScreen;