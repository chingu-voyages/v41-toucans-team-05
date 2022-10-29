import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import tarek from '../Footer/tarek.jpg'
import tommy from '../Footer/tommy.jpg'

const FooterTest = () => {
    return (
        <Box>
            <h1 style={{
                color: "#fff5e4",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Our Team
            </h1>
            <img style={{
                display: "block",
                margin: "auto",
                width: "50%"

            }}></img>
            <Container>
                <Row>
                    <Column>
                        {/* <Heading>Tarek</Heading> */}
                        <h4 style={{
                            color: "#8a6345",
                            textAlign: "center",
                        }}>William</h4>
                        <img style={{
                            display: "block",
                            width: "100%"
                        }} src={tarek} height="200px" width="200" alt="error loading"></img>
                        <FooterLink href="https://github.com/xxTarekxx">GitHub</FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/tarek-ismael-96777578/">LinkedIn</FooterLink>
                    </Column>
                    <Column>
                        {/* <Heading>Tarek</Heading> */}
                        <h4 style={{
                            color: "#8a6345",
                            textAlign: "center",
                        }}>Tarek I.</h4>
                        <img style={{
                            display: "block",
                            width: "100%"
                        }} src={tarek} height="200px" width="200" alt="error loading"></img>
                        <FooterLink href="https://github.com/xxTarekxx">GitHub</FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/tarek-ismael-96777578/">LinkedIn</FooterLink>
                    </Column>
                    <Column>
                        {/* <Heading>Tarek</Heading> */}
                        <h4 style={{
                            color: "#8a6345",
                            textAlign: "center",
                        }}>Tommy</h4>
                        <img style={{
                            display: "block",
                            margin: "auto",
                            width: "100%"
                        }} src={tommy} height="200px" width="200" alt="error loading"></img>
                        <FooterLink href='https://github.com/TL-Dang' target="_blank">GitHub</FooterLink>
                        <FooterLink href='https://www.linkedin.com/in/tommy-dang-307940ab/' target="_blank">LinkedIn</FooterLink>
                    </Column>
                    <Column>
                        {/* <Heading>Tarek</Heading> */}
                        <h4 style={{
                            color: "#8a6345",
                            textAlign: "center",
                        }}>Maria</h4>
                        <img style={{
                            display: "block",
                            margin: "auto",
                            width: "100%"
                        }} src={tommy} height="200px" width="200" alt="error loading"></img>
                        <FooterLink href='https://github.com/TL-Dang' target="_blank">GitHub</FooterLink>
                        <FooterLink href='https://www.linkedin.com/in/tommy-dang-307940ab/' target="_blank">LinkedIn</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box >
    );
};
export default FooterTest;